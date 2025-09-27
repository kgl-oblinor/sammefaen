'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Calendar, Mail, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'contact' | 'demo';
  userName?: string;
  userEmail?: string;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onClose,
  formType = 'contact',
  userName,
  userEmail,
}) => {
  // Auto-close after 10 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.3,
      },
    }),
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
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>

            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Success Icon */}
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Thank You{userName ? `, ${userName}` : ''}!
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-gray-600 dark:text-gray-400 mb-8"
              >
                {formType === 'demo'
                  ? 'Your demo request has been received. We\'re excited to show you what Oblinor can do!'
                  : 'We\'ve received your message and will get back to you shortly.'}
              </motion.p>

              {/* What's Next Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6 text-left"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  What happens next?
                </h4>
                <ul className="space-y-3">
                  {formType === 'demo' ? (
                    <>
                      <motion.li
                        custom={0}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Our team will review your request and send you available time slots within 24 hours
                        </span>
                      </motion.li>
                      <motion.li
                        custom={1}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <Mail className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          You'll receive a confirmation email at{' '}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {userEmail || 'your email address'}
                          </span>
                        </span>
                      </motion.li>
                      <motion.li
                        custom={2}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Prepare for a 30-minute personalized demo tailored to your needs
                        </span>
                      </motion.li>
                    </>
                  ) : (
                    <>
                      <motion.li
                        custom={0}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <Mail className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          A member of our team will respond to your inquiry within 24 business hours
                        </span>
                      </motion.li>
                      <motion.li
                        custom={1}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Check your email at{' '}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {userEmail || 'your email address'}
                          </span>
                          {' '}for our response
                        </span>
                      </motion.li>
                    </>
                  )}
                </ul>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className={clsx(
                  'w-full px-6 py-3 rounded-lg font-medium transition-all',
                  'bg-blue-600 hover:bg-blue-700 text-white',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                )}
              >
                Got it, thanks!
              </motion.button>

              {/* Auto-close notice */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-xs text-gray-500 dark:text-gray-500"
              >
                This window will close automatically in a few seconds
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};