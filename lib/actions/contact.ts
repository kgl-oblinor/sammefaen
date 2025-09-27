'use server';

import { ContactFormData, DemoRequestFormData, isDemoRequest } from '@/lib/validations/contact';

interface SubmitResult {
  success: boolean;
  error?: string;
  data?: any;
}

export async function submitContactForm(
  data: ContactFormData | DemoRequestFormData
): Promise<SubmitResult> {
  try {
    // Here we'll integrate with your email service
    // For now, this is a placeholder that you can replace with actual email sending logic
    
    // Validate the data on the server side as well
    const formData = {
      ...data,
      submittedAt: new Date().toISOString(),
      ip: 'server-side-ip', // You can get actual IP from headers in production
    };

    // Determine the email template based on form type
    const emailTemplate = isDemoRequest(data) ? 'demo-request' : 'contact-form';
    
    // Email configuration
    const emailConfig = {
      to: process.env.CONTACT_EMAIL || 'admin@oblinor.com',
      from: data.email,
      subject: isDemoRequest(data) 
        ? `Demo Request from ${data.name} at ${(data as DemoRequestFormData).company}`
        : `Contact Form Submission from ${data.name}`,
      template: emailTemplate,
      data: formData,
    };

    // TODO: Replace this with actual email sending logic
    // Examples:
    // - SendGrid: await sendgrid.send(emailConfig)
    // - AWS SES: await ses.sendEmail(emailConfig).promise()
    // - Resend: await resend.send(emailConfig)
    
    // For now, we'll simulate a successful submission
    console.log('Email would be sent with config:', emailConfig);

    // Store in database if needed
    // await db.contactSubmissions.create({ data: formData });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      data: {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
      },
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    };
  }
}

// Helper function to send notification emails to admin
export async function sendAdminNotification(
  data: ContactFormData | DemoRequestFormData
): Promise<void> {
  // This function can be used to send immediate notifications to admin
  // when a new form submission is received
  
  const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['admin@oblinor.com'];
  
  // TODO: Implement actual email sending
  console.log('Admin notification would be sent to:', adminEmails);
}

// Helper function to send confirmation email to user
export async function sendUserConfirmation(
  data: ContactFormData | DemoRequestFormData
): Promise<void> {
  // Send a confirmation email to the user
  
  const confirmationEmail = {
    to: data.email,
    from: 'noreply@oblinor.com',
    subject: 'Thank you for contacting Oblinor',
    template: 'user-confirmation',
    data: {
      name: data.name,
      isDemo: isDemoRequest(data),
    },
  };
  
  // TODO: Implement actual email sending
  console.log('Confirmation email would be sent:', confirmationEmail);
}