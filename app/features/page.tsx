'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import PageTransition from '@/components/animations/PageTransition'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import AnimatedCard from '@/components/animations/AnimatedCard'
import GradientText from '@/components/common/GradientText'
import AnimatedButton from '@/components/animations/AnimatedButton'
import { staggerContainer, staggerItem } from '@/lib/animations'

// New UI Components
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import Section from '@/components/ui/Section'

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
      <Section>
          {/* Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Heading as="h1" className="mb-4">
                Powerful Features for <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gradient">Modern PE Firms</span>
              </Heading>
              <p className="body-large">
                Everything you need to manage your private equity operations efficiently, 
                from deal sourcing to exit.
              </p>
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
                  <Heading as="h2" className="!text-2xl">
                    {section.category}
                  </Heading>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {section.items.map((feature, index) => (
                    <Card
                      key={feature.title}
                      variant="solid"
                      className={`hover:border-primary transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
                    >
                      <Heading as="h4" className="mb-2 !text-lg">{feature.title}</Heading>
                      <p className="text-gray-400">{feature.description}</p>
                    </Card>
                  ))}
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}

          {/* CTA */}
          <ScrollAnimation animation="fadeInScale">
            <Card variant="gradient" className="mt-20 text-center p-12 bg-gradient-to-r from-primary/10 to-accent/10">
              <Heading as="h2" className="mb-4 !text-3xl">
                Ready to see it in <span className="bg-gradient-to-r from-primary to-accent text-gradient">action</span>?
              </Heading>
              <p className="body-large mb-8">
                Schedule a personalized demo to see how Oblinor can transform your operations.
              </p>
              <Button variant="primary" size="lg">
                Request a Demo
              </Button>
            </Card>
          </ScrollAnimation>
      </Section>
    </PageTransition>
  )
}