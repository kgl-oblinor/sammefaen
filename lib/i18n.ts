import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  no: {
    translation: {}
  },
  en: {
    translation: {}
  }
}

const initI18n = async () => {
  try {
    // Load translations
    const noTranslations = await fetch('/locales/no/translation.json').then(r => r.json())
    const enTranslations = await fetch('/locales/en/translation.json').then(r => r.json())
    
    resources.no.translation = noTranslations
    resources.en.translation = enTranslations

    await i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'no' : 'no',
        fallbackLng: 'no',
        interpolation: {
          escapeValue: false
        },
        react: {
          useSuspense: false
        }
      })
  } catch (error) {
    console.error('Failed to initialize i18n:', error)
  }
}

export { i18n, initI18n }

export const changeLanguage = (lng: string) => {
  localStorage.setItem('language', lng)
  i18n.changeLanguage(lng)
}