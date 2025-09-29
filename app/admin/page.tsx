'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

interface Translations {
  [key: string]: any
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [translations, setTranslations] = useState<{ no: Translations; en: Translations }>({
    no: {},
    en: {}
  })
  const [activeLanguage, setActiveLanguage] = useState<'no' | 'en'>('no')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'GET',
        credentials: 'include'
      })
      if (res.ok) {
        setIsAuthenticated(true)
        loadTranslations()
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    }
    setLoading(false)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include'
      })
      
      if (res.ok) {
        setIsAuthenticated(true)
        toast.success('Innlogget!')
        loadTranslations()
      } else {
        toast.error('Feil passord')
      }
    } catch (error) {
      toast.error('Noe gikk galt')
    }
  }

  const loadTranslations = async () => {
    try {
      const [noRes, enRes] = await Promise.all([
        fetch('/api/admin/translations?lang=no'),
        fetch('/api/admin/translations?lang=en')
      ])
      
      const [noData, enData] = await Promise.all([
        noRes.json(),
        enRes.json()
      ])
      
      setTranslations({ no: noData, en: enData })
    } catch (error) {
      toast.error('Kunne ikke laste oversettelser')
    }
  }

  const saveTranslations = async () => {
    setSaving(true)
    try {
      await Promise.all([
        fetch('/api/admin/translations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lang: 'no', translations: translations.no })
        }),
        fetch('/api/admin/translations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lang: 'en', translations: translations.en })
        })
      ])
      
      toast.success('Oversettelser lagret!')
    } catch (error) {
      toast.error('Kunne ikke lagre oversettelser')
    }
    setSaving(false)
  }

  const updateTranslation = (path: string, value: string) => {
    const keys = path.split('.')
    const newTranslations = { ...translations }
    let current = newTranslations[activeLanguage]
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {}
      current = current[keys[i]]
    }
    
    current[keys[keys.length - 1]] = value
    setTranslations(newTranslations)
  }

  const getTranslationValue = (path: string, lang: 'no' | 'en'): string => {
    const keys = path.split('.')
    let current = translations[lang]
    
    for (const key of keys) {
      if (!current || !current[key]) return ''
      current = current[key]
    }
    
    return typeof current === 'string' ? current : ''
  }

  const getAllPaths = (obj: any, prefix = ''): string[] => {
    const paths: string[] = []
    
    for (const key in obj) {
      const path = prefix ? `${prefix}.${key}` : key
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        paths.push(...getAllPaths(obj[key], path))
      } else {
        paths.push(path)
      }
    }
    
    return paths
  }

  const filteredPaths = getAllPaths(translations[activeLanguage])
    .filter(path => 
      path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getTranslationValue(path, activeLanguage).toLowerCase().includes(searchQuery.toLowerCase())
    )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Laster...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full p-8 bg-background-card rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Innlogging</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passord"
              className="w-full px-4 py-2 mb-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Logg inn
            </button>
          </form>
        </motion.div>
        <Toaster position="top-right" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="bg-background-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Oversettelser Admin</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/')}
                className="px-4 py-2 text-text-secondary hover:text-text-primary"
              >
                ← Tilbake
              </button>
              <button
                onClick={saveTranslations}
                disabled={saving}
                className="px-6 py-2 bg-success text-white rounded-lg hover:bg-success-dark transition-colors disabled:opacity-50"
              >
                {saving ? 'Lagrer...' : 'Lagre alt'}
              </button>
            </div>
          </div>
          
          {/* Language Tabs */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActiveLanguage('no')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeLanguage === 'no' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-background-dark'
              }`}
            >
              🇳🇴 Norsk
            </button>
            <button
              onClick={() => setActiveLanguage('en')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeLanguage === 'en' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-background-dark'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
          
          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søk etter nøkkel eller tekst..."
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLanguage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {filteredPaths.map((path) => (
              <motion.div
                key={path}
                layout
                className="bg-background-card rounded-lg p-6 border border-border"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Key and Current Value */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Nøkkel: <code className="text-primary">{path}</code>
                    </label>
                    <textarea
                      value={getTranslationValue(path, activeLanguage)}
                      onChange={(e) => updateTranslation(path, e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={3}
                    />
                  </div>
                  
                  {/* Other Language Reference */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      {activeLanguage === 'no' ? '🇬🇧 English' : '🇳🇴 Norsk'} (referanse)
                    </label>
                    <div className="px-4 py-2 bg-background rounded-lg border border-border text-text-secondary">
                      {getTranslationValue(path, activeLanguage === 'no' ? 'en' : 'no') || '(tom)'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}