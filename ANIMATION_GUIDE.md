# Framer Motion Animation Implementation Guide

This document outlines all the animations and interactions implemented in the Oblinor Equity Hub project using Framer Motion.

## Components Created

### 1. Page Transitions (`/components/PageTransition.tsx`)
- Smooth fade and slide transitions between routes
- Consistent entry/exit animations for page changes

### 2. Particle System (`/components/ParticleSystem.tsx`)
- Floating background particles with random movements
- Adds visual interest without impacting performance
- Fixed positioning to create depth

### 3. Gradient Text (`/components/GradientText.tsx`)
- Animated gradient text that shifts colors continuously
- Customizable gradient colors via className prop
- Smooth color transitions using Framer Motion

### 4. Animated Card (`/components/AnimatedCard.tsx`)
- Cards with hover effects and entrance animations
- Gradient overlay on hover
- Y-axis translation for depth effect

### 5. Scroll Animation (`/components/ScrollAnimation.tsx`)
- Multiple animation types: fadeIn, fadeInUp, fadeInScale, slideLeft, slideRight
- Triggers animations when elements enter viewport
- Customizable delay and duration

### 6. Animated Button (`/components/AnimatedButton.tsx`)
- Scale animations on hover and tap
- Spring physics for natural feel
- Supports primary, secondary, and ghost variants

### 7. Parallax Section (`/components/ParallaxSection.tsx`)
- Creates depth with parallax scrolling effects
- Background image support
- Opacity changes based on scroll position

### 8. Animated Input (`/components/AnimatedInput.tsx`)
- Focus animations with scale effects
- Error state animations
- Animated labels and borders

### 9. Loading Spinner (`/components/LoadingSpinner.tsx`)
- Smooth rotation animation
- Multiple sizes: small, medium, large
- Customizable colors

### 10. Animated Form Example (`/components/AnimatedFormExample.tsx`)
- Complete form with staggered animations
- Submit success animations
- Loading states with spinner

## Animation Utilities (`/lib/animations.ts`)

### Variants
- `pageVariants`: Page transition animations
- `staggerContainer` & `staggerItem`: Staggered children animations
- `fadeIn`, `fadeInUp`, `fadeInScale`: Entrance animations
- `slideInFromLeft`, `slideInFromRight`: Slide animations
- `floatingAnimation`: Continuous floating effect
- `gradientAnimation`: Color gradient shifts

### Hover Effects
- `scaleOnHover`: Simple scale on hover
- `cardHover`: Card lift effect with y-axis translation

## Performance Optimizations

### 1. Optimized Animations (`/components/OptimizedAnimations.tsx`)
- LazyMotion for code splitting
- Memoized components to prevent re-renders
- Hardware acceleration with CSS transforms
- will-change property for optimized rendering

### 2. Reduced Motion Support (`/hooks/useReducedMotion.ts`)
- Respects user's motion preferences
- Accessible animations that can be disabled

### 3. Performance Monitor (`/components/PerformanceMonitor.tsx`)
- Real-time FPS monitoring
- Animation timing measurements
- Visual performance indicators

## Implementation Examples

### Updated Pages
1. **Home Page** (`/app/page.tsx`)
   - Page transitions
   - Gradient text animations
   - Animated cards with hover effects
   - Parallax sections
   - Animated buttons

2. **Features Page** (`/app/features/page.tsx`)
   - Scroll-triggered animations
   - Staggered feature cards
   - Icon animations with spring physics
   - Animated CTA section

3. **Loading Page** (`/app/loading.tsx`)
   - Custom loading spinner
   - Fade animations
   - Pulsating text

### Layout Updates
- Added particle system to root layout
- Global animation provider setup

## Best Practices Implemented

1. **Performance**
   - Use `transform` and `opacity` for animations (GPU accelerated)
   - Implement `will-change` for elements that will animate
   - Use `LazyMotion` for code splitting
   - Memoize components when appropriate

2. **Accessibility**
   - Respect `prefers-reduced-motion` setting
   - Provide motion-free alternatives
   - Ensure animations don't interfere with content

3. **User Experience**
   - Keep animations subtle and purposeful
   - Use consistent timing and easing functions
   - Implement loading states for async operations
   - Add micro-interactions for better feedback

## Usage Tips

1. **Adding Animations to New Components**
   ```tsx
   import { motion } from 'framer-motion'
   import { fadeInUp } from '@/lib/animations'
   
   <motion.div variants={fadeInUp} initial="initial" animate="animate">
     Your content here
   </motion.div>
   ```

2. **Scroll Animations**
   ```tsx
   import ScrollAnimation from '@/components/ScrollAnimation'
   
   <ScrollAnimation animation="fadeInUp" delay={0.2}>
     Your content here
   </ScrollAnimation>
   ```

3. **Performance Optimization**
   ```tsx
   import { AnimationProvider } from '@/components/OptimizedAnimations'
   
   <AnimationProvider>
     Your animated components
   </AnimationProvider>
   ```

## Monitoring Performance

To ensure animations run smoothly:
1. Keep FPS above 55 for smooth animations
2. Monitor animation duration - aim for under 16ms per frame
3. Use Chrome DevTools Performance tab to profile
4. Test on lower-end devices

## Future Enhancements

1. Add gesture-based animations for mobile
2. Implement 3D transforms for advanced effects
3. Create animation presets for consistency
4. Add animation timeline controls for complex sequences