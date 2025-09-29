'use client'

import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import { motion } from 'framer-motion'

interface BenefitsSectionProps {
  translations: {
    title: string
    titleHighlight: string
    subtitle: string
    cards: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

export default function BenefitsSection({ translations }: BenefitsSectionProps) {
  return (
    <div className="container">
      <ScrollAnimation>
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4 font-heading">
            {translations.title} <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gradient">{translations.titleHighlight}</span>
          </Heading>
          <p className="body-large max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-3 gap-8">
        {translations.cards.map((card, index) => (
          <Card 
            key={index}
            variant="glass" 
            className="text-center animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <motion.div
              className="text-4xl mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1
              }}
              aria-hidden="true"
            >
              {card.icon}
            </motion.div>
            <Heading as="h4" className="mb-2 !text-xl">
              {card.title}
            </Heading>
            <p className="text-text-secondary">
              {card.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}