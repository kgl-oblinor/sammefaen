"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLMotionProps<"section"> {
  size?: 'sm' | 'default' | 'lg';
  container?: boolean;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ size = 'default', container = true, className, children, ...props }, ref) => {
    const sizes = {
      sm: 'section-padding-sm',
      default: 'section-padding',
      lg: 'section-padding-lg',
    };

    return (
      <motion.section
        ref={ref}
        className={cn(sizes[size], className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {container ? (
          <div className="container">
            {children}
          </div>
        ) : children}
      </motion.section>
    );
  }
);

Section.displayName = 'Section';

export default Section;