import type { Config } from 'tailwindcss'
import { designTokens } from './design-tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Colors
      colors: {
        // Primary palette
        primary: {
          DEFAULT: designTokens.colors.primary.DEFAULT,
          dark: designTokens.colors.primary.dark,
          light: designTokens.colors.primary.light,
          50: designTokens.colors.primary[50],
          100: designTokens.colors.primary[100],
          200: designTokens.colors.primary[200],
          300: designTokens.colors.primary[300],
          400: designTokens.colors.primary[400],
          500: designTokens.colors.primary[500],
          600: designTokens.colors.primary[600],
          700: designTokens.colors.primary[700],
          800: designTokens.colors.primary[800],
          900: designTokens.colors.primary[900],
        },
        // Secondary palette
        secondary: {
          DEFAULT: designTokens.colors.secondary.DEFAULT,
          dark: designTokens.colors.secondary.dark,
          light: designTokens.colors.secondary.light,
          50: designTokens.colors.secondary[50],
          100: designTokens.colors.secondary[100],
          200: designTokens.colors.secondary[200],
          300: designTokens.colors.secondary[300],
          400: designTokens.colors.secondary[400],
          500: designTokens.colors.secondary[500],
          600: designTokens.colors.secondary[600],
          700: designTokens.colors.secondary[700],
          800: designTokens.colors.secondary[800],
          900: designTokens.colors.secondary[900],
        },
        // Accent palette
        accent: {
          DEFAULT: designTokens.colors.accent.DEFAULT,
          dark: designTokens.colors.accent.dark,
          light: designTokens.colors.accent.light,
          50: designTokens.colors.accent[50],
          100: designTokens.colors.accent[100],
          200: designTokens.colors.accent[200],
          300: designTokens.colors.accent[300],
          400: designTokens.colors.accent[400],
          500: designTokens.colors.accent[500],
          600: designTokens.colors.accent[600],
          700: designTokens.colors.accent[700],
          800: designTokens.colors.accent[800],
          900: designTokens.colors.accent[900],
        },
        // Base colors
        dark: designTokens.colors.dark,
        light: designTokens.colors.light,
        // Semantic colors
        success: designTokens.colors.success,
        error: designTokens.colors.error,
        warning: designTokens.colors.warning,
        info: designTokens.colors.info,
        // Vision UI colors
        vision: {
          primary: designTokens.colors.visionUI.primary,
          primaryFocus: designTokens.colors.visionUI.primaryFocus,
          bgBody: designTokens.colors.visionUI.bgBody,
          bgSecondary: designTokens.colors.visionUI.bgSecondary,
          textMain: designTokens.colors.visionUI.textMain,
          textDim: designTokens.colors.visionUI.textDim,
        },
      },
      
      // Typography
      fontFamily: {
        sans: designTokens.typography.fontFamily.sans,
        display: designTokens.typography.fontFamily.display,
        mono: designTokens.typography.fontFamily.mono,
      },
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,
      
      // Spacing
      spacing: designTokens.spacing,
      
      // Sizing
      width: designTokens.sizes,
      height: designTokens.sizes,
      maxWidth: designTokens.sizes,
      maxHeight: designTokens.sizes,
      minWidth: designTokens.sizes,
      minHeight: designTokens.sizes,
      
      // Border Radius
      borderRadius: designTokens.borders.radius,
      
      // Border Width
      borderWidth: designTokens.borders.width,
      
      // Box Shadow
      boxShadow: {
        ...designTokens.shadows,
        'glow-cyan': designTokens.shadows.glow.cyan,
        'glow-cyan-strong': designTokens.shadows.glow.cyanStrong,
        'glow-primary': designTokens.shadows.glow.primary,
      },
      
      // Z-index
      zIndex: designTokens.zIndex,
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'float': 'float linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient-move': 'gradientMove 3s linear infinite',
        'bg-animation': 'bgAnimation 20s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: designTokens.animation.keyframes,
      transitionDuration: designTokens.animation.duration,
      transitionTimingFunction: {
        smooth: designTokens.animation.timing.smooth,
        'smooth-in': designTokens.animation.timing.smoothIn,
        'smooth-out': designTokens.animation.timing.smoothOut,
        bounce: designTokens.animation.timing.bounce,
      },
      
      // Background Gradients
      backgroundImage: {
        'gradient-primary-secondary': designTokens.gradients.primaryToSecondary,
        'gradient-secondary-accent': designTokens.gradients.secondaryToAccent,
        'gradient-primary-accent': designTokens.gradients.primaryToAccent,
        'gradient-dark': designTokens.gradients.darkBackground,
        'gradient-card': designTokens.gradients.cardGradient,
        'gradient-radial-overlay': designTokens.gradients.radialOverlay,
        'gradient-glow-orb': designTokens.gradients.glowOrb,
        'gradient-text': designTokens.gradients.textGradient,
        'gradient-text-animated': designTokens.gradients.textAnimated,
      },
      
      // Screens (Breakpoints)
      screens: designTokens.breakpoints,
      
      // Custom CSS Variables
      backgroundColor: {
        'primary-var': 'var(--bg-primary)',
        'secondary-var': 'var(--bg-secondary)',
        'card-var': 'var(--card-bg)',
        'card-hover-var': 'var(--card-bg-hover)',
        'nav-var': 'var(--nav-bg)',
      },
      textColor: {
        'primary-var': 'var(--text-primary)',
        'secondary-var': 'var(--text-secondary)',
        'muted-var': 'var(--text-muted)',
        'accent-var': 'var(--text-accent)',
      },
      borderColor: {
        'primary-var': 'var(--border-color)',
        'subtle-var': 'var(--border-subtle)',
      },
    },
  },
  plugins: [
    // Custom plugin for text gradient utilities
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-gradient': {
          background: 'var(--gradient-text)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-animated': {
          background: 'var(--gradient-text-animated)',
          'background-size': '200% auto',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          animation: 'gradientMove 3s linear infinite',
        },
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)',
        },
        '.backdrop-blur-3xl': {
          'backdrop-filter': 'blur(64px)',
        },
      }
      addUtilities(newUtilities)
    },
    
    // Custom plugin for gradient backgrounds
    function({ addComponents }: any) {
      const components = {
        '.btn-gradient': {
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)',
            transition: 'left 0.3s ease',
          },
          '&:hover::before': {
            left: '0',
          },
        },
        '.card-glass': {
          background: 'var(--card-bg)',
          'backdrop-filter': 'blur(20px)',
          border: '1px solid var(--border-subtle)',
        },
        '.glow-effect': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
            opacity: '0',
            filter: 'blur(20px)',
            transition: 'opacity 0.3s ease',
            'pointer-events': 'none',
          },
          '&:hover::after': {
            opacity: '0.3',
          },
        },
      }
      addComponents(components)
    },
  ],
}

export default config