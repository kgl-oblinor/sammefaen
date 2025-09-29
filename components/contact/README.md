# Contact Form Components

A complete contact form and demo request system built with React Hook Form, Zod validation, and Framer Motion animations.

## Features

- ✅ Two form types: General contact and demo request
- ✅ Full form validation with Zod schema
- ✅ Accessible form inputs with ARIA attributes
- ✅ Loading states and smooth animations
- ✅ Success/error feedback
- ✅ Thank you modal and page
- ✅ Server-side form handling
- ✅ Email integration ready

## Components

### ContactModal

The main modal component containing the contact form.

```tsx
import { ContactModal } from '@/components/contact';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Contact Form</button>
      
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formType="contact" // or "demo"
        onSuccess={(data) => console.log('Form submitted:', data)}
      />
    </>
  );
}
```

### ContactButton

A pre-built button that handles modal state automatically.

```tsx
import { ContactButton } from '@/components/contact';

// Basic usage
<ContactButton />

// Demo request button
<ContactButton formType="demo" />

// Custom styling
<ContactButton 
  variant="secondary" 
  size="lg" 
  className="custom-class"
>
  Get in Touch
</ContactButton>
```

### FloatingContactButton

A floating action button for easy access to contact forms.

```tsx
import { FloatingContactButton } from '@/components/contact';

// Add to your layout
<FloatingContactButton formType="contact" />
```

### ThankYouModal

Displays after successful form submission.

```tsx
import { ThankYouModal } from '@/components/contact';

<ThankYouModal
  isOpen={showThankYou}
  onClose={() => setShowThankYou(false)}
  formType="demo"
  userName="John Doe"
  userEmail="john@example.com"
/>
```

## Form Fields

### Contact Form
- Name (required)
- Email (required)
- Company (optional)
- Message (required)

### Demo Request Form
- Name (required)
- Email (required)
- Company (required)
- Job Title (required)
- Company Size (required)
- Phone Number (optional)
- Preferred Time Slot (required)
- Message (required)

## Email Integration

To complete the email integration, update the server action in `/lib/actions/contact.ts`:

```typescript
// Example with SendGrid
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In submitContactForm function
const msg = {
  to: process.env.CONTACT_EMAIL,
  from: 'noreply@yourdomain.com',
  subject: `New ${data.type} form submission`,
  html: generateEmailTemplate(data),
};

await sgMail.send(msg);
```

## Environment Variables

Add these to your `.env.local`:

```
CONTACT_EMAIL=admin@yourdomain.com
ADMIN_EMAILS=admin1@yourdomain.com,admin2@yourdomain.com
SENDGRID_API_KEY=your_api_key
```

## Accessibility Features

- Proper ARIA labels and descriptions
- Form validation with clear error messages
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Customization

### Styling

All components use Tailwind CSS with dark mode support. You can customize styles by:

1. Passing custom `className` props
2. Modifying the component files directly
3. Using CSS variables for theme colors

### Validation Rules

Edit `/lib/validations/contact.ts` to customize validation:

```typescript
export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  // Add custom validation
  email: z.string().email().refine(
    (email) => !email.endsWith('example.com'),
    'Please use a real email address'
  ),
  // ...
});
```

## Usage in Pages

### Contact Page

```tsx
'use client';

import { ContactButton } from '@/components/contact';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="mb-8">We'd love to hear from you!</p>
      
      <div className="flex gap-4">
        <ContactButton />
        <ContactButton formType="demo" variant="outline" />
      </div>
    </div>
  );
}
```

### Adding to Navigation

```tsx
import { ContactButton } from '@/components/contact';

export function Navigation() {
  return (
    <nav className="flex items-center gap-8">
      <Link href="/about">About</Link>
      <Link href="/pricing">Pricing</Link>
      <ContactButton size="sm" variant="primary" />
    </nav>
  );
}
```

## Testing

To test the contact forms:

1. Click the contact/demo button
2. Fill in the form with test data
3. Submit and verify success state
4. Check console logs for form data
5. Test validation by leaving fields empty
6. Test accessibility with keyboard navigation