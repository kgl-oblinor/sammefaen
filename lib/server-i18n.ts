import { headers } from 'next/headers'

// Server-side translation loading
export async function getTranslations(locale?: string) {
  // Get locale from headers if not provided
  if (!locale) {
    const headersList = headers()
    const acceptLanguage = headersList.get('accept-language') || ''
    locale = acceptLanguage.includes('no') ? 'no' : 'en'
  }

  // Default translations - in production, load from JSON files or database
  const translations = {
    no: {
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
      },
      benefits: {
        title: 'Building a More',
        titleHighlight: 'Equitable Future',
        subtitle: 'Discover how Oblinor Equity Hub is revolutionizing financial access for underserved communities',
        cards: [
          {
            icon: '🛠️',
            title: 'Accessible Tools',
            description: 'User-friendly financial tools designed for everyone'
          },
          {
            icon: '🤝',
            title: 'Community Driven',
            description: 'Built by the community, for the community'
          },
          {
            icon: '🔒',
            title: 'Secure & Transparent',
            description: 'Your data and investments are always protected'
          }
        ]
      },
      cta: {
        title: 'Ready to Transform Your',
        titleHighlight: 'Financial Future',
        subtitle: 'Request a demo to see how Oblinor Equity Hub can empower your community',
        buttonText: 'Request Demo',
        placeholder: 'Your work email'
      }
    },
    en: {
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
      },
      benefits: {
        title: 'Building a More',
        titleHighlight: 'Equitable Future',
        subtitle: 'Discover how Oblinor Equity Hub is revolutionizing financial access for underserved communities',
        cards: [
          {
            icon: '🛠️',
            title: 'Accessible Tools',
            description: 'User-friendly financial tools designed for everyone'
          },
          {
            icon: '🤝',
            title: 'Community Driven',
            description: 'Built by the community, for the community'
          },
          {
            icon: '🔒',
            title: 'Secure & Transparent',
            description: 'Your data and investments are always protected'
          }
        ]
      },
      cta: {
        title: 'Ready to Transform Your',
        titleHighlight: 'Financial Future',
        subtitle: 'Request a demo to see how Oblinor Equity Hub can empower your community',
        buttonText: 'Request Demo',
        placeholder: 'Your work email'
      }
    }
  }

  return translations[locale as keyof typeof translations] || translations.en
}