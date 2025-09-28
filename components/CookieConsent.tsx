'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cookies from 'js-cookie'
import { X } from 'lucide-react'

const COOKIE_NAME = 'oblinor-cookie-consent'
const COOKIE_EXPIRY = 365 // days

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME)
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        applyPreferences(saved)
      } catch (e) {
        console.error('Failed to parse cookie preferences')
      }
    }
  }, [])

  const applyPreferences = (prefs: CookiePreferences) => {
    // Enable/disable analytics
    if (typeof window !== 'undefined') {
      if (prefs.analytics) {
        // Enable Google Analytics, Vercel Analytics etc
        (window as any).gtag?.('consent', 'update', {
          'analytics_storage': 'granted'
        })
      } else {
        // Disable analytics
        (window as any).gtag?.('consent', 'update', {
          'analytics_storage': 'denied'
        })
      }
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    applyPreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptSelected = () => {
    saveCookiePreferences(preferences)
    applyPreferences(preferences)
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    saveCookiePreferences(onlyNecessary)
    applyPreferences(onlyNecessary)
    setShowBanner(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(prefs), { 
      expires: COOKIE_EXPIRY,
      sameSite: 'lax'
    })
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Vi bruker cookies 🍪
                </h3>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Lukk cookie-banner"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Vi bruker cookies for å forbedre din opplevelse på nettsiden vår. 
                Noen cookies er nødvendige for at nettsiden skal fungere, mens andre 
                hjelper oss å forstå hvordan du bruker nettsiden.
              </p>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mb-6 space-y-4 overflow-hidden"
                >
                  <div className="border-t pt-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">Nødvendige cookies</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Disse cookies er essensielle for at nettsiden skal fungere ordentlig. 
                          De kan ikke slås av.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">Analyse-cookies</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Hjelper oss å forstå hvordan besøkende bruker nettsiden vår ved å 
                          samle inn anonym informasjon.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">Markedsførings-cookies</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Brukes for å vise relevante annonser og måle effektiviteten av 
                          markedsføringskampanjer.
                        </p>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Godta alle
                </button>
                
                {showDetails ? (
                  <button
                    onClick={acceptSelected}
                    className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Godta valgte
                  </button>
                ) : (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Tilpass cookies
                  </button>
                )}
                
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Kun nødvendige
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Ved å klikke "Godta alle" samtykker du til bruk av alle cookies. 
                Du kan lese mer i vår{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  personvernerklæring
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}