import React from 'react';
import '../styles/ShowcaseSection.css';

const ShowcaseSection = () => {
  const showcaseData = [
    {
      badge: 'For Institutional Investors',
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
        subtitle: 'Sub-millisecond execution speeds'
      }
    },
    {
      badge: 'For Corporate Issuers',
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
        subtitle: 'Real-time market intelligence'
      }
    }
  ];

  return (
    <div className="solutions-container">
      <div className="section-header">
        <div className="section-badge">Enterprise Solutions</div>
        <h1 className="section-title">
          Institutional-grade infrastructure<br/>
          for modern equity markets
        </h1>
        <p className="section-description">
          From startups to Fortune 500 companies, OBLINOR provides comprehensive 
          solutions tailored to your organization's specific requirements.
        </p>
      </div>

      {showcaseData.map((showcase, index) => (
        <div key={index} className={`showcase-row ${index % 2 === 1 ? 'showcase-row-reverse' : ''}`}>
          <div className="showcase-content">
            <div className="showcase-badge">{showcase.badge}</div>
            <h3 className="showcase-title">{showcase.title}</h3>
            <p className="showcase-description">{showcase.description}</p>
            
            <div className="showcase-features">
              {showcase.features.map((feature, idx) => (
                <div key={idx} className="showcase-feature">
                  <div className="feature-icon-wrapper">{feature.number}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="device-wrapper">
              <div className="device-frame">
                <div className="device-screen">
                  <div className="visual-illustration">
                    <div className="visual-icon">{showcase.visual.icon}</div>
                    <div className="visual-title">{showcase.visual.title}</div>
                    <div className="visual-subtitle">{showcase.visual.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseSection;