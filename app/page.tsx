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
import EmailSignup from '@/components/EmailSignup'

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
              
              <div className="mt-12 max-w-md mx-auto">
                <p className="text-sm text-text-secondary mb-4 text-center">Get early access and updates</p>
                <EmailSignup type="newsletter" />
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

      {/* Blockchain Integration Section */}
      <section className="section-padding bg-gradient-to-b from-background-dark to-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                  Aksjehandel møter <GradientText className="from-orange-500 via-yellow-500 to-orange-400">Blockchain</GradientText>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Revolusjonerende aksjehandel gjennom integrasjon med Solana og Bitcoin blockchain.
                  Kjøp, selg og bytt aksjer direkte med kryptovaluta.
                </p>
              </motion.div>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Solana Column */}
            <AnimatedCard className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-xl border border-purple-500/20 p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="flex items-center mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Solana Blockchain</h3>
              </motion.div>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>Lynrask handel:</strong> Transaksjoner på under 1 sekund</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>Lave kostnader:</strong> Minimumsgebyrer på $0.00025 per transaksjon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>Smart contracts:</strong> Automatiserte aksjeswaps og dividender</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>DeFi integrasjon:</strong> Direkte tilgang til likviditetspooler</span>
                </li>
              </ul>
            </AnimatedCard>

            {/* Bitcoin Column */}
            <AnimatedCard className="bg-gradient-to-br from-orange-900/50 to-yellow-800/30 backdrop-blur-xl border border-orange-500/20 p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="flex items-center mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">₿</span>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Bitcoin Network</h3>
              </motion.div>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span><strong>Maksimal sikkerhet:</strong> Verdens mest sikre blockchain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span><strong>Lightning Network:</strong> Instant mikrobetalinger</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span><strong>Global aksept:</strong> Støttet av alle større børser</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span><strong>Store handler:</strong> Perfekt for institusjonelle investorer</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>

          {/* How it Works */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-orange-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Hvordan det fungerer</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Koble wallet', desc: 'Koble din Solana eller Bitcoin wallet', icon: '🔗' },
                { step: '2', title: 'Velg aksjer', desc: 'Bla gjennom tilgjengelige aksjer', icon: '📊' },
                { step: '3', title: 'Swap direkte', desc: 'Bytt krypto mot aksjer instant', icon: '⚡' },
                { step: '4', title: 'Eierskap on-chain', desc: 'Ditt eierskap registrert på blockchain', icon: '🔐' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text text-lg font-bold mb-1">
                    Steg {item.step}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatedButton href="/demo" variant="primary" className="btn-lg">
              Start Blockchain Trading →
            </AnimatedButton>
          </motion.div>
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

      {/* Email CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Transform Your <GradientText>Financial Future</GradientText>?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Request a demo to see how Oblinor Equity Hub can empower your community
              </p>
              <div className="max-w-md mx-auto">
                <EmailSignup type="demo" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}