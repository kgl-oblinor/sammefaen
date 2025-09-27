'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function AnimatedFormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitSuccess(true)
    setIsSubmitting(false)
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.form
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-md mx-auto space-y-6 p-6"
      onSubmit={handleSubmit}
    >
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center"
          >
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={staggerItem}>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </motion.div>

      <motion.div variants={staggerItem}>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </motion.div>

      <motion.div variants={staggerItem}>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </motion.div>

      <motion.button
        variants={staggerItem}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <LoadingSpinner size="small" color="white" />
            <span className="ml-2">Submitting...</span>
          </span>
        ) : (
          'Submit'
        )}
      </motion.button>
    </motion.form>
  )
}