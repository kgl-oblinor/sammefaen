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
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-6 border border-purple-500/30">
                  <span className="text-sm font-semibold text-white">Powered by Euronext Issuer Services</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                  Én Plattform - <GradientText className="from-orange-500 via-yellow-500 to-orange-400">Flere Muligheter</GradientText>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Handle aksjer med NOK, Bitcoin, Solana eller tradisjonell valuta.
                  Alt på samme plattform - du velger hvordan du betaler.
                </p>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Visual Process Flow */}
          <div className="mb-20 bg-gradient-to-r from-purple-900/10 to-orange-900/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Velg din foretrukne betalingsmetode</h3>
            
            {/* Payment Methods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div 
                className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">🇳🇴</div>
                <h4 className="text-white font-bold mb-1">Norske Kroner</h4>
                <p className="text-gray-400 text-sm">Tradisjonell bankoverføring</p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-bold mb-1">Solana</h4>
                <p className="text-gray-400 text-sm">Instant settlement</p>
              </motion.div>
              
              <motion.div 
                className="bg-orange-900/30 rounded-xl p-6 border border-orange-500/30 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">₿</div>
                <h4 className="text-white font-bold mb-1">Bitcoin</h4>
                <p className="text-gray-400 text-sm">Lightning Network</p>
              </motion.div>
              
              <motion.div 
                className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">💳</div>
                <h4 className="text-white font-bold mb-1">Kort/SEPA</h4>
                <p className="text-gray-400 text-sm">Visa/Mastercard</p>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Slik fungerer plattformen</h3>
            
            {/* Desktop Flow Diagram */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 150 100 Q 300 50 450 100"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path
                    d="M 450 100 Q 600 50 750 100"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
                
                {/* Process Steps */}
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">💼</span>
                    </div>
                    <h4 className="text-white font-bold mb-2">Bedrift</h4>
                    <p className="text-gray-400 text-sm">Selskapet ønsker å kjøpe aksjer med krypto</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-orange-600 to-yellow-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🔄</span>
                    </div>
                    <h4 className="text-white font-bold mb-2">Oblinor Hub</h4>
                    <p className="text-gray-400 text-sm">Smart contract prosesserer transaksjonen</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">📈</span>
                    </div>
                    <h4 className="text-white font-bold mb-2">Aksjer</h4>
                    <p className="text-gray-400 text-sm">Eierskap registrert på blockchain</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Technical Details */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-3">Blockchain-basert</h5>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>Solana: SPL Tokens & instant settlement</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>Bitcoin: Lightning Network for speed</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>On-chain eierskap og transparens</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h5 className="text-green-400 font-bold mb-3">Tradisjonell betaling</h5>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-green-400 mr-2">→</span>
                      <span>NOK via norske banker</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-green-400 mr-2">→</span>
                      <span>SEPA overføringer (EUR)</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="text-green-400 mr-2">→</span>
                      <span>Visa/Mastercard støtte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
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
                  <span><strong>Lave kostnader:</strong> $0.00025 per transaksjon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>Smart contracts:</strong> Automatiserte aksjeswaps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span><strong>DeFi integrasjon:</strong> Direkte tilgang til likviditet</span>
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
                  <span><strong>Global aksept:</strong> Støttet av alle børser</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span><strong>Store handler:</strong> For institusjonelle investorer</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>

          {/* Lead Capture Forms */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo Request Form */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Book Demo</h3>
              <p className="text-gray-300 mb-6">Se hvordan blockchain-integrasjonen fungerer for din bedrift</p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Selskapsnavn" 
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="E-postadresse" 
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Telefonnummer" 
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-gray-400 focus:outline-none focus:border-purple-400 transition-colors">
                  <option>Velg handelsvolum</option>
                  <option>Under $1M årlig</option>
                  <option>$1M - $10M årlig</option>
                  <option>$10M - $100M årlig</option>
                  <option>Over $100M årlig</option>
                </select>
                <motion.button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Presentasjon →
                </motion.button>
              </form>
            </motion.div>

            {/* Pricing Request Form */}
            <motion.div 
              className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Få Pristilbud</h3>
              <p className="text-gray-300 mb-6">Skreddersydd prising for institusjonelle kunder</p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Kontaktperson" 
                  className="w-full px-4 py-3 bg-white/10 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="E-postadresse" 
                  className="w-full px-4 py-3 bg-white/10 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-orange-500/30 rounded-lg text-gray-400 focus:outline-none focus:border-orange-400 transition-colors">
                  <option>Type tjeneste</option>
                  <option>Kun Bitcoin-handel</option>
                  <option>Kun Solana-handel</option>
                  <option>Full blockchain-pakke</option>
                  <option>Enterprise løsning</option>
                </select>
                <textarea 
                  placeholder="Beskriv deres behov..." 
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                />
                <motion.button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-lg hover:from-orange-700 hover:to-yellow-700 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Få Pristilbud →
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            {/* Infrastructure Partnership Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-3xl">🏛️</span>
                    Regulert Infrastruktur
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Oblinor bruker etablert infrastruktur fra Euronext VPS og DNB Verdipapirservice som kontofører.
                    <span className="text-yellow-400 font-semibold"> NB: Kontoførertjenester må søkes om direkte hos DNB.</span>
                  </p>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <p className="text-yellow-300 text-sm">
                      <strong>⚠️ Viktig:</strong> Oblinor tilbyr ikke kontoførertjenester direkte. 
                      Kunder må selv søke om VPS-konto hos DNB Verdipapirservice.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Standard prosess</strong>
                        <p className="text-gray-400 text-sm">Manuell søknad hos DNB for VPS-konto</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-400 mr-2">⭐</span>
                      <div>
                        <strong className="text-white">Premium tilgang</strong>
                        <p className="text-gray-400 text-sm">Automatisert søknadsprosess (kommer)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Euronext VPS</strong>
                        <p className="text-gray-400 text-sm">Vi bruker VPS-infrastruktur for handler</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">DNB Verdipapirservice</strong>
                        <p className="text-gray-400 text-sm">Offisiell kontofører (søk selv)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <h4 className="text-purple-400 font-bold mb-2">🚀 Premium medlemskap (kommer snart)</h4>
                    <p className="text-gray-300 text-sm">
                      Automatisert VPS-kontosøknad direkte i plattformen. 
                      Slipper manuell prosess hos DNB.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4">
                      <svg className="w-28 h-10 mx-auto" viewBox="0 0 200 50" fill="none">
                        <text x="10" y="35" fill="#004B87" font-family="Arial, sans-serif" font-size="24" font-weight="bold">EURONEXT</text>
                      </svg>
                      <p className="text-xs text-gray-600">VPS Infrastructure</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <svg className="w-28 h-10 mx-auto" viewBox="0 0 200 50" fill="none">
                        <text x="35" y="35" fill="#007272" font-family="Arial, sans-serif" font-size="28" font-weight="bold">DNB</text>
                      </svg>
                      <p className="text-xs text-gray-600">Verdipapirservice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 text-center">Trusted by leading institutions</p>
            <div className="flex justify-center items-center gap-12 opacity-50">
              <div className="text-gray-500 font-bold text-xl">Oslo Børs</div>
              <div className="text-gray-500 font-bold text-xl">VPS</div>
              <div className="text-gray-500 font-bold text-xl">Finanstilsynet</div>
              <div className="text-gray-500 font-bold text-xl">DNB</div>
            </div>
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