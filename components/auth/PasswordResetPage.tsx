'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';

const resetSchema = z.object({
  email: z.string().email('Please enter a valid email')
});

type ResetFormData = z.infer<typeof resetSchema>;

export default function PasswordResetPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { resetPassword, error, clearError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema)
  });

  const onSubmit = async (data: ResetFormData) => {
    setIsLoading(true);
    clearError();
    setIsSuccess(false);

    try {
      await resetPassword(data.email);
      setIsSuccess(true);
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
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/signInImage.af921364.png)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#030c1d]" />
      </div>

      {/* Back Link */}
      <Link
        href="/signin"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Sign In
      </Link>

      {/* Reset Card */}
      <div className="relative z-10 w-full max-w-[450px] px-6">
        <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-12 shadow-xl">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4318ff]/20 to-[#9f7aea]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#4318ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v0m0-3v0m-5 4a2 2 0 01-2-2v0a2 2 0 012-2h10a2 2 0 012 2v0a2 2 0 01-2 2m-5 4v0m0 0a5 5 0 01-5-5v-2a5 5 0 0110 0v2a5 5 0 01-5 5z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
                <p className="text-gray-400 text-sm">Enter your email and we'll send you a reset link</p>
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
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-[#0f1535] border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4318ff] focus:ring-2 focus:ring-[#4318ff]/20 transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-gradient-to-r from-[#4318ff] to-[#9f7aea] text-white font-bold text-sm uppercase rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>

              {/* Back to Sign In */}
              <div className="mt-8 text-center">
                <Link
                  href="/signin"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Back to Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#01b574]/20 to-[#01b574]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#01b574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Check Your Email</h2>
                <p className="text-gray-400 mb-8">
                  We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
                </p>
                
                <Link
                  href="/signin"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4318ff] to-[#9f7aea] text-white font-bold text-sm uppercase rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
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
      `}</style>
    </div>
  );
}