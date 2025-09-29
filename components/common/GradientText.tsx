'use client'

import { motion } from 'framer-motion'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${className}`}
      animate={{
        backgroundImage: [
          'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          'linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%)',
          'linear-gradient(90deg, #ec4899 0%, #3b82f6 50%, #8b5cf6 100%)',
          'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
        ],
        transition: {
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        },
      }}
      style={{
        backgroundSize: '200% 100%',
      }}
    >
      {children}
    </motion.span>
  )
}