'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import LazyLoad from '@/components/ui/LazyLoad'
import PageTransition from '@/components/PageTransition'
import GradientText from '@/components/GradientText'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollAnimation from '@/components/ScrollAnimation'
import AnimatedButton from '@/components/AnimatedButton'
import ParallaxSection from '@/components/ParallaxSection'

// Dynamic imports for heavy components
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
  loading: () => <div className="section-padding bg-background-card animate-pulse h-96" />,
  ssr: true
})

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background-dark pt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008C9E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Welcome to{' '}
                <GradientText className="from-blue-500 via-purple-500 to-pink-500">
                  Oblinor Equity Hub
                </GradientText>
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                Empowering financial inclusion through innovative technology and community-driven solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <AnimatedButton href="/get-started" variant="primary" className="btn-lg">
                  Get Started
                </AnimatedButton>
                <AnimatedButton href="/learn-more" variant="secondary" className="btn-lg">
                  Learn More
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full opacity-20 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section Preview */}
      <ParallaxSection className="section-padding bg-background-card" offset={30}>
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Building a More <GradientText className="from-blue-500 via-purple-500 to-pink-500">Equitable Future</GradientText>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Discover how Oblinor Equity Hub is revolutionizing financial access for underserved communities
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessible Tools",
                description: "User-friendly financial tools designed for everyone",
                icon: "🛠️",
              },
              {
                title: "Community Driven",
                description: "Built by the community, for the community",
                icon: "🤝",
              },
              {
                title: "Secure & Transparent",
                description: "Your data and investments are always protected",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="card p-6 text-center"
              >
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
    </PageTransition>
  )
}