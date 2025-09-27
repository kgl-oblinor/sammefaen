import React, { useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  particleSize?: { min: number; max: number };
  speed?: number;
  connectDistance?: number;
  showConnections?: boolean;
  gradient?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  particleCount = 50,
  particleColor = 'rgba(99, 102, 241, 0.5)',
  particleSize = { min: 1, max: 3 },
  speed = 0.5,
  connectDistance = 100,
  showConnections = true,
  gradient = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * (particleSize.max - particleSize.min) + particleSize.min,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = 1 - distance / connectDistance;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = particleColor;
      ctx.globalAlpha = opacity * 0.2;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x <= particle.size || particle.x >= canvas.width - particle.size) {
          particle.vx = -particle.vx;
        }
        if (particle.y <= particle.size || particle.y >= canvas.height - particle.size) {
          particle.vy = -particle.vy;
        }

        // Keep particles within bounds
        particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      if (gradient) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height) / 2
        );
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      updateParticles();

      // Draw connections
      if (showConnections) {
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );

            if (distance < connectDistance) {
              drawConnection(p1, p2, distance);
            }
          }
        }
      }

      // Draw particles
      particlesRef.current.forEach(drawParticle);

      animationIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [particleCount, particleColor, particleSize, speed, connectDistance, showConnections, gradient]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('fixed inset-0 pointer-events-none', className)}
      style={{ zIndex: -1 }}
    />
  );
};

// Preset configurations
export const AnimatedBackgroundPresets = {
  stars: {
    particleCount: 100,
    particleColor: 'rgba(255, 255, 255, 0.8)',
    particleSize: { min: 1, max: 2 },
    speed: 0.1,
    showConnections: false,
    gradient: false,
  },
  network: {
    particleCount: 50,
    particleColor: 'rgba(99, 102, 241, 0.5)',
    particleSize: { min: 2, max: 4 },
    speed: 0.5,
    connectDistance: 150,
    showConnections: true,
    gradient: true,
  },
  floating: {
    particleCount: 30,
    particleColor: 'rgba(99, 102, 241, 0.3)',
    particleSize: { min: 3, max: 6 },
    speed: 0.3,
    showConnections: false,
    gradient: true,
  },
};