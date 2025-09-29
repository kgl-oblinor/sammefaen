import type { Metadata } from 'next'
import Link from 'next/link'

// UI Components
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for private equity firms. Choose the plan that fits your needs.',
}

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per month',
    description: 'Perfect for emerging funds',
    features: [
      'Up to 10 portfolio companies',
      '5 team members',
      'Basic analytics & reporting',
      'Email support',
      'Monthly data exports',
    ],
    cta: 'Start Free Trial',
    href: '/demo',
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: 'per month',
    description: 'For growing mid-market funds',
    features: [
      'Up to 50 portfolio companies',
      '20 team members',
      'Advanced analytics suite',
      'Priority support',
      'API access',
      'Custom branding',
      'Automated workflows',
    ],
    cta: 'Start Free Trial',
    href: '/demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large institutions',
    features: [
      'Unlimited portfolio companies',
      'Unlimited team members',
      'White-label options',
      'Dedicated success manager',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    href: '/demo',
  },
]

export default function PricingPage() {
  return (
    <Section>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading as="h1" className="mb-4">
            Simple, Transparent Pricing
          </Heading>
          <p className="body-large">
            No hidden fees. No surprise charges. Just straightforward pricing that scales with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid-pricing max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.featured ? 'glass-primary' : 'glass'}
              className={`relative ${plan.featured ? 'scale-105 ring-2 ring-primary' : ''}`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              )}
              <div className="mb-8">
                <Heading as="h3" className="mb-2 !text-2xl">
                  {plan.name}
                </Heading>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-300">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.featured ? 'secondary' : 'primary'} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" className="text-center mb-12 !text-3xl">
            Frequently Asked Questions
          </Heading>
          <div className="space-y-6">
            <Card variant="solid" className="mb-6">
              <Heading as="h4" className="mb-2 !text-lg">Can I change plans later?</Heading>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </Card>
            <Card variant="solid" className="mb-6">
              <Heading as="h4" className="mb-2 !text-lg">Is there a free trial?</Heading>
              <p className="text-gray-400">
                Yes, all plans come with a 14-day free trial. No credit card required to start.
              </p>
            </Card>
            <Card variant="solid" className="mb-6">
              <Heading as="h4" className="mb-2 !text-lg">What kind of support is included?</Heading>
              <p className="text-gray-400">
                All plans include email support. Professional and Enterprise plans include priority support with faster response times and dedicated success managers.
              </p>
            </Card>
            <Card variant="solid" className="mb-6">
              <Heading as="h4" className="mb-2 !text-lg">Do you offer discounts for annual billing?</Heading>
              <p className="text-gray-400">
                Yes, we offer a 20% discount for annual prepayment on all plans.
              </p>
            </Card>
          </div>
        </div>
    </Section>
  )
}