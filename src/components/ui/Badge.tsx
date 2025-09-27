import React from 'react';
import { cn } from '@/utils/cn';
import { Variant, Size } from '@/types/design-system';

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant | 'info' | 'warning';
  size?: Extract<Size, 'xs' | 'sm' | 'md'>;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400',
  secondary: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/20 dark:text-secondary-400',
  ghost: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
};

const sizeStyles = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  dot = false,
  removable = false,
  onRemove,
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-current" />
      )}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 -mr-0.5 inline-flex items-center justify-center hover:opacity-75 focus:outline-none"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

// Tag Component (similar to Badge but with different styling)
interface TagProps {
  children: React.ReactNode;
  color?: string;
  size?: Extract<Size, 'xs' | 'sm' | 'md'>;
  outlined?: boolean;
  rounded?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  color = 'gray',
  size = 'sm',
  outlined = false,
  rounded = false,
  removable = false,
  onRemove,
  className,
}) => {
  const baseColor = color === 'gray' ? 'gray' : color;
  
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium transition-all',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined ? [
          'border',
          `border-${baseColor}-300 dark:border-${baseColor}-700`,
          `text-${baseColor}-700 dark:text-${baseColor}-300`,
          'bg-transparent',
        ] : [
          `bg-${baseColor}-100 dark:bg-${baseColor}-900/20`,
          `text-${baseColor}-800 dark:text-${baseColor}-300`,
        ],
        sizeStyles[size],
        className
      )}
      style={{
        backgroundColor: outlined ? undefined : `var(--color-${baseColor}-100)`,
        color: `var(--color-${baseColor}-${outlined ? '700' : '800'})`,
        borderColor: outlined ? `var(--color-${baseColor}-300)` : undefined,
      }}
    >
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 -mr-0.5 inline-flex items-center justify-center hover:opacity-75 focus:outline-none"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};