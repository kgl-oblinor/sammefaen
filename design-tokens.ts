/**
 * Design Tokens - Centralized design system values
 * Extracted and optimized from HTML templates
 */

// ============================================
// COLOR TOKENS
// ============================================

export const colors = {
  // Primary palette - Teal/Cyan spectrum
  primary: {
    DEFAULT: '#008C9E',
    dark: '#007889',
    light: '#00A5B8',
    50: '#E6F7F9',
    100: '#B3E5EC',
    200: '#80D3DF',
    300: '#4DC1D2',
    400: '#26B3C8',
    500: '#008C9E',
    600: '#007889',
    700: '#006474',
    800: '#00505F',
    900: '#003C4A',
  },
  
  // Secondary palette
  secondary: {
    DEFAULT: '#00B4CC',
    dark: '#0099B0',
    light: '#00CCE6',
    50: '#E6F9FC',
    100: '#B3EDF5',
    200: '#80E1EE',
    300: '#4DD5E7',
    400: '#26CCE2',
    500: '#00B4CC',
    600: '#0099B0',
    700: '#007E94',
    800: '#006378',
    900: '#00485C',
  },
  
  // Accent palette
  accent: {
    DEFAULT: '#00DFFC',
    dark: '#00C2DC',
    light: '#33E6FF',
    50: '#E6FBFF',
    100: '#B3F3FF',
    200: '#80EBFF',
    300: '#4DE3FF',
    400: '#26DEFF',
    500: '#00DFFC',
    600: '#00C2DC',
    700: '#00A5BC',
    800: '#00889C',
    900: '#006B7C',
  },
  
  // Base colors
  dark: '#1a1f1f',
  light: '#f8fafc',
  
  // Grays
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Semantic colors
  success: '#10f5b1',
  error: '#e31a1a',
  warning: '#ffb547',
  info: '#0075ff',
  
  // Additional colors from signin template
  visionUI: {
    primary: '#4318ff',
    primaryFocus: '#9f7aea',
    bgBody: '#030c1d',
    bgSecondary: '#0f1535',
    textMain: '#a0aec0',
    textDim: '#718096',
  },
} as const;

// ============================================
// TYPOGRAPHY TOKENS
// ============================================

