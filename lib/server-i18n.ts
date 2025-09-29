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
        title: 'Fremragende innen',
        brandName: 'Private Equity',
        subtitle: 'Leverer overlegen avkastning gjennom disiplinerte investeringsstrategier og operasjonell ekspertise.',
        emailCta: 'Be om investorinformasjon'
      },
      blockchain: {
        badge: 'GLOBAL REKKEVIDDE',
        title: 'Investeringsløsninger på tvers av',
        titleHighlight: 'alle aktivaklasser',
        subtitle: 'Omfattende investeringsstrategier som spenner over private equity, eiendom, kreditt og offentlige markeder.',
        paymentMethodsTitle: 'Våre investeringsområder'
      },
      benefits: {
        title: 'Driving Value Through',
        titleHighlight: 'Strategic Excellence',
        subtitle: 'Our proven approach delivers consistent, superior returns across market cycles',
        cards: [
          {
            icon: '',
            title: 'Data-Driven Analysis',
            description: 'Rigorous quantitative analysis and market intelligence'
          },
          {
            icon: '',
            title: 'Global Network',
            description: 'Unparalleled access to deals and strategic partnerships'
          },
          {
            icon: '',
            title: 'Operational Excellence',
            description: 'Hands-on value creation through operational improvements'
          }
        ]
      },
      cta: {
        title: 'Partner With',
        titleHighlight: 'Industry Leaders',
        subtitle: 'Connect with our team to explore investment opportunities',
        buttonText: 'Contact Us',
        placeholder: 'Your institutional email'
      }
    },
    en: {
      hero: {
        title: 'Excellence in',
        brandName: 'Private Equity',
        subtitle: 'Delivering superior returns through disciplined investment strategies and operational excellence.',
        emailCta: 'Request investor information'
      },
      blockchain: {
        badge: 'GLOBAL REACH',
        title: 'Investment solutions across',
        titleHighlight: 'all asset classes',
        subtitle: 'Comprehensive investment strategies spanning private equity, real estate, credit, and public markets.',
        paymentMethodsTitle: 'Our investment verticals'
      },
      benefits: {
        title: 'Driving Value Through',
        titleHighlight: 'Strategic Excellence',
        subtitle: 'Our proven approach delivers consistent, superior returns across market cycles',
        cards: [
          {
            icon: '',
            title: 'Data-Driven Analysis',
            description: 'Rigorous quantitative analysis and market intelligence'
          },
          {
            icon: '',
            title: 'Global Network',
            description: 'Unparalleled access to deals and strategic partnerships'
          },
          {
            icon: '',
            title: 'Operational Excellence',
            description: 'Hands-on value creation through operational improvements'
          }
        ]
      },
      cta: {
        title: 'Partner With',
        titleHighlight: 'Industry Leaders',
        subtitle: 'Connect with our team to explore investment opportunities',
        buttonText: 'Contact Us',
        placeholder: 'Your institutional email'
      }
    }
  }

  return translations[locale as keyof typeof translations] || translations.en
}