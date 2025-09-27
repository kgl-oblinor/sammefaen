'use client'

import { motion, LazyMotion, domAnimation, m } from 'framer-motion'
import { memo } from 'react'

// Use LazyMotion for better performance with code splitting
export const AnimationProvider = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
)

// Memoized animated component for better performance
export const MemoizedAnimatedCard = memo(({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="card p-6"
  >
    {children}
  </m.div>
))

MemoizedAnimatedCard.displayName = 'MemoizedAnimatedCard'

// Use CSS transforms for better performance
export const PerformantHoverCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="card p-6 cursor-pointer"
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
    style={{ 
      transform: 'translateZ(0)', // Enable hardware acceleration
      willChange: 'transform' // Optimize for transform changes
    }}
  >
    {children}
  </motion.div>
)

// Intersection Observer for scroll animations
export const useOptimizedScroll = () => {
  return {
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Debounced animation for resize events
export const ResponsiveAnimation = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    mobile: { scale: 1 },
    desktop: { scale: 1.1 }
  }

  return (
    <motion.div
      variants={variants}
      animate={typeof window !== 'undefined' && window.innerWidth > 768 ? 'desktop' : 'mobile'}
      transition={{ type: 'spring', damping: 20 }}
    >
      {children}
    </motion.div>
  )
}