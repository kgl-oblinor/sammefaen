import React, { useState, useEffect } from 'react';
import './mobile-responsive.css';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'institutional-investors', label: 'Institutional Investors', icon: '⚡' },
    { id: 'corporate-issuers', label: 'Corporate Issuers', icon: '📊' },
    { id: 'all-stakeholders', label: 'All Stakeholders', icon: '🛡️' },
  ];

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button
        className={`mobile-nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <div className="hamburger">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                <span style={{ marginRight: '12px', fontSize: '1.25rem' }}>{link.icon}</span>
                {link.label}
              </button>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <button className="btn-primary" onClick={() => setIsOpen(false)}>
              <span>Schedule Demo</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 10H14M14 10L10 6M14 10L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => setIsOpen(false)}>
              <span>View Pricing</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;