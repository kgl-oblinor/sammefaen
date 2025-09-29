# Claude AI Assistant Guide - Oblinor Equity Hub

## Project Overview
This is the Oblinor Equity Hub project - a Next.js 14 application for equity investment platform with blockchain integration.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom design system
- **Animations**: Framer Motion
- **Internationalization**: i18next (Norwegian/English)
- **Type Safety**: TypeScript
- **Validation**: Zod
- **Analytics**: Vercel Analytics + Speed Insights

## Deployment Infrastructure

### Current Deployment Setup
The project is configured for **BOTH** Vercel and Railway deployment:

#### Vercel (Production)
- **Status**: Already connected and configured
- **Packages installed**: `@vercel/analytics`, `@vercel/speed-insights`
- **Used for**: Main production deployment
- **Auto-deploys**: From GitHub main branch
- **Features**: Edge deployment, preview deployments for PRs

#### Railway (Staging/Development)
- **Status**: Configured via `railway.json` and `nixpacks.toml`
- **Used for**: Testing, staging, future backend services
- **Config files**: 
  - `/railway.json` - deployment configuration
  - `/nixpacks.toml` - build configuration
- **Features**: Can add databases, Redis, backend services

### Environment Variables Required
```env
ADMIN_PASSWORD=your-secure-password
CONTACT_EMAIL=admin@oblinor.com
ADMIN_EMAILS=admin1@oblinor.com,admin2@oblinor.com
```

## Backend Functionality

### API Routes (`/app/api/`)
1. **Contact Form** (`/contact/route.ts`)
   - Handles form submissions
   - Email sending (placeholder - needs integration)

2. **Admin Auth** (`/admin/auth/route.ts`)
   - Simple password-based authentication
   - HTTP-only cookie sessions

3. **Translations** (`/admin/translations/route.ts`)
   - Manage i18n translations
   - Currently in-memory (needs database)

4. **Sitemap** (`/server-sitemap.xml/route.ts`)
   - Dynamic XML sitemap generation

### Server Actions
- Contact form handling in `/lib/actions/contact.ts`

### Current Limitations
- No database integration
- Email sending not implemented (only placeholders)
- No user authentication system
- Translations not persisted

## Key Files to Know
- `/app/globals.css` - Design system implementation
- `/lib/i18n.ts` - Internationalization setup
- `/contexts/ThemeContext.tsx` - Theme management
- `/components/ui/` - Reusable UI components

## Common Commands
```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Lint
npm run lint
```

## Recent Fixes (December 2024)
- Fixed critical i18n initialization error
- Fixed ThemeContext hydration error
- Implemented comprehensive UX/UI design system
- All pages harmonized with consistent styling

## Git Repository
- **GitHub**: https://github.com/kgl-oblinor/sammefaen.git
- **Auto-deploy**: Both Vercel and Railway deploy from this repo

## Notes for Future Development
1. Database integration needed for:
   - Persistent translation storage
   - Contact form submissions
   - User management

2. Email service integration options:
   - SendGrid
   - AWS SES
   - Resend

3. The project is primarily frontend-focused but has basic backend scaffolding ready for expansion.