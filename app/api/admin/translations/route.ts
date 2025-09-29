import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'

const checkAuth = () => {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('admin-auth')
  return authCookie?.value === 'authenticated'
}

export async function GET(request: NextRequest) {
  if (!checkAuth()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const searchParams = request.nextUrl.searchParams
  const lang = searchParams.get('lang') || 'no'
  
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json')
    const content = await fs.readFile(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(content))
  } catch (error) {
    console.error('Error reading translation file:', error)
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
    const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json')
    await fs.writeFile(filePath, JSON.stringify(translations, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error writing translation file:', error)
    return NextResponse.json({ error: 'Failed to save translations' }, { status: 500 })
  }
}