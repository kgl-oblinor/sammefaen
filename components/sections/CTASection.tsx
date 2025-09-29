'use client'

import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Heading from '@/components/ui/Heading'
import EmailSignup from '@/components/forms/EmailSignup'

interface CTASectionProps {
  translations: {
    title: string
    titleHighlight: string
    subtitle: string
    buttonText: string
    placeholder: string
  }
}

export default function CTASection({ translations }: CTASectionProps) {
  return (
    <div className="container">
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h2" className="mb-4 font-heading">
            {translations.title} <span className="bg-gradient-to-r from-primary to-accent text-gradient">{translations.titleHighlight}</span>?
          </Heading>
          <p className="body-large mb-8">
            {translations.subtitle}
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignup 
              type="demo" 
              placeholder={translations.placeholder}
              buttonText={translations.buttonText}
            />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}