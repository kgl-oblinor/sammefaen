'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import ScrollAnimation from '@/components/ScrollAnimation'
import AnimatedCard from '@/components/AnimatedCard'
import GradientText from '@/components/GradientText'
import AnimatedButton from '@/components/AnimatedButton'
import { staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    category: 'Portfolio Management',
    icon: '📊',
    items: [
      {
        title: 'Real-time Performance Tracking',
        description: 'Monitor portfolio company metrics in real-time with customizable dashboards.',
      },
      {
        title: 'Financial Analytics',
        description: 'Advanced analytics tools for deep financial analysis and forecasting.',
      },
      {
        title: 'Document Management',
        description: 'Centralized repository for all portfolio company documents and reports.',
      },
    ],
  },
  {
    category: 'Deal Management',
    icon: '🤝',
    items: [
      {
        title: 'Deal Pipeline CRM',
        description: 'Track deals from sourcing through due diligence to closing.',
      },
      {
        title: 'Due Diligence Tools',
        description: 'Streamline your due diligence process with collaborative workspaces.',
      },
      {
        title: 'Valuation Models',
        description: 'Built-in valuation models and scenario analysis tools.',
      },
    ],
  },
  {
    category: 'Investor Relations',
    icon: '👥',
    items: [
      {
        title: 'LP Portal',
        description: 'Secure portal for LPs to access reports and portfolio information.',
      },
      {
        title: 'Automated Reporting',
        description: 'Generate quarterly reports and capital call notices automatically.',
      },
      {
        title: 'Communication Hub',
        description: 'Centralized communication platform for all investor interactions.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div className="py-20">
        <div className="container">
          {/* Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-oblinor-primary mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Powerful Features for <GradientText className="from-blue-500 via-purple-500 to-pink-500">Modern PE Firms</GradientText>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Everything you need to manage your private equity operations efficiently, 
                from deal sourcing to exit.
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Features Grid */}
          {features.map((section, sectionIndex) => (
            <ScrollAnimation key={section.category} delay={sectionIndex * 0.1}>
              <motion.div className="mb-16">
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <motion.span 
                    className="text-4xl"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: sectionIndex * 0.1 + 0.3
                    }}
                  >
                    {section.icon}
                  </motion.span>
                  <h2 className="text-2xl font-bold text-oblinor-primary">
                    {section.category}
                  </h2>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {section.items.map((feature, index) => (
                    <AnimatedCard
                      key={feature.title}
                      delay={index * 0.1}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-oblinor-accent transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </AnimatedCard>
                  ))}
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}

          {/* CTA */}
          <ScrollAnimation animation="fadeInScale">
            <motion.div 
              className="mt-20 text-center p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h2 className="text-3xl font-bold text-oblinor-primary mb-4">
                Ready to see it in <GradientText className="from-blue-500 via-purple-500 to-pink-500">action</GradientText>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a personalized demo to see how Oblinor can transform your operations.
              </p>
              <AnimatedButton href="/demo" variant="primary">
                Request a Demo
              </AnimatedButton>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </PageTransition>
  )
}