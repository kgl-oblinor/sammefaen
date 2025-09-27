'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function SocialLoginButtons() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const { signInWithSocial } = useAuth();

  const handleSocialLogin = async (provider: 'google' | 'apple' | 'facebook') => {
    setLoadingProvider(provider);
    try {
      await signInWithSocial(provider);
    } catch (err) {
      // Error handled in context
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="flex gap-4 mt-6">
      {/* Facebook */}
      <button
        onClick={() => handleSocialLogin('facebook')}
        disabled={loadingProvider !== null}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f1535] border border-white/20 rounded-xl text-white hover:bg-white/5 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Sign in with Facebook"
      >
        {loadingProvider === 'facebook' ? (
          <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )}
      </button>

      {/* Apple */}
      <button
        onClick={() => handleSocialLogin('apple')}
        disabled={loadingProvider !== null}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f1535] border border-white/20 rounded-xl text-white hover:bg-white/5 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Sign in with Apple"
      >
        {loadingProvider === 'apple' ? (
          <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
        )}
      </button>

      {/* Google */}
      <button
        onClick={() => handleSocialLogin('google')}
        disabled={loadingProvider !== null}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f1535] border border-white/20 rounded-xl text-white hover:bg-white/5 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Sign in with Google"
      >
        {loadingProvider === 'google' ? (
          <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
            <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
            <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3818182,10.5818182 23.2363636,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
            <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
          </svg>
        )}
      </button>
    </div>
  );
}