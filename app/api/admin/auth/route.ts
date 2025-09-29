import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

if (!ADMIN_PASSWORD) {
  throw new Error('ADMIN_PASSWORD environment variable is not set')
}

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('admin-auth')
  
  if (authCookie?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true })
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 })
}

export async function POST(request: NextRequest) {
  const { password } = await request.json()
  
  if (password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    })
    return response
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}