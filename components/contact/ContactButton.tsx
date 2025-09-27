'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';
import clsx from 'clsx';
import { ContactModal } from './ContactModal';
import { ThankYouModal } from './ThankYouModal';

interface ContactButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  formType?: 'contact' | 'demo';
  className?: string;
  children?: React.ReactNode;
  icon?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  variant = 'primary',
  size = 'md',
  formType = 'contact',
  className,
  children,
  icon = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name?: string;
    email?: string;
  }>({});

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSuccess = (data: { name?: string; email?: string }) => {
    setSubmittedData(data);
    setIsModalOpen(false);
    setShowThankYou(true);
  };

  const buttonClasses = clsx(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      // Variants
      'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500': variant === 'primary',
      'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white focus:ring-gray-500':
        variant === 'secondary',
      'border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-300 focus:ring-gray-500':
        variant === 'outline',
      // Sizes
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    className
  );

  const Icon = formType === 'demo' ? Calendar : MessageCircle;
  const buttonText = children || (formType === 'demo' ? 'Request Demo' : 'Contact Us');

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={buttonClasses}
      >
        {icon && <Icon className={clsx('mr-2', size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />}
        {buttonText}
      </motion.button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        formType={formType}
        onSuccess={handleFormSuccess}
      />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        formType={formType}
        userName={submittedData.name}
        userEmail={submittedData.email}
      />
    </>
  );
};

// Floating Contact Button Component
export const FloatingContactButton: React.FC<{
  formType?: 'contact' | 'demo';
}> = ({ formType = 'contact' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name?: string;
    email?: string;
  }>({});

  const handleFormSuccess = (data: { name?: string; email?: string }) => {
    setSubmittedData(data);
    setIsModalOpen(false);
    setShowThankYou(true);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
          delay: 1,
        }}
        onClick={() => setIsModalOpen(true)}
        aria-label={formType === 'demo' ? 'Request a demo' : 'Contact us'}
      >
        {formType === 'demo' ? (
          <Calendar className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={formType}
        onSuccess={handleFormSuccess}
      />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        formType={formType}
        userName={submittedData.name}
        userEmail={submittedData.email}
      />
    </>
  );
};