'use client'

import { motion } from 'framer-motion'
import Heading from '@/components/ui/Heading'

export default function FeaturesHero() {
  return (
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h1" className="mb-6">
          Everything You Need to{' '}
          <span className="bg-gradient-to-r from-primary to-accent text-gradient">
            Manage Private Equity
          </span>
        </Heading>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          A comprehensive platform designed for modern private equity firms. 
          From deal sourcing to exit, we've got you covered with powerful 
          tools and intelligent automation.
        </p>
      </motion.div>
    </div>
  )
}