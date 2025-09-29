'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  href?: string
}

export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
}: AnimatedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors'
  
  const variants = {
    primary: 'bg-oblinor-primary text-white hover:bg-oblinor-primary/90',
    secondary: 'bg-white text-oblinor-primary border-2 border-oblinor-primary hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
    </Component>
  )
}