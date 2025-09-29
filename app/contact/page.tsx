'use client'

import PageTransition from '@/components/animations/PageTransition'
import GradientText from '@/components/common/GradientText'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import EmailSignup from '@/components/forms/EmailSignup'
import { motion } from 'framer-motion'

// UI Components
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import Section from '@/components/ui/Section'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Section className="pt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <Heading as="h1" className="mb-4 font-heading">
                    Get in Touch with <span className="bg-gradient-to-r from-primary to-accent text-gradient">Oblinor</span>
                  </Heading>
                  <p className="body-large">
                    We'd love to hear from you. Choose how you'd like to connect with us.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 gap-8">
                <Card variant="glass" className="animate-fade-in-up stagger-1">
                  <Heading as="h2" className="mb-4 !text-2xl font-heading">
                    Stay Updated
                  </Heading>
                  <p className="body-medium mb-6">
                    Subscribe to our newsletter for the latest updates, insights, and opportunities in equity trading.
                  </p>
                  <EmailSignup type="newsletter" />
                </Card>

                <Card variant="glass" className="animate-fade-in-up stagger-2">
                  <Heading as="h2" className="mb-4 !text-2xl font-heading">
                    Request a Demo
                  </Heading>
                  <p className="body-medium mb-6">
                    See Oblinor Equity Hub in action. Schedule a personalized demo with our team.
                  </p>
                  <EmailSignup type="demo" />
                </Card>
              </div>

              <Card variant="gradient" className="mt-12 text-center animate-fade-in-up stagger-3">
                <Heading as="h3" className="mb-4 !text-xl font-heading">
                  Other Ways to Connect
                </Heading>
                <div className="space-y-2 body-medium">
                  <p>Email: hello@oblinor.com</p>
                  <p>Phone: 1-800-OBLINOR</p>
                  <p>Address: 123 Equity Street, Finance District</p>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}