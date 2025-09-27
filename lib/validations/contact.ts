import { z } from 'zod';

// Base contact form schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(100, { message: 'Company name must be less than 100 characters' })
    .optional(),
  
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
  
  type: z.enum(['contact', 'demo'], {
    required_error: 'Please select a contact type',
  }).default('contact'),
});

// Demo request specific schema
export const demoRequestSchema = contactFormSchema.extend({
  company: z
    .string()
    .min(2, { message: 'Company name is required for demo requests' })
    .max(100, { message: 'Company name must be less than 100 characters' }),
  
  jobTitle: z
    .string()
    .min(2, { message: 'Job title is required for demo requests' })
    .max(100, { message: 'Job title must be less than 100 characters' }),
  
  companySize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+'], {
    required_error: 'Please select your company size',
  }),
  
  preferredTimeSlot: z
    .string()
    .min(1, { message: 'Please select a preferred time slot' }),
  
  phoneNumber: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: 'Please enter a valid phone number',
    })
    .optional(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;

// Union type for both forms
export type FormData = ContactFormData | DemoRequestFormData;

// Type guard to check if form data is for demo request
export const isDemoRequest = (data: FormData): data is DemoRequestFormData => {
  return data.type === 'demo';
};