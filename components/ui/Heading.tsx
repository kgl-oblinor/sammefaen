"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends Omit<HTMLMotionProps<"h1">, "as"> {
  as?: HeadingLevel;
  gradient?: boolean;
  children: React.ReactNode;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h1', gradient = false, className, children, ...props }, ref) => {
    const Component = motion[as];
    
    const styles = {
      h1: 'heading-1',
      h2: 'heading-2',
      h3: 'heading-3',
      h4: 'heading-4',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          styles[as],
          gradient && 'bg-gradient-to-r from-primary to-accent text-gradient',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;