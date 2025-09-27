import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ParticleSystem from '@/components/ParticleSystem'
import { AuthProvider } from '@/contexts/AuthContext'
import { constructMetadata } from '@/lib/metadata'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'
import Script from 'next/script'
import { WebVitals } from '@/components/WebVitals'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4318ff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
          strategy="afterInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ParticleSystem />
          <Header />
          <main className="min-h-screen bg-background text-text-primary">
            {children}
          </main>
          <Footer />
        </AuthProvider>
        <WebVitals />
        <Analytics />
        <SpeedInsights />
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('web-vital' in window) {
                window.addEventListener('load', () => {
                  const vitals = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];
                  vitals.forEach(vital => {
                    window['web-vital'](vital, ({ name, value }) => {
                      if (window.gtag) {
                        window.gtag('event', vital, {
                          value: Math.round(name === 'CLS' ? value * 1000 : value),
                          event_label: 'Web Vitals',
                          non_interaction: true,
                        });
                      }
                    });
                  });
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}