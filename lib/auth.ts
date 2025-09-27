// Authentication utilities and helpers
import { z } from 'zod';

// Validation schemas
export const emailSchema = z.string().email('Invalid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

// Token management
export const TOKEN_KEY = 'auth_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

export function saveTokens(accessToken: string, refreshToken?: string) {
  localStorage.setItem(TOKEN_KEY, accessToken);
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}

export function getAccessToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function clearTokens() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

// API error handling
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export function handleApiError(error: any): ApiError {
  if (error.response) {
    // Server responded with error
    return {
      message: error.response.data?.message || 'Server error occurred',
      code: error.response.data?.code,
      status: error.response.status
    };
  } else if (error.request) {
    // Request made but no response
    return {
      message: 'Network error - please check your connection',
      code: 'NETWORK_ERROR'
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR'
    };
  }
}

// Session management
export interface SessionData {
  user: {
    id: string;
    email: string;
    name?: string;
  };
  accessToken: string;
  refreshToken?: string;
  expiresAt: string;
}

export function saveSession(session: SessionData) {
  localStorage.setItem('auth_session', JSON.stringify(session));
  saveTokens(session.accessToken, session.refreshToken);
}

export function getSession(): SessionData | null {
  const sessionStr = localStorage.getItem('auth_session');
  if (!sessionStr) return null;
  
  try {
    const session = JSON.parse(sessionStr) as SessionData;
    // Check if session is expired
    if (new Date(session.expiresAt) < new Date()) {
      clearSession();
      return null;
    }
    return session;
  } catch {
    clearSession();
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem('auth_session');
  clearTokens();
}

// Password strength checker
export function checkPasswordStrength(password: string): {
  score: number;
  feedback: string[];
} {
  let score = 0;
  const feedback: string[] = [];

  if (password.length >= 8) score++;
  else feedback.push('Use at least 8 characters');

  if (password.length >= 12) score++;
  
  if (/[a-z]/.test(password)) score++;
  else feedback.push('Include lowercase letters');
  
  if (/[A-Z]/.test(password)) score++;
  else feedback.push('Include uppercase letters');
  
  if (/[0-9]/.test(password)) score++;
  else feedback.push('Include numbers');
  
  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
    if (score === 6) feedback.push('Strong password!');
  } else {
    feedback.push('Include special characters for extra security');
  }

  return { score: Math.min(score, 5), feedback };
}

// OAuth helpers
export function getOAuthUrl(provider: 'google' | 'apple' | 'facebook', redirectUri: string): string {
  const baseUrls = {
    google: 'https://accounts.google.com/o/oauth2/v2/auth',
    apple: 'https://appleid.apple.com/auth/authorize',
    facebook: 'https://www.facebook.com/v12.0/dialog/oauth'
  };

  const clientIds = {
    google: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    apple: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID || ''
  };

  const scopes = {
    google: 'openid email profile',
    apple: 'name email',
    facebook: 'email public_profile'
  };

  const params = new URLSearchParams({
    client_id: clientIds[provider],
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: scopes[provider],
    state: generateState()
  });

  if (provider === 'apple') {
    params.append('response_mode', 'form_post');
  }

  return `${baseUrls[provider]}?${params.toString()}`;
}

function generateState(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Rate limiting helper
const attemptCounts = new Map<string, { count: number; resetAt: Date }>();

export function checkRateLimit(identifier: string, maxAttempts = 5, windowMinutes = 15): {
  allowed: boolean;
  remainingAttempts: number;
  resetAt?: Date;
} {
  const now = new Date();
  const attempt = attemptCounts.get(identifier);

  if (!attempt || attempt.resetAt < now) {
    attemptCounts.set(identifier, {
      count: 1,
      resetAt: new Date(now.getTime() + windowMinutes * 60 * 1000)
    });
    return { allowed: true, remainingAttempts: maxAttempts - 1 };
  }

  if (attempt.count >= maxAttempts) {
    return {
      allowed: false,
      remainingAttempts: 0,
      resetAt: attempt.resetAt
    };
  }

  attempt.count++;
  return {
    allowed: true,
    remainingAttempts: maxAttempts - attempt.count
  };
}