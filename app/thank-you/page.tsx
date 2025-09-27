'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const formType = searchParams.get('type') || 'contact';
  const name = searchParams.get('name');
  
  // Redirect to home after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Icon */}
        <motion.div
          variants={itemVariants}
          className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 200,
              delay: 0.2,
            }}
          >
            <CheckCircle className="w-14 h-14 text-green-600 dark:text-green-400" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Thank You{name ? `, ${name}` : ''}!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-400 mb-12"
        >
          {formType === 'demo'
            ? 'Your demo request has been received successfully.'
            : 'We\'ve received your message and appreciate you reaching out.'}
        </motion.p>

        {/* Info Box */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What happens next?
          </h2>
          
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {formType === 'demo' ? (
              <>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    Our team will review your request and prepare a personalized demo based on your needs
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">2</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    You'll receive an email within 24 hours with available time slots for your demo
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">3</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    Join the 30-minute demo to see how Oblinor can transform your equity management
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    A member of our team will review your message carefully
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">2</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    We'll respond to your inquiry within 24 business hours
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">3</span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-400">
                    Check your email for our detailed response
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </motion.div>

        {/* Auto-redirect notice */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm text-gray-500 dark:text-gray-500"
        >
          You'll be redirected to the homepage in a few seconds...
        </motion.p>
      </motion.div>
    </div>
  );
}