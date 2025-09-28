'use client'

import { motion } from 'framer-motion'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollAnimation from '@/components/ScrollAnimation'
import GradientText from '@/components/GradientText'

const features = [
  {
    title: 'Secure Trading',
    description: 'Advanced security measures to protect your investments and transactions',
    icon: '🔒',
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor market trends and make informed decisions with live data',
    icon: '📊',
  },
  {
    title: 'Portfolio Management',
    description: 'Comprehensive tools to track and optimize your investment portfolio',
    icon: '💼',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our expert financial advisors',
    icon: '🤝',
  },
]

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-background-card">
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <GradientText>Oblinor</GradientText>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Experience the future of equity trading with our cutting-edge platform
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <AnimatedCard className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </AnimatedCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}