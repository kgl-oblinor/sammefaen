'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import SocialLoginButtons from './SocialLoginButtons';
import OptimizedImage from '@/components/ui/OptimizedImage';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional()
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, error, clearError } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      rememberMe: false
    }
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    clearError();

    try {
      await signIn(data.email, data.password, data.rememberMe);
    } catch (err) {
      // Error is handled in context
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030c1d]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/signInImage.af921364.png"
          alt="Sign in background"
          fill
          priority
          className="opacity-40 object-cover"
          containerClassName="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#030c1d]" />
      </div>

      {/* Back Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Dashboard
      </Link>

      {/* Sign In Card */}
      <div className="relative z-10 w-full max-w-[450px] px-6">
        <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-12 shadow-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Enter your email and password to sign in</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-[#0f1535] border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4318ff] focus:ring-2 focus:ring-[#4318ff]/20 transition-all"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-3 bg-[#0f1535] border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4318ff] focus:ring-2 focus:ring-[#4318ff]/20 transition-all"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  {...register('rememberMe')}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="relative w-5 h-5 bg-transparent border-2 border-white/20 rounded-md peer-checked:bg-[#4318ff] peer-checked:border-[#4318ff] transition-all">
                  <svg
                    className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-[#4318ff] hover:text-[#9f7aea] transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-[#4318ff] to-[#9f7aea] text-white font-bold text-sm uppercase rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative">
                <span className="px-4 bg-gradient-to-br from-[#06132874] to-[#0a0e2371] text-gray-500 text-xs">or</span>
              </div>
            </div>

            <SocialLoginButtons />
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="text-[#4318ff] hover:text-[#9f7aea] font-semibold transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Styles */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, transparent 0%, #030c1d 70%);
        }
        
        .glass-card {
          background: linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%);
        }

        input[type="checkbox"]:checked ~ div svg {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}