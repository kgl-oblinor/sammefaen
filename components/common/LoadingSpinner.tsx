'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export default function LoadingSpinner({ size = 'medium', color = 'oblinor-primary' }: LoadingSpinnerProps) {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
  }

  const spinTransition = {
    duration: 1,
    ease: 'linear',
    repeat: Infinity,
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} relative`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <motion.span
          className={`absolute inset-0 rounded-full border-4 border-${color}/20`}
        />
        <motion.span
          className={`absolute inset-0 rounded-full border-4 border-transparent border-t-${color}`}
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </motion.div>
    </div>
  )
}