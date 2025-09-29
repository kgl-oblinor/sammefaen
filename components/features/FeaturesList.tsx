'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface Feature {
  title: string
  description: string
}

interface FeatureCategory {
  category: string
  icon: string
  items: Feature[]
}

interface FeaturesListProps {
  features: FeatureCategory[]
}

export default function FeaturesList({ features }: FeaturesListProps) {
  return (
    <>
      {features.map((category, categoryIndex) => (
        <div key={category.category} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="text-center mb-8"
          >
            <div className="text-5xl mb-4" aria-hidden="true">{category.icon}</div>
            <Heading as="h3" className="!text-2xl">
              {category.category}
            </Heading>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {category.items.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <Card variant="glass" className="h-full">
                  <Heading as="h4" className="mb-3 !text-lg">
                    {item.title}
                  </Heading>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </>
  )
}