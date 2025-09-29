"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'glass' | 'glass-primary' | 'solid' | 'gradient';
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'glass', className, children, ...props }, ref) => {
    const variants = {
      glass: 'card-glass',
      'glass-primary': 'card-glass-primary',
      solid: 'card-solid',
      gradient: 'card-gradient',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(variants[variant], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;