'use client'

import LoadingSpinner from '@/components/common/LoadingSpinner'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="space-y-4 text-center">
        <LoadingSpinner size="large" color="oblinor-accent" />
        <motion.p 
          className="text-gray-600 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}