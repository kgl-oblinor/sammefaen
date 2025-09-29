'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Don't render content until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <motion.button
        className="p-2 rounded-lg bg-background-card hover:bg-background-card-dark transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Theme selector loading"
        aria-busy="true"
        disabled
      >
        <div className="w-5 h-5" />
      </motion.button>
    )
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )
      case 'dark':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )
    }
  }

  const getThemeLabel = () => {
    return theme === 'light' ? 'Light' : 'Dark'
  }

  const getThemeColor = () => {
    return theme === 'light' ? 'from-yellow-400 to-orange-400' : 'from-blue-500 to-purple-600'
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative group flex items-center gap-2 px-4 py-2 rounded-full
        bg-gradient-to-r ${getThemeColor()}
        text-white font-medium shadow-lg
        hover:shadow-xl transition-all duration-300
        overflow-hidden
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch theme. Current theme: ${getThemeLabel()}`}
      role="switch"
      aria-checked={theme !== 'light'}
    >
      
      {/* Icon container */}
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {getIcon()}
      </motion.div>
      
      {/* Label */}
      <span className="relative z-10 text-sm font-semibold hidden sm:inline">
        {getThemeLabel()}
      </span>
      
    </motion.button>
  )
}