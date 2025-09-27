'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import {
  contactFormSchema,
  demoRequestSchema,
  ContactFormData,
  DemoRequestFormData,
  isDemoRequest,
} from '@/lib/validations/contact';
import { submitContactForm } from '@/lib/actions/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'contact' | 'demo';
  onSuccess?: (data: { name: string; email: string }) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  formType = 'contact',
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isDemo = formType === 'demo';
  const schema = isDemo ? demoRequestSchema : contactFormSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData | DemoRequestFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: formType,
    },
  });

  const onSubmit = async (data: ContactFormData | DemoRequestFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
        
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess({ name: data.name, email: data.email });
        }
        
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isDemo ? 'Request a Demo' : 'Contact Us'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              {isDemo && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  See how our platform can transform your equity management
                </p>
              )}
            </div>

            {/* Form Content */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Thank you for your submission!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      id="name"
                      type="text"
                      className={clsx(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        'dark:bg-gray-800 dark:text-white',
                        errors.name
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300 dark:border-gray-700'
                      )}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      className={clsx(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        'dark:bg-gray-800 dark:text-white',
                        errors.email
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300 dark:border-gray-700'
                      )}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Company {isDemo && '*'}
                    </label>
                    <input
                      {...register('company')}
                      id="company"
                      type="text"
                      className={clsx(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        'dark:bg-gray-800 dark:text-white',
                        errors.company
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300 dark:border-gray-700'
                      )}
                      aria-invalid={errors.company ? 'true' : 'false'}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Demo-specific fields */}
                  {isDemo && (
                    <>
                      {/* Job Title */}
                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Job Title *
                        </label>
                        <input
                          {...register('jobTitle' as any)}
                          id="jobTitle"
                          type="text"
                          className={clsx(
                            'w-full px-4 py-3 rounded-lg border transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500',
                            'dark:bg-gray-800 dark:text-white',
                            (errors as any).jobTitle
                              ? 'border-red-500 dark:border-red-500'
                              : 'border-gray-300 dark:border-gray-700'
                          )}
                        />
                        {(errors as any).jobTitle && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {(errors as any).jobTitle.message}
                          </p>
                        )}
                      </div>

                      {/* Company Size */}
                      <div>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Company Size *
                        </label>
                        <select
                          {...register('companySize' as any)}
                          id="companySize"
                          className={clsx(
                            'w-full px-4 py-3 rounded-lg border transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500',
                            'dark:bg-gray-800 dark:text-white',
                            (errors as any).companySize
                              ? 'border-red-500 dark:border-red-500'
                              : 'border-gray-300 dark:border-gray-700'
                          )}
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                        {(errors as any).companySize && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {(errors as any).companySize.message}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Phone Number (Optional)
                        </label>
                        <input
                          {...register('phoneNumber' as any)}
                          id="phoneNumber"
                          type="tel"
                          className={clsx(
                            'w-full px-4 py-3 rounded-lg border transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500',
                            'dark:bg-gray-800 dark:text-white',
                            (errors as any).phoneNumber
                              ? 'border-red-500 dark:border-red-500'
                              : 'border-gray-300 dark:border-gray-700'
                          )}
                        />
                        {(errors as any).phoneNumber && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {(errors as any).phoneNumber.message}
                          </p>
                        )}
                      </div>

                      {/* Preferred Time Slot */}
                      <div>
                        <label
                          htmlFor="preferredTimeSlot"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Preferred Demo Time *
                        </label>
                        <select
                          {...register('preferredTimeSlot' as any)}
                          id="preferredTimeSlot"
                          className={clsx(
                            'w-full px-4 py-3 rounded-lg border transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500',
                            'dark:bg-gray-800 dark:text-white',
                            (errors as any).preferredTimeSlot
                              ? 'border-red-500 dark:border-red-500'
                              : 'border-gray-300 dark:border-gray-700'
                          )}
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 7 PM)</option>
                        </select>
                        {(errors as any).preferredTimeSlot && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {(errors as any).preferredTimeSlot.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className={clsx(
                        'w-full px-4 py-3 rounded-lg border transition-colors resize-none',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500',
                        'dark:bg-gray-800 dark:text-white',
                        errors.message
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300 dark:border-gray-700'
                      )}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4"
                    >
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-red-800 dark:text-red-200">
                          {errorMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={clsx(
                        'flex-1 px-6 py-3 rounded-lg font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};