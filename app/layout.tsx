import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import '../styles/apple-watch.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ParticleSystem from '@/components/animations/ParticleSystem'
import { constructMetadata } from '@/lib/metadata'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'
import Script from 'next/script'
import { WebVitals } from '@/components/WebVitals'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import I18nProvider from '@/providers/I18nProvider'

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
        <meta name="theme-color" content="#FF6B35" />
        <link rel="icon" href="/favicon.ico" />
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <ThemeProvider>
          <I18nProvider>
            <ParticleSystem />
            <Navigation />
            <main id="main-content" className="min-h-screen bg-background text-text-primary">
              {children}
            </main>
            <Footer />
            <WebVitals />
            {/* <Analytics /> */}
            {/* <SpeedInsights /> */}
          </I18nProvider>
        </ThemeProvider>
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