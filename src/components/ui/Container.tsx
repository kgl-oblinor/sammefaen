import React from 'react';
import { cn } from '@/utils/cn';
import { BaseComponentProps } from '@/types/design-system';

interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: boolean;
  centered?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const maxWidthStyles = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = '7xl',
  padding = true,
  centered = true,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        'w-full',
        maxWidthStyles[maxWidth],
        centered && 'mx-auto',
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};

// Section Component - A container with vertical spacing
interface SectionProps extends ContainerProps {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacingStyles = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-20',
  xl: 'py-20 sm:py-24',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = 'md',
  ...containerProps
}) => {
  return (
    <section className={cn(spacingStyles[spacing], className)}>
      <Container {...containerProps}>
        {children}
      </Container>
    </section>
  );
};

// Grid Container Component
interface GridContainerProps extends BaseComponentProps {
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const gapStyles = {
  sm: 'gap-2 sm:gap-3',
  md: 'gap-4 sm:gap-6',
  lg: 'gap-6 sm:gap-8',
  xl: 'gap-8 sm:gap-10',
};

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
}) => {
  const gridClasses = [];
  
  if (cols.default) gridClasses.push(`grid-cols-${cols.default}`);
  if (cols.sm) gridClasses.push(`sm:grid-cols-${cols.sm}`);
  if (cols.md) gridClasses.push(`md:grid-cols-${cols.md}`);
  if (cols.lg) gridClasses.push(`lg:grid-cols-${cols.lg}`);
  if (cols.xl) gridClasses.push(`xl:grid-cols-${cols.xl}`);
  if (cols['2xl']) gridClasses.push(`2xl:grid-cols-${cols['2xl']}`);

  return (
    <div
      className={cn(
        'grid',
        gridClasses,
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

// Flex Container Component
interface FlexContainerProps extends BaseComponentProps {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  wrap?: boolean;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  className,
  direction = 'row',
  wrap = false,
  justify = 'start',
  align = 'stretch',
  gap = 'md',
}) => {
  const justifyStyles = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignStyles = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  };

  return (
    <div
      className={cn(
        'flex',
        `flex-${direction}`,
        wrap && 'flex-wrap',
        justifyStyles[justify],
        alignStyles[align],
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
};