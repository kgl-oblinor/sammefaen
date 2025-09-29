'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }
  
  return (
    <select 
      value={i18n.language}
      onChange={handleLanguageChange}
      className="bg-gray-100/50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
      aria-label="Select language"
    >
      <option value="no">NO</option>
      <option value="en">EN</option>
    </select>
  )
}