export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
    display: ['"Plus Jakarta Display"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  
  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.03em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================
// SPACING TOKENS
// ============================================

export const spacing = {
  0: '0px',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ============================================
// SIZING TOKENS
// ============================================

export const sizes = {
  ...spacing,
  xs: '20rem',      // 320px
  sm: '24rem',      // 384px
  md: '28rem',      // 448px
  lg: '32rem',      // 512px
  xl: '36rem',      // 576px
  '2xl': '42rem',   // 672px
  '3xl': '48rem',   // 768px
  '4xl': '56rem',   // 896px
  '5xl': '64rem',   // 1024px
  '6xl': '72rem',   // 1152px
  '7xl': '80rem',   // 1280px
  '8xl': '90rem',   // 1440px
  prose: '65ch',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screen: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
} as const;

// ============================================
// ANIMATION TOKENS
// ============================================

export const animation = {
  // Durations
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Timing functions
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
    // Custom bezier curves
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smoothIn: 'cubic-bezier(0.4, 0, 1, 1)',
    smoothOut: 'cubic-bezier(0, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Keyframes
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    fadeInLeft: {
      '0%': { opacity: '0', transform: 'translateX(-30px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    fadeInRight: {
      '0%': { opacity: '0', transform: 'translateX(30px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    float: {
      '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
      '10%': { opacity: '0.3' },
      '90%': { opacity: '0.3' },
      '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
    },
    ping: {
      '75%, 100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
    },
    gradientMove: {
      '0%': { backgroundPosition: '0% center' },
      '100%': { backgroundPosition: '200% center' },
    },
    bgAnimation: {
      '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
      '50%': { transform: 'rotate(180deg) scale(1.1)' },
    },
    glowPulse: {
      '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
      '50%': { transform: 'scale(1.2)', opacity: '0.8' },
    },
  },
  
  // Framer Motion presets
  framerMotion: {
    spring: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
    smooth: {
      type: 'tween',
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
    bounce: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
} as const;

// ============================================
// BORDER TOKENS
// ============================================

export const borders = {
  // Border radius
  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.25rem', // 20px
    '4xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Border widths
  width: {
    0: '0px',
    DEFAULT: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
} as const;

// ============================================
// SHADOWS TOKENS
// ============================================

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  // Custom shadows
  glow: {
    cyan: '0 0 30px rgba(0, 223, 252, 0.3)',
    cyanStrong: '0 10px 50px rgba(0, 223, 252, 0.5)',
    primary: '0 4px 15px rgba(0, 223, 252, 0.3)',
  },
  card: '0 20px 27px rgba(0, 0, 0, 0.05)',
  floating: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 223, 252, 0.1)',
} as const;

// ============================================
// Z-INDEX TOKENS
// ============================================

export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  // Semantic z-indices
  background: '0',
  backgroundPattern: '1',
  content: '10',
  overlay: '1000',
  modal: '1050',
  dropdown: '1100',
  tooltip: '1200',
  notification: '1300',
  max: '9999',
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// GRADIENTS
// ============================================

export const gradients = {
  // Primary gradients
  primaryToSecondary: 'linear-gradient(135deg, #008C9E 0%, #00B4CC 100%)',
  secondaryToAccent: 'linear-gradient(135deg, #00B4CC 0%, #00DFFC 100%)',
  primaryToAccent: 'linear-gradient(135deg, #008C9E 0%, #00B4CC 25%, #00DFFC 50%, #00B4CC 75%, #008C9E 100%)',
  
  // Background gradients
  darkBackground: 'linear-gradient(135deg, #0f1515 0%, #1a1f1f 50%, #0f1515 100%)',
  cardGradient: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
  
  // Overlay gradients
  radialOverlay: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-body) 70%)',
  glowOrb: 'radial-gradient(circle, rgba(0, 223, 252, 0.2) 0%, transparent 70%)',
  
  // Text gradients (for background-clip)
  textGradient: 'linear-gradient(135deg, #00B4CC 0%, #00DFFC 100%)',
  textAnimated: 'linear-gradient(135deg, #008C9E 0%, #00B4CC 25%, #00DFFC 50%, #00B4CC 75%, #008C9E 100%)',
} as const;

// ============================================
// THEME VARIABLES
// ============================================

export const themeVars = {
  dark: {
    // Backgrounds
    bgPrimary: '#1a1f1f',
    bgSecondary: '#0f1515',
    bgPattern1: 'rgba(0, 140, 158, 0.08)',
    bgPattern2: 'rgba(0, 223, 252, 0.04)',
    
    // Text
    textPrimary: 'white',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    textAccent: 'rgba(255, 255, 255, 0.7)',
    
    // Borders
    borderColor: 'rgba(0, 223, 252, 0.2)',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    
    // Components
    cardBg: 'rgba(255, 255, 255, 0.03)',
    cardBgHover: 'rgba(255, 255, 255, 0.05)',
    buttonSecondaryBg: 'rgba(255, 255, 255, 0.05)',
    buttonSecondaryBorder: 'rgba(255, 255, 255, 0.15)',
    navBg: 'rgba(26, 31, 31, 0.95)',
    
    // Effects
    particleOpacity: '0.15',
    patternOpacity: '0.02',
  },
  
  light: {
    // Backgrounds
    bgPrimary: '#ffffff',
    bgSecondary: '#f8fafc',
    bgPattern1: 'rgba(0, 140, 158, 0.04)',
    bgPattern2: 'rgba(0, 223, 252, 0.02)',
    
    // Text
    textPrimary: '#1a1f1f',
    textSecondary: 'rgba(26, 31, 31, 0.8)',
    textMuted: 'rgba(26, 31, 31, 0.6)',
    textAccent: 'rgba(26, 31, 31, 0.7)',
    
    // Borders
    borderColor: 'rgba(0, 140, 158, 0.15)',
    borderSubtle: 'rgba(0, 0, 0, 0.08)',
    
    // Components
    cardBg: 'rgba(255, 255, 255, 0.95)',
    cardBgHover: 'rgba(0, 0, 0, 0.02)',
    buttonSecondaryBg: 'rgba(0, 0, 0, 0.03)',
    buttonSecondaryBorder: 'rgba(0, 0, 0, 0.15)',
    navBg: 'rgba(255, 255, 255, 0.95)',
    
    // Effects
    particleOpacity: '0.1',
    patternOpacity: '0.01',
  },
} as const;

// Export all tokens as a single object for convenience
export const designTokens = {
  colors,
  typography,
  spacing,
  sizes,
  animation,
  borders,
  shadows,
  zIndex,
  breakpoints,
  gradients,
  themeVars,
} as const;

// Type exports for TypeScript
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Sizes = typeof sizes;
export type Animation = typeof animation;
export type Borders = typeof borders;
export type Shadows = typeof shadows;
export type ZIndex = typeof zIndex;
export type Breakpoints = typeof breakpoints;
export type Gradients = typeof gradients;
export type ThemeVars = typeof themeVars;
export type DesignTokens = typeof designTokens;