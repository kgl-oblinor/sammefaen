import React from 'react';
import { cn } from '@/utils/cn';
import { BaseComponentProps } from '@/types/design-system';

interface CardProps extends BaseComponentProps {
  glassMorphism?: boolean;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

const blurStyles = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
};

const paddingStyles = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    glassMorphism = false, 
    blur = 'md',
    padding = 'md',
    hover = false,
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border transition-all duration-300',
          glassMorphism ? [
            'bg-white/10 dark:bg-gray-900/10',
            'border-white/20 dark:border-gray-700/20',
            blurStyles[blur],
            'shadow-xl shadow-black/5',
          ] : [
            'bg-white dark:bg-gray-900',
            'border-gray-200 dark:border-gray-700',
            'shadow-lg',
          ],
          hover && 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer',
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  title, 
  subtitle, 
  children, 
  className 
}) => {
  return (
    <div className={cn('mb-4', className)}>
      {(title || subtitle) ? (
        <>
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </>
      ) : children}
    </div>
  );
};

interface CardContentProps extends BaseComponentProps {}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('text-gray-700 dark:text-gray-300', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps extends BaseComponentProps {
  align?: 'left' | 'center' | 'right';
}

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className, 
  align = 'right' 
}) => {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={cn(
      'mt-6 flex items-center gap-2',
      alignStyles[align],
      className
    )}>
      {children}
    </div>
  );
};