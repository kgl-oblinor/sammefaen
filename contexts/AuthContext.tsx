'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  provider?: 'email' | 'google' | 'apple' | 'facebook';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithSocial: (provider: 'google' | 'apple' | 'facebook') => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (token: string, newPassword: string) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check for saved session on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const savedSession = localStorage.getItem('auth_session');
      if (savedSession) {
        const sessionData = JSON.parse(savedSession);
        // In a real app, validate the token with the backend
        setUser(sessionData.user);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string, rememberMe?: boolean) => {
    setError(null);
    setLoading(true);

    try {
      // Simulate API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (email === 'demo@example.com' && password === 'demo123') {
        const userData: User = {
          id: '1',
          email,
          name: 'Demo User',
          provider: 'email'
        };

        setUser(userData);
        
        // Save session
        const sessionData = {
          user: userData,
          token: 'mock-jwt-token',
          expiresAt: rememberMe 
            ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
            : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 1 day
        };

        if (rememberMe) {
          localStorage.setItem('auth_session', JSON.stringify(sessionData));
        } else {
          sessionStorage.setItem('auth_session', JSON.stringify(sessionData));
        }

        router.push('/dashboard');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sign in failed';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    setError(null);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData: User = {
        id: Date.now().toString(),
        email,
        name,
        provider: 'email'
      };

      setUser(userData);
      
      // Save session
      const sessionData = {
        user: userData,
        token: 'mock-jwt-token',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      };

      localStorage.setItem('auth_session', JSON.stringify(sessionData));
      router.push('/dashboard');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sign up failed';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    
    try {
      // Clear session
      localStorage.removeItem('auth_session');
      sessionStorage.removeItem('auth_session');
      
      setUser(null);
      router.push('/signin');
    } catch (err) {
      console.error('Sign out failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const signInWithSocial = async (provider: 'google' | 'apple' | 'facebook') => {
    setError(null);
    setLoading(true);

    try {
      // Simulate social login - in real app, use OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));

      const userData: User = {
        id: Date.now().toString(),
        email: `user@${provider}.com`,
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        provider
      };

      setUser(userData);
      
      const sessionData = {
        user: userData,
        token: 'mock-social-jwt-token',
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      };

      localStorage.setItem('auth_session', JSON.stringify(sessionData));
      router.push('/dashboard');
    } catch (err) {
      const message = `${provider} sign in failed`;
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setError(null);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app, send reset email
      console.log('Password reset email sent to:', email);
    } catch (err) {
      const message = 'Failed to send reset email';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (token: string, newPassword: string) => {
    setError(null);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app, validate token and update password
      console.log('Password updated successfully');
    } catch (err) {
      const message = 'Failed to update password';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    signInWithSocial,
    resetPassword,
    updatePassword,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}