# Oblinor Equity Hub

Modern equity trading platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

### Core
- **Framework:** Next.js 14.2.33 (App Router)
- **Language:** TypeScript 5.3.3
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 10.18.0
- **Package Manager:** npm

### Key Dependencies
- **Forms:** React Hook Form 7.48.2 + Zod 3.22.4
- **Internationalization:** i18next + react-i18next
- **Analytics:** Vercel Analytics + Speed Insights
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   ├── institusjonelle/     # Institutional investors page
│   ├── solutions/           # Solutions page
│   ├── features/            # Features page
│   ├── pricing/             # Pricing page
│   ├── contact/             # Contact page
│   ├── admin/               # Admin dashboard
│   └── api/                 # API routes
│       ├── contact/         # Contact form endpoint
│       └── admin/           # Admin API endpoints
│
├── components/              # React components (organized)
│   ├── animations/          # Animation components
│   │   ├── AnimatedButton.tsx
│   │   ├── AnimatedCard.tsx
│   │   ├── PageTransition.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── ParticleSystem.tsx
│   │   └── ScrollAnimation.tsx
│   ├── common/              # Shared UI components
│   │   ├── GradientText.tsx
│   │   └── LoadingSpinner.tsx
│   ├── forms/               # Form components
│   │   └── EmailSignup.tsx
│   ├── layout/              # Layout components
│   │   ├── Navigation.tsx   # Main navigation with theme toggle
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageSelector.tsx
│   ├── sections/            # Page sections
│   │   └── FeaturesSection.tsx
│   └── ui/                  # UI utilities
│       ├── LazyLoad.tsx
│       └── OptimizedImage.tsx
│
├── contexts/                # React contexts
│   └── ThemeContext.tsx     # Theme provider (light/dark/cyberpunk)
│
├── providers/               # App providers
│   └── I18nProvider.tsx     # i18n initialization
│
├── lib/                     # Utility functions
│   ├── actions/             # Server actions
│   ├── animations.ts        # Animation presets
│   ├── metadata.ts          # SEO metadata
│   └── validations/         # Zod schemas
│
├── public/                  # Static assets
│   ├── locales/            # Translation files
│   │   ├── en/             # English translations
│   │   └── no/             # Norwegian translations
│   └── site.webmanifest    # PWA manifest
│
└── styles/                  # Global styles
    ├── globals.css         # Main styles + CSS variables
    ├── cyberpunk.css       # Cyberpunk theme (imported but unused)
    └── apple-watch.css     # Apple Watch theme (imported but unused)
```

## 🎨 Visual Design

### Color System (CSS Variables)
```css
/* Primary Colors */
--primary: #008C9E
--primary-light: #00B4CC  
--primary-dark: #005F6B
--secondary: #00B4CC
--accent: #00DFFC

/* Backgrounds */
--background: #0a0f0f (dark mode)
--background-card: #1a1f1f
--text-primary: #ffffff
--text-secondary: #a0a0a0
```

### Themes
- **Light Mode** ✅ Implemented
- **Dark Mode** ✅ Default
- **Cyberpunk Mode** 🚧 CSS exists but not active

### Design Features
- Gradient text effects
- Particle system background
- Parallax scrolling sections
- Animated cards with hover effects
- Smooth page transitions
- Glass-morphism effects

## 📋 Features

### Current Features
1. **Multi-language Support** (Norwegian/English)
2. **Theme Switching** (Dark/Light)
3. **Institutional Investors Page** (/institusjonelle)
4. **Email Collection Forms**
5. **Contact Form with Validation**
6. **Responsive Design**
7. **SEO Optimized**
8. **Performance Monitoring** (Web Vitals)

### Pages
- `/` - Homepage with hero, features, email signup
- `/institusjonelle` - Dedicated page for institutional investors
- `/solutions` - Trading platform solutions
- `/features` - Platform features
- `/pricing` - Pricing tiers
- `/contact` - Contact form
- `/admin` - Admin dashboard (protected)

## 📧 Email Collection

### Implementation
- **Component:** `EmailSignup.tsx`
- **API Endpoint:** `/api/contact`
- **Validation:** Zod schema
- **Storage:** Currently logs to console (TODO: Add database)

### Form Types
- Newsletter signup
- Demo requests
- Contact inquiries

### Data Collected
```typescript
{
  name?: string
  email: string
  company?: string
  phone?: string
  type: 'newsletter' | 'demo' | 'contact' | 'support'
  message?: string
}
```

## 🍪 Cookies & Privacy

### Current Implementation
- **No cookies currently set** by the application
- **No tracking cookies** implemented
- **CookieConsent component removed** (was unused)

### Future Considerations
- Add cookie policy if implementing:
  - Authentication tokens
  - User preferences
  - Analytics tracking

## 🔐 Environment Variables

Required in `.env.local`:
```env
# Admin Authentication (example in .env.example)
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_secure_password

# Future: Database connection
# DATABASE_URL=

# Future: Email service
# SENDGRID_API_KEY=
```

## 🚀 Deployment

### Platforms
- **GitHub:** kgl-oblinor/sammefaen
- **Vercel:** Auto-deploys from main branch
- **Railway:** Configured (see railway.json)

### Build Command
```bash
npm run build
```

### Important Notes
1. **SSR Considerations:** Theme and i18n providers have SSR safety checks
2. **Translation Loading:** Fallback translations included for production
3. **Performance:** Lazy loading implemented for heavy components

## 🛠️ Development

### Setup
```bash
npm install
npm run dev
```

### Scripts
- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `analyze` - Bundle analyzer

## ⚠️ Known Issues & TODOs

### High Priority
1. **Email Storage:** Currently only logs - needs database integration
2. **Admin Auth:** Basic implementation - needs proper auth system
3. **Contact Form:** Needs email service integration (SendGrid/similar)

### Medium Priority
1. **Theme Persistence:** Save theme choice to localStorage
2. **Language Persistence:** Currently saves but needs testing
3. **Mobile Navigation:** Could be improved

### Low Priority
1. **Cyberpunk Theme:** CSS exists but not integrated
2. **Apple Watch Theme:** CSS exists but not integrated
3. **More Animations:** Some pages could use more motion

## 📝 Recent Changes (Sept 29, 2025)
- Added institutional investors page
- Reorganized component structure
- Removed 16 unused components
- Fixed SSR issues with providers
- Added i18n support
- Improved build performance

## 🤝 For Next Developer

### Critical Info
1. **Component Structure:** Organized by type (animations/, common/, etc.)
2. **Import Paths:** All use `@/` alias for clean imports
3. **TypeScript:** Strict mode enabled
4. **Styling:** Tailwind classes + CSS variables for theming

### Quick Start
1. Clone repo
2. Copy `.env.example` to `.env.local`
3. Run `npm install`
4. Run `npm run dev`
5. Check http://localhost:3000

### Contact Form Integration
To make contact forms work:
1. Add email service (SendGrid recommended)
2. Update `/api/contact/route.ts`
3. Add database for storage (Vercel Postgres/Supabase)

Good luck! 🚀