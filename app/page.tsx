import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import PageTransition from '@/components/animations/PageTransition'
import Section from '@/components/ui/Section'
import { getTranslations } from '@/lib/server-i18n'

// Dynamic imports for heavy components with loading states
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
  loading: () => <div className="section-padding bg-background-card animate-pulse h-96" />,
  ssr: true
})

const BlockchainSection = dynamic(() => import('@/components/sections/BlockchainSection'), {
  loading: () => <div className="section-padding bg-gradient-to-b from-background-dark to-background animate-pulse h-96" />,
  ssr: true
})

const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => <div className="section-padding bg-background-card animate-pulse h-64" />,
  ssr: true
})

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse h-64" />,
  ssr: true
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Oblinor Equity Hub - Empowering Financial Inclusion',
    description: 'Invest in equity with blockchain technology. Supporting underserved communities with accessible financial tools and investment opportunities.',
  }
}

export default async function HomePage() {
  // Server-side translations
  const translations = await getTranslations()
  
  return (
    <>
      <PageTransition>
        <div className="min-h-screen">
          {/* Hero Section - Client Component for interactivity */}
          <HeroSection translations={translations.hero} />
          
          {/* Blockchain Section - Lazy loaded */}
          <BlockchainSection translations={translations.blockchain} />
          
          {/* Benefits Section */}
          <Section className="section-padding bg-background-card">
            <BenefitsSection translations={translations.benefits} />
          </Section>
          
          {/* CTA Section */}
          <Section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
            <CTASection translations={translations.cta} />
          </Section>
        </div>
      </PageTransition>
    </>
  )
}