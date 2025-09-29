import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import PageTransition from '@/components/animations/PageTransition'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

// Dynamic imports with loading states
const FeaturesList = dynamic(() => import('@/components/features/FeaturesList'), {
  loading: () => <div className="animate-pulse h-96 bg-background-card rounded-lg" />,
})

const FeaturesHero = dynamic(() => import('@/components/features/FeaturesHero'), {
  loading: () => <div className="animate-pulse h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />,
})

export const metadata: Metadata = {
  title: 'Features - Oblinor Equity Hub',
  description: 'Explore our comprehensive features for portfolio management, deal tracking, and investor relations.',
}

// Server-side feature data
const features = [
  {
    category: 'Portfolio Management',
    icon: '📊',
    items: [
      {
        title: 'Real-time Performance Tracking',
        description: 'Monitor portfolio company metrics in real-time with customizable dashboards.',
      },
      {
        title: 'Financial Analytics',
        description: 'Advanced analytics tools for deep financial analysis and forecasting.',
      },
      {
        title: 'Automated Reporting',
        description: 'Generate comprehensive reports with one click for investors and stakeholders.',
      },
      {
        title: 'Risk Assessment',
        description: 'Identify and mitigate risks with our intelligent risk management system.',
      },
    ],
  },
  {
    category: 'Deal Flow Management',
    icon: '🤝',
    items: [
      {
        title: 'Deal Pipeline Tracking',
        description: 'Manage your entire deal pipeline from sourcing to exit.',
      },
      {
        title: 'Due Diligence Automation',
        description: 'Streamline due diligence with automated workflows and checklists.',
      },
      {
        title: 'Document Management',
        description: 'Secure, centralized repository for all deal-related documents.',
      },
      {
        title: 'Collaboration Tools',
        description: 'Real-time collaboration with team members and external advisors.',
      },
    ],
  },
  {
    category: 'Investor Relations',
    icon: '👥',
    items: [
      {
        title: 'LP Portal',
        description: 'Dedicated portal for limited partners with real-time updates.',
      },
      {
        title: 'Automated Communications',
        description: 'Keep investors informed with automated updates and newsletters.',
      },
      {
        title: 'Capital Call Management',
        description: 'Streamline capital calls with automated workflows and tracking.',
      },
      {
        title: 'Performance Reporting',
        description: 'Share performance metrics and reports securely with investors.',
      },
    ],
  },
  {
    category: 'Compliance & Security',
    icon: '🔒',
    items: [
      {
        title: 'Regulatory Compliance',
        description: 'Stay compliant with built-in regulatory tracking and reporting.',
      },
      {
        title: 'Data Encryption',
        description: 'Bank-level encryption for all data in transit and at rest.',
      },
      {
        title: 'Audit Trail',
        description: 'Complete audit trail for all activities and transactions.',
      },
      {
        title: 'Access Control',
        description: 'Granular permission settings for team members and external users.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <Section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <FeaturesHero />
        </Section>

        {/* Features List */}
        <Section className="py-20">
          <FeaturesList features={features} />
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-background-dark">
          <div className="container text-center">
            <Heading as="h2" className="mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent text-gradient">
                Private Equity Operations
              </span>
              ?
            </Heading>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join leading firms already using Oblinor Equity Hub
            </p>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}