import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Tailored solutions for private equity firms of all sizes. From emerging funds to established institutions.',
}

const solutions = [
  {
    title: 'For Emerging Funds',
    description: 'Start strong with tools designed for new and growing PE funds.',
    features: [
      'Streamlined deal tracking',
      'Basic LP reporting',
      'Portfolio monitoring',
      'Scalable infrastructure',
    ],
    cta: 'Learn More',
  },
  {
    title: 'For Mid-Market Funds',
    description: 'Advanced capabilities for funds managing $500M to $5B.',
    features: [
      'Advanced analytics',
      'Multi-fund management',
      'Automated workflows',
      'Custom reporting',
    ],
    cta: 'Learn More',
    highlighted: true,
  },
  {
    title: 'For Large Institutions',
    description: 'Enterprise-grade solutions for the most demanding requirements.',
    features: [
      'White-label options',
      'API integrations',
      'Dedicated support',
      'Custom development',
    ],
    cta: 'Contact Sales',
  },
]

export default function SolutionsPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-oblinor-primary mb-4">
            Solutions for Every Stage of Growth
          </h1>
          <p className="text-xl text-gray-600">
            Whether you're launching your first fund or managing billions in AUM, 
            we have the right solution for you.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`relative p-8 rounded-xl ${
                solution.highlighted
                  ? 'bg-oblinor-primary text-white ring-4 ring-oblinor-accent'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {solution.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-oblinor-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${
                solution.highlighted ? 'text-white' : 'text-oblinor-primary'
              }`}>
                {solution.title}
              </h3>
              <p className={`mb-6 ${
                solution.highlighted ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {solution.description}
              </p>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                        solution.highlighted ? 'text-oblinor-accent' : 'text-green-500'
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
                    <span className={solution.highlighted ? 'text-gray-300' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  solution.highlighted
                    ? 'bg-white text-oblinor-primary hover:bg-gray-100'
                    : 'bg-oblinor-accent text-white hover:bg-blue-600'
                }`}
              >
                {solution.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-oblinor-primary mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Life Sciences</h3>
              <p className="text-gray-600">
                Specialized tools for healthcare PE investments including regulatory 
                compliance tracking and clinical trial monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Technology & Software</h3>
              <p className="text-gray-600">
                Advanced metrics tracking for SaaS companies, including MRR, 
                churn analysis, and growth forecasting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure & Energy</h3>
              <p className="text-gray-600">
                Project tracking capabilities, ESG reporting, and long-term 
                asset performance monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Consumer & Retail</h3>
              <p className="text-gray-600">
                Market analysis tools, inventory tracking, and consumer 
                behavior analytics integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}