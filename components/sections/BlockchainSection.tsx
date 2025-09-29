'use client'

import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
// Temporarily removed until components are created
// import BlockchainIntegrationDemo from '@/components/features/BlockchainIntegrationDemo'
// import BlockchainCards from '@/components/features/BlockchainCards'
// import BlockchainForms from '@/components/features/BlockchainForms'
// import RegulatorySection from '@/components/features/RegulatorySection'

interface BlockchainSectionProps {
  translations: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    paymentMethodsTitle: string
  }
}

export default function BlockchainSection({ translations }: BlockchainSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-background relative overflow-hidden">
      <div className="container">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-6 border border-purple-500/30">
                  <span className="text-sm font-semibold text-primary-dark">{translations.badge}</span>
                </div>
                <Heading as="h2" className="mb-6 font-heading">
                  {translations.title} <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 text-gradient">{translations.titleHighlight}</span>
                </Heading>
                <p className="body-large max-w-3xl mx-auto">
                  {translations.subtitle}
                </p>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Payment Methods Demo */}
          <Card variant="gradient" className="mb-20 p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center" role="heading" aria-level={3}>
              {translations.paymentMethodsTitle}
            </h3>
            {/* BlockchainIntegrationDemo - To be implemented */}
            <div className="text-center text-gray-400">
              <p>Blockchain integration demo coming soon...</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}