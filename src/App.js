import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundPattern from './components/BackgroundPattern';
import Navigation from './components/Navigation';
import ShowcaseSection from './components/ShowcaseSection';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      // Cleanup observers
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <BackgroundPattern />
        <div className="main-container">
          <Navigation />
          <ShowcaseSection />
          
          {/* Footer */}
          <footer className="footer">
            © 2025 OBLINOR EQUITY HUB. All rights reserved. | Privacy Policy | Terms of Service | Contact
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;