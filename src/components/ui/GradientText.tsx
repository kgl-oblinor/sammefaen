import React from 'react';
import { cn } from '@/utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'rainbow' | 'sunset' | 'ocean' | 'custom';
  customColors?: string[];
  animate?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const gradientPresets = {
  primary: ['from-primary-400', 'to-primary-600'],
  secondary: ['from-secondary-400', 'to-secondary-600'],
  rainbow: ['from-red-500', 'via-yellow-500', 'via-green-500', 'via-blue-500', 'to-purple-500'],
  sunset: ['from-orange-400', 'via-red-500', 'to-pink-500'],
  ocean: ['from-blue-400', 'via-cyan-500', 'to-teal-500'],
};

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'primary',
  customColors,
  animate = false,
  className,
  as: Component = 'span',
}) => {
  const gradientClasses = customColors 
    ? customColors.join(' ')
    : gradientPresets[gradient]?.join(' ') || gradientPresets.primary.join(' ');

  return (
    <Component
      className={cn(
        'inline-block text-transparent bg-clip-text',
        'bg-gradient-to-r',
        gradientClasses,
        animate && 'animate-gradient-x',
        className
      )}
      style={animate ? {
        backgroundSize: '200% 200%',
        animation: 'gradient-x 3s ease infinite',
      } : undefined}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </Component>
  );
};

// Animated Gradient Text with more effects
interface AnimatedGradientTextProps extends GradientTextProps {
  animationType?: 'slide' | 'pulse' | 'wave' | 'shimmer';
  duration?: number;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  animationType = 'slide',
  duration = 3,
  ...props
}) => {
  const animationStyles: Record<string, React.CSSProperties> = {
    slide: {
      backgroundSize: '200% 200%',
      animation: `gradient-slide ${duration}s ease infinite`,
    },
    pulse: {
      animation: `gradient-pulse ${duration}s ease infinite`,
    },
    wave: {
      backgroundSize: '200% 200%',
      animation: `gradient-wave ${duration}s ease infinite`,
    },
    shimmer: {
      backgroundSize: '200% 200%',
      animation: `gradient-shimmer ${duration}s linear infinite`,
    },
  };

  return (
    <>
      <GradientText
        {...props}
        className={cn('relative', props.className)}
        style={animationStyles[animationType]}
      >
        {children}
      </GradientText>
      <style jsx global>{`
        @keyframes gradient-slide {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
            transform: translateY(0);
          }
          25% {
            transform: translateY(-2px);
          }
          50% {
            background-position: 100% 50%;
            transform: translateY(0);
          }
          75% {
            transform: translateY(2px);
          }
          100% {
            background-position: 0% 50%;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};