import React from 'react';
import { 
  useForm as useHookForm, 
  UseFormReturn, 
  FieldValues,
  UseFormProps,
  FormProvider,
  useFormContext,
  Controller,
  ControllerProps,
  FieldPath,
  FieldPathValue
} from 'react-hook-form';
import { cn } from '@/utils/cn';
import { Input } from './Input';

// Form Hook
export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props?: UseFormProps<TFieldValues>
): UseFormReturn<TFieldValues> {
  return useHookForm<TFieldValues>(props);
}

// Form Provider Component
interface FormProps<TFieldValues extends FieldValues = FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function Form<TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: FormProps<TFieldValues>) {
  return (
    <FormProvider {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className={cn('space-y-6', className)}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}

// Form Field Component
interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  children: (field: {
    field: {
      onChange: (value: FieldPathValue<TFieldValues, TName>) => void;
      onBlur: () => void;
      value: FieldPathValue<TFieldValues, TName>;
      name: TName;
      ref: React.Ref<any>;
    };
    fieldState: {
      error?: {
        message?: string;
      };
    };
  }) => React.ReactElement;
}

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) {
  const form = useFormContext<TFieldValues>();
  
  return (
    <Controller
      control={form.control}
      render={({ field, fieldState }) => children({ field, fieldState })}
      {...props}
    />
  );
}

// Form Input Component (combines FormField with Input)
interface FormInputProps extends React.ComponentProps<typeof Input> {
  name: string;
  label?: string;
  rules?: any;
}

export const FormInput: React.FC<FormInputProps> = ({ 
  name, 
  label,
  rules,
  ...inputProps 
}) => {
  return (
    <FormField
      name={name}
      rules={rules}
    >
      {({ field, fieldState }) => (
        <Input
          {...field}
          {...inputProps}
          label={label}
          error={fieldState.error?.message}
        />
      )}
    </FormField>
  );
};

// Form Section Component
interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  className
}) => {
  return (
    <div className={cn('space-y-4', className)}>
      {(title || description) && (
        <div>
          {title && (
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

// Form Actions Component
interface FormActionsProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const FormActions: React.FC<FormActionsProps> = ({
  children,
  align = 'right',
  className
}) => {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={cn(
      'flex items-center gap-3 pt-4',
      alignStyles[align],
      className
    )}>
      {children}
    </div>
  );
};