'use client'

import PageTransition from '@/components/animations/PageTransition'
import GradientText from '@/components/common/GradientText'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import EmailSignup from '@/components/forms/EmailSignup'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Get in Touch with <GradientText>Oblinor</GradientText>
                  </h1>
                  <p className="text-lg text-text-secondary">
                    We'd love to hear from you. Choose how you'd like to connect with us.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="card p-8"
                >
                  <h2 className="text-2xl font-heading font-semibold mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Subscribe to our newsletter for the latest updates, insights, and opportunities in equity trading.
                  </p>
                  <EmailSignup type="newsletter" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="card p-8"
                >
                  <h2 className="text-2xl font-heading font-semibold mb-4">
                    Request a Demo
                  </h2>
                  <p className="text-text-secondary mb-6">
                    See Oblinor Equity Hub in action. Schedule a personalized demo with our team.
                  </p>
                  <EmailSignup type="demo" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 text-center"
              >
                <h3 className="text-xl font-heading font-semibold mb-4">
                  Other Ways to Connect
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Email: hello@oblinor.com</p>
                  <p>Phone: 1-800-OBLINOR</p>
                  <p>Address: 123 Equity Street, Finance District</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}