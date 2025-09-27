# OBLINOR EQUITY HUB - Dark/Light Mode Implementation

A React application with comprehensive dark/light mode support, following the design patterns from the original HTML file.

## Features Implemented

### 1. ThemeProvider with React Context
- Located in `/src/contexts/ThemeContext.js`
- Provides centralized theme management
- Exposes `useTheme` hook for easy theme access

### 2. Theme Toggle Component
- Located in `/src/components/ThemeToggle.js`
- Smooth animated toggle switch
- Icons change based on current theme (moon/sun)

### 3. Color Schemes
- Defined in `/src/styles/globals.css`
- CSS variables for both dark and light themes
- Comprehensive color system including:
  - Background colors
  - Text colors
  - Border colors
  - Component-specific colors
  - Hover states
  - Shadows and effects

### 4. CSS Variables Structure
```css
/* Base colors (theme-independent) */
--primary: #008C9E;
--secondary: #00B4CC;
--accent: #00DFFC;

/* Theme-specific variables */
--bg-primary: /* Background colors */
--text-primary: /* Text colors */
--border-color: /* Border colors */
/* ... and many more */
```

### 5. Smooth Transitions
- All theme-related properties have smooth transitions
- Global transition rule for seamless switching
- Specific transitions for interactive elements

### 6. LocalStorage Persistence
- Theme preference saved to localStorage
- Persists across browser sessions
- Key: 'theme'

### 7. System Preference Detection
- Automatically detects system theme preference
- Uses `prefers-color-scheme` media query
- Custom hook: `useSystemTheme` for reusable logic
- Falls back to system preference if no saved preference

### 8. Component Updates
All components support theming through CSS variables:
- Navigation component
- Background patterns
- Showcase sections
- Cards and buttons
- Forms and inputs

## Project Structure
```
/src
  /components
    - BackgroundPattern.js
    - Navigation.js
    - ShowcaseSection.js
    - ThemeToggle.js
  /contexts
    - ThemeContext.js
  /hooks
    - useSystemTheme.js
  /styles
    - globals.css
    - App.css
    - BackgroundPattern.css
    - Navigation.css
    - ShowcaseSection.css
    - ThemeToggle.css
  - App.js
  - index.js
```

## Usage

### Basic Usage
```jsx
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Running the Application
```bash
npm install
npm start
```

## Design Decisions

1. **CSS Variables**: Used for maximum flexibility and performance
2. **Context API**: Provides global theme state without prop drilling
3. **System Detection**: Respects user's OS-level preferences
4. **Smooth Transitions**: Enhanced user experience when switching themes
5. **Semantic Colors**: Named by purpose rather than appearance

## Browser Support
- Modern browsers with CSS variables support
- Graceful fallbacks for older browsers
- Tested on Chrome, Firefox, Safari, Edge