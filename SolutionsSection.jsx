import React from 'react';
import SolutionShowcase from './SolutionShowcase';
import './SolutionsSection.css';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 'institutional-investors',
      badge: 'For Institutional Investors',
      badgeType: 'investor',
      title: 'Professional Trading Environment',
      description: 'Access institutional-grade trading tools with advanced order types and real-time market data. Our platform ensures optimal execution with comprehensive pre and post-trade analytics.',
      features: [
        {
          number: '01',
          title: 'Smart Order Routing',
          description: 'Price-time priority matching with sub-millisecond latency'
        },
        {
          number: '02',
          title: 'T+0 Settlement',
          description: 'Instant settlement with automated clearing and reconciliation'
        },
        {
          number: '03',
          title: 'Real-Time Risk Management',
          description: 'Continuous portfolio monitoring with customizable alerts'
        }
      ],
      visual: {
        icon: '⚡',
        title: 'Ultra-Low Latency',
        subtitle: 'Sub-millisecond execution speeds',
        gradient: 'gradient-electric'
      }
    },
    {
      id: 'corporate-issuers',
      badge: 'For Corporate Issuers',
      badgeType: 'corporate',
      title: 'Complete Equity Management',
      description: 'Streamline your equity operations with our comprehensive capital markets platform. From initial issuance to ongoing investor relations, manage every aspect of your equity lifecycle.',
      features: [
        {
          number: '01',
          title: 'Digital Issuance Platform',
          description: 'End-to-end digital workflow for primary offerings'
        },
        {
          number: '02',
          title: 'Cap Table Management',
          description: 'Real-time ownership tracking with automated compliance'
        },
        {
          number: '03',
          title: 'Regulatory Reporting',
          description: 'Automated filing with SEC, FINRA, and international regulators'
        }
      ],
      visual: {
        icon: '📊',
        title: 'Advanced Analytics',
        subtitle: 'Real-time market intelligence',
        gradient: 'gradient-analytics'
      }
    },
    {
      id: 'all-stakeholders',
      badge: 'For All Stakeholders',
      badgeType: 'stakeholder',
      title: 'Enterprise-Grade Security',
      description: 'Built with bank-level security standards and regulatory compliance at its core. Our platform exceeds industry requirements for data protection, privacy, and operational resilience.',
      features: [
        {
          number: '01',
          title: 'SOC 2 Type II Certified',
          description: 'Annual third-party security audits and penetration testing'
        },
        {
          number: '02',
          title: 'Global Compliance',
          description: 'GDPR, CCPA, MiFID II, and Dodd-Frank compliant'
        },
        {
          number: '03',
          title: '24/7 Support',
          description: 'Dedicated support team with 99.99% uptime SLA'
        }
      ],
      visual: {
        icon: '🛡️',
        title: 'Bank-Grade Security',
        subtitle: 'Enterprise protection standards',
        gradient: 'gradient-security'
      }
    }
  ];

  return (
    <section className="solutions-section">
      {/* Background Pattern */}
      <div className="solutions-bg-pattern">
        <div className="pattern-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="solutions-container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-icon">✨</span>
            Enterprise Solutions
          </div>
          <h2 className="section-title">
            Institutional-grade infrastructure
            <br />
            for modern equity markets
          </h2>
          <p className="section-description">
            From startups to Fortune 500 companies, OBLINOR provides comprehensive 
            solutions tailored to your organization's specific requirements.
          </p>
        </div>

        {/* Solution Showcases */}
        <div className="showcases-wrapper">
          {solutions.map((solution, index) => (
            <SolutionShowcase
              key={solution.id}
              solution={solution}
              index={index}
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="solutions-cta" data-aos="fade-up">
          <h3>Ready to transform your equity operations?</h3>
          <p>Join leading institutions worldwide who trust OBLINOR for their capital markets needs.</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <span>Schedule Demo</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 10H14M14 10L10 6M14 10L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              <span>View Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;