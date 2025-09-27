'use client';

import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Link from 'next/link';

function DashboardContent() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-[#030c1d] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4318ff]/10 via-transparent to-[#9f7aea]/10" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Welcome back,</p>
                  <p className="text-white font-medium">{user?.name || user?.email}</p>
                </div>
                <button
                  onClick={signOut}
                  className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-red-400 hover:text-red-300 transition-all"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4318ff] to-[#9f7aea] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {user?.name?.[0] || user?.email?.[0]?.toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{user?.name || 'User'}</h3>
                  <p className="text-gray-400">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">User ID:</span>
                  <span className="text-white">{user?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Auth Provider:</span>
                  <span className="text-white capitalize">{user?.provider || 'Email'}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-[#4318ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-white">Edit Profile</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-[#4318ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white">Settings</span>
                </Link>
                <Link
                  href="/security"
                  className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-[#4318ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-white">Security</span>
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-8">
              <h3 className="text-xl font-bold text-white mb-6">Activity Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Login Streak</span>
                    <span className="text-white font-bold">7 days</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#4318ff] to-[#9f7aea] h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Profile Completion</span>
                    <span className="text-white font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#01b574] to-[#01b574] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-12 glass-card backdrop-blur-xl bg-gradient-to-br from-[#06132874] to-[#0a0e2371] rounded-[20px] p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This is a protected route that requires authentication. Only logged-in users can access this page.
              The authentication system includes sign in, sign up, password reset, and social login functionality.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-[#4318ff] to-[#9f7aea] text-white font-bold text-sm uppercase rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Go to Home
              </Link>
              <Link
                href="/profile"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm uppercase rounded-xl transition-all"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .glass-card {
          background: linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%);
        }
      `}</style>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}