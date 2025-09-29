'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Form data:', data)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {submitSuccess && (
        <div className="bg-success/10 border border-success text-success p-4 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="How can we help you?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-error">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Tell us more about your needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 text-primary rounded border-border focus:ring-primary"
        />
        <label htmlFor="consent" className="ml-2 text-sm text-text-secondary">
          I agree to the privacy policy and terms of service *
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1 text-sm text-error">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary btn-lg w-full"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="spinner mr-2" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </motion.form>
  )
}