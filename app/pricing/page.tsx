import type { Metadata } from 'next'
import Link from 'next/link'

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
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-oblinor-primary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            No hidden fees. No surprise charges. Just straightforward pricing that scales with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-oblinor-primary text-white ring-4 ring-oblinor-accent scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-oblinor-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.featured ? 'text-white' : 'text-oblinor-primary'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className={`text-4xl font-bold ${
                    plan.featured ? 'text-white' : 'text-oblinor-primary'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${
                    plan.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {plan.period}
                  </span>
                </div>
                <p className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'text-oblinor-accent' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.featured
                    ? 'bg-white text-oblinor-primary hover:bg-gray-100'
                    : 'bg-oblinor-accent text-white hover:bg-blue-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-oblinor-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">What kind of support is included?</h3>
              <p className="text-gray-600">
                All plans include email support. Professional and Enterprise plans include priority support with faster response times and dedicated success managers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">
                Yes, we offer a 20% discount for annual prepayment on all plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}