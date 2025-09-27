import axios from 'axios';
import { saveSession, clearSession, getAccessToken, handleApiError } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const authApi = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
authApi.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh on 401
authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      
      try {
        const refreshed = await authService.refreshToken();
        if (refreshed) {
          return authApi(error.config);
        }
      } catch {
        clearSession();
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async signIn(email: string, password: string, rememberMe = false) {
    try {
      const response = await authApi.post('/signin', { email, password });
      const { user, accessToken, refreshToken } = response.data;
      
      const expiresAt = rememberMe
        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        : new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
      
      saveSession({
        user,
        accessToken,
        refreshToken,
        expiresAt: expiresAt.toISOString()
      });
      
      return { user };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async signUp(email: string, password: string, name: string) {
    try {
      const response = await authApi.post('/signup', { email, password, name });
      const { user, accessToken, refreshToken } = response.data;
      
      saveSession({
        user,
        accessToken,
        refreshToken,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      });
      
      return { user };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async signOut() {
    try {
      await authApi.post('/signout');
    } catch {
      // Continue with local signout even if API fails
    } finally {
      clearSession();
    }
  },

  async resetPassword(email: string) {
    try {
      await authApi.post('/reset-password', { email });
      return { success: true };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async updatePassword(token: string, newPassword: string) {
    try {
      await authApi.post('/update-password', { token, newPassword });
      return { success: true };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async verifyEmail(token: string) {
    try {
      const response = await authApi.post('/verify-email', { token });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) return false;
      
      const response = await authApi.post('/refresh', { refreshToken });
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      const session = JSON.parse(localStorage.getItem('auth_session') || '{}');
      saveSession({
        ...session,
        accessToken,
        refreshToken: newRefreshToken
      });
      
      return true;
    } catch {
      return false;
    }
  },

  async socialLogin(provider: 'google' | 'apple' | 'facebook', code: string) {
    try {
      const response = await authApi.post(`/social/${provider}`, { code });
      const { user, accessToken, refreshToken } = response.data;
      
      saveSession({
        user,
        accessToken,
        refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      });
      
      return { user };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async updateProfile(userId: string, data: Partial<{ name: string; email: string; avatar: string }>) {
    try {
      const response = await authApi.put(`/users/${userId}`, data);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async deleteAccount(userId: string, password: string) {
    try {
      await authApi.delete(`/users/${userId}`, { data: { password } });
      clearSession();
      return { success: true };
    } catch (error) {
      throw handleApiError(error);
    }
  }
};