'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'cyberpunk'

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
      root.classList.remove('light', 'dark', 'cyberpunk')
      
      // Add current theme class
      root.classList.add(theme)
      
      // Save to localStorage
      localStorage.setItem('theme', theme)
      
      // Set theme-specific CSS variables
      if (theme === 'cyberpunk') {
        root.style.setProperty('--primary', '#ff00ff')
        root.style.setProperty('--primary-dark', '#cc00cc')
        root.style.setProperty('--secondary', '#00ffff')
        root.style.setProperty('--accent', '#ffff00')
        root.style.setProperty('--background', '#0a0014')
        root.style.setProperty('--background-dark', '#000000')
        root.style.setProperty('--background-card', '#1a0033')
        root.style.setProperty('--text-primary', '#ffffff')
        root.style.setProperty('--text-secondary', '#00ffff')
        root.style.setProperty('--border', '#ff00ff')
      } else if (theme === 'dark') {
        root.style.setProperty('--primary', '#008C9E')
        root.style.setProperty('--primary-dark', '#006A78')
        root.style.setProperty('--secondary', '#00B4CC')
        root.style.setProperty('--accent', '#4DD9E8')
        root.style.setProperty('--background', '#1a2332')
        root.style.setProperty('--background-dark', '#141922')
        root.style.setProperty('--background-card', '#243142')
        root.style.setProperty('--text-primary', '#FFFFFF')
        root.style.setProperty('--text-secondary', '#8B95A6')
        root.style.setProperty('--border', '#2A3544')
      } else {
        root.style.setProperty('--primary', '#008C9E')
        root.style.setProperty('--primary-dark', '#006A78')
        root.style.setProperty('--secondary', '#00B4CC')
        root.style.setProperty('--accent', '#4DD9E8')
        root.style.setProperty('--background', '#FFFFFF')
        root.style.setProperty('--background-dark', '#F5F7FA')
        root.style.setProperty('--background-card', '#FFFFFF')
        root.style.setProperty('--text-primary', '#1a2332')
        root.style.setProperty('--text-secondary', '#5B6B7C')
        root.style.setProperty('--border', '#E5E7EB')
      }
    }
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'cyberpunk']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
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