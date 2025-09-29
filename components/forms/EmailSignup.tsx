'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EmailSignupProps {
  type?: 'newsletter' | 'demo'
  className?: string
  placeholder?: string
  buttonText?: string
}

export default function EmailSignup({ 
  type = 'newsletter', 
  className = '',
  placeholder,
  buttonText
}: EmailSignupProps) {
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

  const defaultPlaceholder = type === 'newsletter' ? 'Enter your email' : 'Your work email'
  const defaultButtonText = type === 'newsletter' ? 'Subscribe' : 'Request Demo'

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} aria-label={`${type === 'newsletter' ? 'Newsletter signup' : 'Demo request'} form`}>
      <div className="relative">
        <label htmlFor={`email-${type}`} className="sr-only">
          {placeholder || defaultPlaceholder}
        </label>
        <input
          id={`email-${type}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder || defaultPlaceholder}
          className="w-full px-4 py-3 pr-32 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white text-black"
          disabled={status === 'loading' || status === 'success'}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `error-${type}` : undefined}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute right-1 top-1 bottom-1 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {status === 'loading' ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            buttonText || defaultButtonText
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
            role={status === 'error' ? 'alert' : 'status'}
            id={status === 'error' ? `error-${type}` : undefined}
            aria-live="polite"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}