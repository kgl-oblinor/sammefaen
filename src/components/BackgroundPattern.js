import React, { useEffect, useRef } from 'react';
import '../styles/BackgroundPattern.css';

const BackgroundPattern = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    let animationFrame = null;

    const handleMouseMove = (e) => {
      if (!particlesRef.current) return;

      const particles = particlesRef.current.querySelectorAll('.particle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.2;
            const xOffset = (mouseX - 0.5) * speed * 20;
            const yOffset = (mouseY - 0.5) * speed * 20;
            
            particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
          });
          animationFrame = null;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-pattern" />
      <div className="particles" ref={particlesRef}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
    </>
  );
};

export default BackgroundPattern;