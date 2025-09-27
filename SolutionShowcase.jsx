import React, { useRef, useEffect } from 'react';
import './SolutionShowcase.css';

const SolutionShowcase = ({ solution, index, isEven }) => {
  const deviceRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (deviceRef.current) observer.observe(deviceRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`showcase-row ${isEven ? 'showcase-row--even' : ''}`}>
      {/* Content Side */}
      <div className="showcase-content" ref={contentRef} data-aos={isEven ? "fade-left" : "fade-right"}>
        <div className={`showcase-badge badge-${solution.badgeType}`}>
          {solution.badge}
        </div>
        
        <h3 className="showcase-title">{solution.title}</h3>
        
        <p className="showcase-description">
          {solution.description}
        </p>
        
        <div className="showcase-features">
          {solution.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="showcase-feature"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-number">{feature.number}</span>
                <div className="feature-icon-bg"></div>
              </div>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Side */}
      <div className="showcase-visual" ref={deviceRef} data-aos={isEven ? "fade-right" : "fade-left"}>
        <div className="device-wrapper">
          <div className="device-frame">
            <div className="device-notch"></div>
            <div className="device-screen">
              <div className={`visual-illustration ${solution.visual.gradient}`}>
                <div className="visual-bg-pattern"></div>
                <div className="visual-icon">{solution.visual.icon}</div>
                <div className="visual-title">{solution.visual.title}</div>
                <div className="visual-subtitle">{solution.visual.subtitle}</div>
                
                {/* Animated Elements */}
                <div className="floating-elements">
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                </div>
              </div>
            </div>
            <div className="device-reflection"></div>
          </div>
          
          {/* Ambient Glow */}
          <div className="device-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SolutionShowcase;