import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const checkAuth = () => {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('admin-auth')
  return authCookie?.value === 'authenticated'
}

// Store translations in memory (in production, use a database)
const translationsStore: { [key: string]: any } = {
  no: {
    nav: {
      home: 'Hjem',
      features: 'Funksjoner',
      solutions: 'Løsninger',
      institusjonelle: 'Institusjonelle',
      pricing: 'Prising',
      contact: 'Kontakt',
      getStarted: 'Kom i gang'
    }
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      solutions: 'Solutions',
      institusjonelle: 'Institutional',
      pricing: 'Pricing',
      contact: 'Contact',
      getStarted: 'Get Started'
    }
  }
}

export async function GET(request: NextRequest) {
  if (!checkAuth()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const searchParams = request.nextUrl.searchParams
  const lang = searchParams.get('lang') || 'no'
  
  try {
    // In production, fetch from database instead
    const translations = translationsStore[lang] || {}
    return NextResponse.json(translations)
  } catch (error) {
    console.error('Error reading translations:', error)
    return NextResponse.json({ error: 'Failed to read translations' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!checkAuth()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const { lang, translations } = await request.json()
  
  if (!lang || !translations) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    // In production, save to database instead
    translationsStore[lang] = translations
    
    // Note: This won't persist between serverless function invocations
    // For production, use a database like Vercel KV, Supabase, or similar
    
    return NextResponse.json({ 
      success: true, 
      message: 'Translations updated in memory (not persisted)' 
    })
  } catch (error) {
    console.error('Error saving translations:', error)
    return NextResponse.json({ error: 'Failed to save translations' }, { status: 500 })
  }
}