'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/animations/PageTransition'
import GradientText from '@/components/common/GradientText'
import AnimatedCard from '@/components/animations/AnimatedCard'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

// New UI Components
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import Section from '@/components/ui/Section'

export default function SolutionsPage() {
  const solutions = [
    {
      number: '01',
      label: 'Ultra-Low Latency Trading',
      title: 'Institutional Trading Platform',
      description: 'Execute trades at the speed of light with our quantum-optimized matching engine. Built for institutions that demand microsecond precision and absolute reliability.',
      icon: '⚡',
      features: [
        {
          icon: '⚡',
          title: '0.003ms Execution',
          description: 'Industry-leading latency with 99.999% uptime guarantee'
        },
        {
          icon: '∞',
          title: 'Infinite Scalability',
          description: 'Process 10M+ orders per second with horizontal scaling'
        },
        {
          icon: '🛡',
          title: 'Military-Grade Security',
          description: 'Zero-knowledge proofs and quantum-resistant encryption'
        }
      ],
      stats: [
        { value: '0.003ms', label: 'Latency' },
        { value: '10M+', label: 'Orders/sec' },
        { value: '99.999%', label: 'Uptime' },
        { value: '24/7', label: 'Support' }
      ],
      gradient: 'from-[#008C9E] to-[#00B4CC]',
      cta: 'Book Enterprise Demo',
      mailList: 'enterprise'
    },
    {
      number: '02',
      label: 'Intelligent Equity Management',
      title: 'AI-Powered Cap Table Platform',
      description: 'Automate your entire equity lifecycle with our neural network-driven platform. From emissions to exits, manage everything with unprecedented intelligence and efficiency.',
      icon: '🧠',
      features: [
        {
          icon: '🧠',
          title: 'Predictive Analytics',
          description: 'AI forecasts optimal timing for emissions and liquidity events'
        },
        {
          icon: '🔄',
          title: 'Automated Compliance',
          description: 'Real-time regulatory updates across 150+ jurisdictions'
        },
        {
          icon: '📊',
          title: 'Dynamic Reporting',
          description: 'Generate any report format instantly with natural language'
        }
      ],
      stats: [
        { value: '50K+', label: 'AI Models' },
        { value: '97%', label: 'Accuracy' },
        { value: '150+', label: 'Jurisdictions' },
        { value: '∞', label: 'Scalability' }
      ],
      gradient: 'from-[#00B4CC] to-[#4DD9E8]',
      cta: 'Start AI Pilot',
      mailList: 'ai-equity'
    },
    {
      number: '03',
      label: 'Quantum Capital Markets',
      title: 'Next-Gen Fundraising Engine',
      description: 'Leverage quantum computing and blockchain to create the world\'s most efficient capital raising platform. From seed to IPO, optimize every aspect of your fundraise.',
      icon: '💎',
      features: [
        {
          icon: '💎',
          title: 'Smart Contract Emissions',
          description: 'Deploy capital raises in minutes with automated smart contracts'
        },
        {
          icon: '🌐',
          title: 'Global Investor Network',
          description: 'Access 100,000+ verified institutional investors worldwide'
        },
        {
          icon: '📈',
          title: 'Dynamic Valuation Engine',
          description: 'Real-time valuation optimization using market sentiment analysis'
        }
      ],
      stats: [
        { value: '$50B+', label: 'Raised' },
        { value: '100K+', label: 'Investors' },
        { value: '5min', label: 'Setup Time' },
        { value: 'T+0', label: 'Settlement' }
      ],
      gradient: 'from-[#4DD9E8] to-[#00B4CC]',
      cta: 'Request API Access',
      mailList: 'capital-markets'
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-background-dark to-background relative overflow-hidden">
        {/* Premium Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 180, 204, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 180, 204, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
              transform: 'perspective(500px) rotateX(35deg)',
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#00B4CC]/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#008C9E]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Hero Section */}
        <Section size="lg" className="relative overflow-hidden z-10">
          <div className="container relative">
            <ScrollAnimation>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-5xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#008C9E]/10 to-[#00B4CC]/10 border border-[#00B4CC]/30 rounded-full mb-8">
                  <span className="text-sm font-semibold text-[#4DD9E8] uppercase tracking-wider">ENTERPRISE SOLUTIONS</span>
                </div>
                
                <Heading as="h1" className="mb-8 font-black leading-[0.9] !text-5xl md:!text-7xl">
                  <span className="block">Next-generation infrastructure</span>
                  <span className="block mt-2 bg-gradient-to-r from-[#00B4CC] via-[#4DD9E8] to-[#00B4CC] text-gradient">
                    for modern capital markets
                  </span>
                </Heading>
                
                <p className="body-large max-w-3xl mx-auto !text-xl md:!text-2xl">
                  Harness the power of AI, blockchain, and quantum computing to revolutionize 
                  how you trade, manage, and raise capital in the digital age.
                </p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </Section>

        {/* Solutions Showcase */}
        <Section size="lg" className="relative z-10">
          <div className="container">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 mb-32 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -top-20 -left-10 text-[10rem] font-black text-white/5 select-none">
                    {solution.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{solution.label}</span>
                    </div>
                    
                    <Heading as="h2" className="mb-6 font-black leading-tight !text-4xl md:!text-5xl">
                      {solution.title}
                    </Heading>
                    
                    <p className="body-medium mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-4">
                      {solution.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + fIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="group flex gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className={`w-14 h-14 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Card */}
                <div className={`relative h-[600px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card
                    variant="glass"
                    className="absolute inset-0 p-12 flex flex-col items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500"
                    whileHover={{ rotateY: 5, rotateX: -5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Rotating gradient background */}
                    <div className="absolute inset-0 opacity-30">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} animate-pulse`} />
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-32 h-32 bg-gradient-to-br ${solution.gradient} rounded-3xl flex items-center justify-center text-6xl mb-8 relative z-10 animate-pulse`}>
                      {solution.icon}
                    </div>
                    
                    {/* Title */}
                    <Heading as="h3" className="mb-8 relative z-10 !text-2xl">
                      {solution.title.split(' ')[0]} Performance
                    </Heading>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full relative z-10">
                      {solution.stats.map((stat, sIndex) => (
                        <div key={sIndex} className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                          <div className="text-2xl font-black text-cyan-400 mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button variant="primary" size="lg" className="mt-8 relative z-10">
                      {solution.cta}
                    </Button>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section size="lg" className="relative z-10 bg-gradient-to-t from-cyan-500/5 to-transparent">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" className="mb-6 font-black !text-4xl md:!text-5xl" gradient>
                Ready to transform your capital operations?
              </Heading>
              <p className="body-large mb-12">
                Join the world's leading institutions on Oblinor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="xl" className="hover:shadow-2xl hover:shadow-cyan-500/30">
                  Schedule Enterprise Demo
                </Button>
                <Button variant="secondary" size="xl">
                  Download Whitepaper
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>
        {/* Infrastructure & Compliance Section */}
        <Section className="bg-gradient-to-b from-background-dark to-background">
          <div className="container">
            <Card variant="glass" className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-blue-500/20">
              <Heading as="h2" className="text-center mb-8 !text-3xl" gradient>
                Regulert Infrastruktur
              </Heading>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
                <p className="text-yellow-300 text-center">
                  <strong>⚠️ Viktig:</strong> Oblinor tilbyr ikke kontoførertjenester direkte. 
                  Kunder må selv søke om VPS-konto hos DNB Verdipapirservice.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📋</div>
                  <h4 className="font-bold text-white mb-2">Standard prosess</h4>
                  <p className="text-gray-400 text-sm">Manuell søknad hos DNB for VPS-konto</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⭐</div>
                  <h4 className="font-bold text-white mb-2">Premium (kommer)</h4>
                  <p className="text-gray-400 text-sm">Automatisert søknadsprosess</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h4 className="font-bold text-white mb-2">Euronext VPS</h4>
                  <p className="text-gray-400 text-sm">Vi bruker VPS-infrastruktur</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏦</div>
                  <h4 className="font-bold text-white mb-2">DNB Verdipapirservice</h4>
                  <p className="text-gray-400 text-sm">Offisiell kontofører</p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="container text-center">
            <Heading as="h2" className="mb-4 !text-3xl">
              Ikke sikker på hvilken løsning som passer best?
            </Heading>
            <p className="body-medium mb-8">
              Våre eksperter hjelper deg med å finne den perfekte blockchain-løsningen for din virksomhet
            </p>
            <Button variant="primary" size="lg" className="hover:shadow-xl">
              Book Gratis Konsultasjon
            </Button>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}