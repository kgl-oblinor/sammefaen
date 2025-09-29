import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Default translation resources with fallback values
const defaultResources = {
  en: { 
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        solutions: 'Solutions',
        institusjonelle: 'Institutional',
        pricing: 'Pricing',
        contact: 'Contact',
        getStarted: 'Get Started'
      },
      hero: {
        title: 'Invest in Equity with',
        brandName: 'Oblinor Equity Hub',
        subtitle: 'Empowering underserved communities with accessible financial tools and investment opportunities.',
        emailCta: 'Join our waitlist for early access'
      },
      blockchain: {
        badge: 'BLOCKCHAIN INTEGRATED',
        title: 'Trade stocks with',
        titleHighlight: 'crypto or NOK',
        subtitle: 'Trade stocks with NOK, Bitcoin, Solana or traditional currency. Everything on the same platform - you choose how you pay.',
        paymentMethodsTitle: 'Choose your preferred payment method'
      }
    } 
  },
  no: { 
    translation: {
      nav: {
        home: 'Hjem',
        features: 'Funksjoner',
        solutions: 'Løsninger',
        institusjonelle: 'Institusjonelle',
        pricing: 'Prising',
        contact: 'Kontakt',
        getStarted: 'Kom i gang'
      },
      hero: {
        title: 'Invester i aksjer med',
        brandName: 'Oblinor Equity Hub',
        subtitle: 'Vi gir underrepresenterte samfunn tilgang til finansielle verktøy og investeringsmuligheter.',
        emailCta: 'Meld deg på ventelisten for tidlig tilgang'
      },
      blockchain: {
        badge: 'BLOCKCHAIN INTEGRERT',
        title: 'Handle aksjer med',
        titleHighlight: 'krypto eller NOK',
        subtitle: 'Handle aksjer med NOK, Bitcoin, Solana eller tradisjonell valuta. Alt på samme plattform - du velger hvordan du betaler.',
        paymentMethodsTitle: 'Velg din foretrukne betalingsmetode'
      }
    } 
  }
}

// Initialize i18n synchronously with default values
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: defaultResources,
      lng: 'no', // default language
      fallbackLng: 'no',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      },
      debug: false // Disable debug messages in production
    })
}

// Function to load translations from JSON files
export async function loadTranslations() {
  if (typeof window === 'undefined') return

  try {
    const [noTranslations, enTranslations] = await Promise.all([
      fetch('/locales/no/translation.json').then(r => r.json()).catch(() => ({})),
      fetch('/locales/en/translation.json').then(r => r.json()).catch(() => ({}))
    ])
    
    if (Object.keys(noTranslations).length > 0) {
      i18n.addResourceBundle('no', 'translation', noTranslations, true, true)
    }
    if (Object.keys(enTranslations).length > 0) {
      i18n.addResourceBundle('en', 'translation', enTranslations, true, true)
    }

    // Set language from localStorage after loading
    const savedLang = localStorage.getItem('language')
    if (savedLang && (savedLang === 'en' || savedLang === 'no')) {
      i18n.changeLanguage(savedLang)
    }
  } catch (error) {
    console.error('Failed to load translations:', error)
  }
}

export { i18n }

export const changeLanguage = (lng: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng)
  }
  i18n.changeLanguage(lng)
}