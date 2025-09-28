import { z } from 'zod';

// Simple email collection schema
export const emailSignupSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  
  message: z
    .string()
    .min(1)
    .max(1000),
  
  type: z.enum(['newsletter', 'demo', 'contact'], {
    required_error: 'Please select a type',
  }).default('contact'),
});

// For backwards compatibility
export const contactFormSchema = emailSignupSchema;
export const demoRequestSchema = emailSignupSchema;

// Type exports
export type EmailSignupData = z.infer<typeof emailSignupSchema>;
export type ContactFormData = EmailSignupData;
export type DemoRequestFormData = EmailSignupData;

// Union type for both forms
export type FormData = ContactFormData | DemoRequestFormData;

// Type guard to check if form data is for demo request
export const isDemoRequest = (data: FormData): data is DemoRequestFormData => {
  return data.type === 'demo';
};