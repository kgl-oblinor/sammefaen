'use client'

import { motion, MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AccessibleAnimationProps extends MotionProps {
  children: React.ReactNode
  reducedMotionFallback?: MotionProps
}

export default function AccessibleAnimation({
  children,
  reducedMotionFallback,
  ...motionProps
}: AccessibleAnimationProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion && reducedMotionFallback) {
    return <motion.div {...reducedMotionFallback}>{children}</motion.div>
  }

  if (prefersReducedMotion) {
    // Disable all animations for users who prefer reduced motion
    return <div>{children}</div>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}