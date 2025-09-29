'use client'

import { useEffect, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'

// Translation resources - will be loaded from JSON files
const resources = {
  en: { translation: {} },
  no: { translation: {} }
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initI18n = async () => {
      try {
        // Load translations from JSON files
        const [noTranslations, enTranslations] = await Promise.all([
          fetch('/locales/no/translation.json').then(r => r.json()),
          fetch('/locales/en/translation.json').then(r => r.json())
        ])
        
        resources.no.translation = noTranslations
        resources.en.translation = enTranslations

        // Get saved language or use default
        const savedLang = localStorage.getItem('language') || 'no'

        await i18n
          .use(initReactI18next)
          .init({
            resources,
            lng: savedLang,
            fallbackLng: 'no',
            interpolation: {
              escapeValue: false
            }
          })
        
        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize i18n:', error)
        setIsInitialized(true) // Still initialize to prevent app from hanging
      }
    }

    initI18n()
  }, [])

  if (!isInitialized) {
    return <>{children}</> // Return children to prevent blank screen
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}