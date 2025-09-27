import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import './HeroSection.css';

// Particle component
const Particle = ({ index }) => {
  const randomLeft = Math.random() * 100;
  const randomDuration = Math.random() * 10 + 10;
  const randomDelay = Math.random() * 10;

  return (
    <motion.div
      className="particle"
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 0.3, 0.3, 0],
        rotate: 720
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ left: `${randomLeft}%` }}
    />
  );
};

// Animated Counter component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef();
  const inViewRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true;
          const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplayValue(numericValue);
              clearInterval(timer);
            } else {
              setDisplayValue(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const formattedValue = value.includes('.')
    ? displayValue.toFixed(1)
    : Math.floor(displayValue);

  return (
    <span ref={nodeRef}>
      {value.includes('$') && '$'}
      {formattedValue}
      {value.includes('T') && 'T'}
      {suffix}
    </span>
  );
};

// Floating Card component
const FloatingCard = ({ className, imageSrc, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const translateZ = useTransform(mouseX, [-0.5, 0.5], [0, 50]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6 + index * 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      className={`floating-card ${className}`}
      style={{
        rotateY,
        rotateX,
        translateZ,
        transformPerspective: 1000
      }}
      animate={floatAnimation}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-glow" />
      {imageSrc && <img src={imageSrc} alt="Platform preview" />}
      {!imageSrc && (
        <div className="placeholder-content">
          <div className="placeholder-header" />
          <div className="placeholder-chart" />
          <div className="placeholder-rows">
            <div className="placeholder-row" />
            <div className="placeholder-row" />
            <div className="placeholder-row" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const [particles] = useState(Array.from({ length: 50 }, (_, i) => i));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero-section" ref={containerRef}>
      {/* Animated Background */}
      <div className="animated-bg">
        <motion.div
          className="bg-gradient"
          animate={{
            rotate: [0, 180, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Particle System */}
      <div className="particles-container">
        {particles.map(i => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          OBLINOR EQUITY HUB
        </motion.div>
        <div className="nav-menu">
          <a href="#features" className="nav-link">Features</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#demo" className="nav-link">Request Demo</a>
          <motion.a 
            href="#access" 
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Early Access</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Live Indicator */}
            <motion.div 
              className="live-indicator"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="live-dot">
                <span className="live-pulse" />
              </span>
              <span>New share issues • Coming soon • Live in 30 days</span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              The Future of<br/>
              <motion.span 
                className="text-gradient"
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Emission<br/>Trading
              </motion.span>
              <br/>is Here
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Experience the next generation of financial infrastructure.
              Oblinor combines institutional-grade security with consumer-
              friendly design to revolutionize how companies handle
              new share issues and equity trading.
            </motion.p>

            {/* Statistics Row */}
            <motion.div 
              className="stats-row"
              variants={itemVariants}
            >
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-value">
                  <AnimatedCounter value="$1.2T" />
                </div>
                <div className="stat-label">Assets Managed</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-value">
                  <AnimatedCounter value="156" />
                </div>
                <div className="stat-label">Countries</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-value">24/7</div>
                <div className="stat-label">Global Markets</div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Free shareholder trial</span>
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Floating Cards */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mockup-container">
              <FloatingCard 
                className="card-main" 
                index={0}
              />
              <FloatingCard 
                className="card-secondary" 
                index={1}
              />
              <FloatingCard 
                className="card-tertiary" 
                index={2}
              />
            </div>
          </motion.div>
        </div>

        {/* Glow Effects */}
        <motion.div 
          className="glow-orb glow-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="glow-orb glow-orb-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;