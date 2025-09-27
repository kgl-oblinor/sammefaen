import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, demoRequestSchema } from '@/lib/validations/contact';
import { submitContactForm } from '@/lib/actions/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Determine which schema to use based on form type
    const schema = body.type === 'demo' ? demoRequestSchema : contactFormSchema;
    
    // Validate the request body
    const validationResult = schema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }
    
    // Process the form submission
    const result = await submitContactForm(validationResult.data);
    
    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Form submitted successfully',
          data: result.data,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to process form submission',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// Optional: Add rate limiting headers
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}