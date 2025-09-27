'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface AnimatedInputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  label?: string
  name?: string
  required?: boolean
}

export default function AnimatedInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  label,
  name,
  required,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      {label && (
        <motion.label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
          animate={{ x: isFocused ? 5 : 0 }}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}
      <div className="relative">
        <motion.input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-2 border rounded-lg transition-colors duration-200 ${
            error
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-oblinor-primary'
          } focus:outline-none focus:ring-2 focus:ring-oblinor-primary/20`}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
        <AnimatePresence>
          {isFocused && !error && (
            <motion.div
              className="absolute inset-0 border-2 border-oblinor-primary rounded-lg pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-red-500 text-sm mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}