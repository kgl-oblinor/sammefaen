'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EmailSignupProps {
  type: 'newsletter' | 'demo'
  className?: string
}

export default function EmailSignup({ type, className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: email.split('@')[0], // Use email prefix as name
          email,
          message: type === 'newsletter' 
            ? 'Newsletter signup' 
            : 'Demo request',
          type,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage(
          type === 'newsletter'
            ? 'Thank you for subscribing! We\'ll keep you updated.'
            : 'Thank you! We\'ll contact you about scheduling a demo.'
        )
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={type === 'newsletter' ? 'Enter your email' : 'Your work email'}
          className="w-full px-4 py-3 pr-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute right-1 top-1 bottom-1 px-6 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {status === 'loading' ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            type === 'newsletter' ? 'Subscribe' : 'Request Demo'
          )}
        </button>
      </div>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}