'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/animations/PageTransition'
import GradientText from '@/components/common/GradientText'
import AnimatedCard from '@/components/animations/AnimatedCard'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import AnimatedButton from '@/components/animations/AnimatedButton'
import EmailSignup from '@/components/forms/EmailSignup'

export default function InstitutionalInvestorsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background-dark">
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
                  For{' '}
                  <GradientText className="from-purple-500 via-orange-500 to-yellow-500">
                    Institusjonelle Investorer
                  </GradientText>
                </h1>
                
                <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
                  Aksjehandel møter Blockchain - Én plattform, flere muligheter
                </p>

                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-6 border border-purple-500/30">
                  <span className="text-sm font-semibold text-white">Powered by Euronext Issuer Services</span>
                </div>
              </motion.div>
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
                    Handle aksjer med <GradientText className="from-orange-500 via-yellow-500 to-orange-400">krypto eller NOK</GradientText>
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
                      <h4 className="text-white font-bold mb-2">Institusjon</h4>
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
                    <span><strong>Lave kostnader:</strong> Brøkdeler av øre per transaksjon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span><strong>Smart contracts:</strong> Automatiserte handelssystemer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span><strong>Høy kapasitet:</strong> 65,000 transaksjoner per sekund</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span><strong>SPL Tokens:</strong> Full tokenisering av aksjer</span>
                  </li>
                </ul>
              </AnimatedCard>

              {/* Bitcoin Column */}
              <AnimatedCard className="bg-gradient-to-br from-orange-900/50 to-yellow-800/30 backdrop-blur-xl border border-orange-500/20 p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.4 }}
                  className="flex items-center mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Bitcoin</h3>
                </motion.div>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    <span><strong>Lightning Network:</strong> Instant betalinger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    <span><strong>Maximum sikkerhet:</strong> Verdens sikreste nettverk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    <span><strong>Likviditet:</strong> Dypest likviditet globalt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    <span><strong>Global aksept:</strong> Støttet av alle børser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    <span><strong>Store handler:</strong> Perfekt for institusjonelle investorer</span>
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
                <p className="text-gray-300 mb-6">Se hvordan blockchain-integrasjonen fungerer for din institusjon</p>
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
                    <option>Handelsvolum per måned</option>
                    <option>Under 10 millioner NOK</option>
                    <option>10-50 millioner NOK</option>
                    <option>50-100 millioner NOK</option>
                    <option>Over 100 millioner NOK</option>
                  </select>
                  <motion.button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Demo →
                  </motion.button>
                </form>
              </motion.div>

              {/* Pricing Request Form */}
              <motion.div 
                className="bg-gradient-to-br from-orange-900/20 to-yellow-800/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20"
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
          </div>
        </section>
      </div>
    </PageTransition>
  )
}