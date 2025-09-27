import React from 'react';
import { cn } from '@/utils/cn';
import { BaseComponentProps, Size } from '@/types/design-system';

interface InputProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<Size, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-4 py-3 text-lg',
  xl: 'px-6 py-4 text-xl',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    error,
    hint,
    size = 'md',
    leftIcon,
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    const inputId = props.id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              'block w-full rounded-lg border',
              'bg-white dark:bg-gray-900',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              error ? [
                'border-red-500 dark:border-red-400',
                'focus:border-red-500 focus:ring-red-500',
                'text-red-900 dark:text-red-400',
                'placeholder-red-400'
              ] : [
                'border-gray-300 dark:border-gray-600',
                'focus:border-primary-500 focus:ring-primary-500',
                'text-gray-900 dark:text-white',
                'placeholder-gray-400 dark:placeholder-gray-500'
              ],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              disabled && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-60',
              sizeStyles[size],
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || hint) && (
          <p className={cn(
            'mt-1 text-sm',
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'
          )}>
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';