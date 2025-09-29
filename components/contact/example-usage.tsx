'use client';

import React from 'react';
import { ContactButton, FloatingContactButton } from './index';

/**
 * Example: Adding contact buttons to your application
 * 
 * Make sure to install required dependencies:
 * npm install lucide-react axios
 */

export function ContactExamples() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Contact Form Examples</h2>
      
      {/* Basic Contact Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic Contact Button</h3>
        <ContactButton />
      </div>
      
      {/* Demo Request Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Demo Request Button</h3>
        <ContactButton formType="demo" />
      </div>
      
      {/* Custom Styled Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Button Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <ContactButton variant="primary" size="sm">Small Primary</ContactButton>
          <ContactButton variant="secondary" size="md">Medium Secondary</ContactButton>
          <ContactButton variant="outline" size="lg">Large Outline</ContactButton>
        </div>
      </div>
      
      {/* Custom Button Text */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Button Text</h3>
        <div className="flex gap-4 flex-wrap">
          <ContactButton icon={false}>Get in Touch</ContactButton>
          <ContactButton formType="demo" variant="secondary">
            Schedule a Demo
          </ContactButton>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Floating Action Button</h3>
        <p className="text-gray-600 mb-2">
          The floating button appears in the bottom-right corner of the page
        </p>
        <FloatingContactButton formType="contact" />
      </div>
    </div>
  );
}

/**
 * Example: Integration in a landing page hero section
 */
export function HeroWithContact() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Equity Management
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Streamline cap tables, automate compliance, and empower stakeholders with our comprehensive equity platform.
        </p>
        <div className="flex gap-4 justify-center">
          <ContactButton formType="demo" size="lg" />
          <ContactButton variant="outline" size="lg">
            Contact Sales
          </ContactButton>
        </div>
      </div>
    </section>
  );
}

/**
 * Example: Navigation bar integration
 */
export function NavigationWithContact() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Oblinor</span>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <ContactButton size="sm" variant="secondary" icon={false}>
              Contact
            </ContactButton>
            <ContactButton formType="demo" size="sm">
              Get Demo
            </ContactButton>
          </div>
        </div>
      </div>
    </nav>
  );
}