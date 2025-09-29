'use client'

import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n, loadTranslations } from '@/lib/i18n'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // i18n is already initialized synchronously in /lib/i18n.ts
  // We just need to load the full translations asynchronously after mount
  
  useEffect(() => {
    // Load full translations from JSON files after mount
    loadTranslations()
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}