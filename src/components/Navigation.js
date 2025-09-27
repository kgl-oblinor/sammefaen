import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#resources', label: 'Resources' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <a href="/" className="logo">OBLINOR EQUITY HUB</a>
      
      <div className="nav-menu">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(link.href);
              // Smooth scroll to section
              const element = document.querySelector(link.href);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {link.label}
          </a>
        ))}
        
        <a href="#demo" className="nav-cta btn btn-primary">
          <span>Request Demo</span>
        </a>
        
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;