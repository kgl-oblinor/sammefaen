'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// Default context value to prevent errors during SSR
const defaultContextValue: ThemeContextType = {
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setThemeState(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      
      // Remove all theme classes
      root.classList.remove('light', 'dark')
      
      // Add current theme class
      root.classList.add(theme)
      
      // Save to localStorage
      localStorage.setItem('theme', theme)
      
      // Set theme-specific CSS variables
      if (theme === 'dark') {
        root.style.setProperty('--primary', '#5B9BD5')
        root.style.setProperty('--primary-dark', '#002A5C')
        root.style.setProperty('--secondary', '#002A5C')
        root.style.setProperty('--accent', '#5B9BD5')
        root.style.setProperty('--background', '#1a1a1a')
        root.style.setProperty('--background-dark', '#111111')
        root.style.setProperty('--background-card', '#252525')
        root.style.setProperty('--text-primary', '#FFFFFF')
        root.style.setProperty('--text-secondary', '#CCCCCC')
        root.style.setProperty('--border', '#333333')
      } else {
        root.style.setProperty('--primary', '#5B9BD5')
        root.style.setProperty('--primary-dark', '#002A5C')
        root.style.setProperty('--secondary', '#002A5C')
        root.style.setProperty('--accent', '#5B9BD5')
        root.style.setProperty('--background', '#FFFFFF')
        root.style.setProperty('--background-dark', '#F5F5F5')
        root.style.setProperty('--background-card', '#FAFAFA')
        root.style.setProperty('--text-primary', '#000000')
        root.style.setProperty('--text-secondary', '#666666')
        root.style.setProperty('--border', '#E0E0E0')
      }
    }
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}