'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '@/components/layout/LanguageSelector'

export default function Navigation() {
  const pathname = usePathname()
  const { t, ready } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const navItems = [
    { href: '/', label: mounted && ready ? t('nav.home') : 'Home' },
    { href: '/features', label: mounted && ready ? t('nav.features') : 'Features' },
    { href: '/solutions', label: mounted && ready ? t('nav.solutions') : 'Solutions' },
    { href: '/institusjonelle', label: mounted && ready ? t('nav.institusjonelle') : 'Institusjonelle' },
    { href: '/pricing', label: mounted && ready ? t('nav.pricing') : 'Pricing' },
    { href: '/contact', label: mounted && ready ? t('nav.contact') : 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <motion.nav 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white backdrop-blur-xl shadow-lg py-2 border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-md py-4'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Oblinor Equity Hub - Home">
            <motion.div 
              className="relative w-10 h-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Oblinor
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-0.5">EQUITY HUB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-gray-100 rounded-full p-1 mr-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 rounded-full transition-all duration-300"
                >
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {hoveredIndex === index && !isActive(item.href) && (
                    <motion.div
                      className="absolute inset-0 bg-gray-200/50 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span
                    className={clsx(
                      'relative z-10 font-medium text-sm transition-colors duration-200',
                      isActive(item.href)
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-primary'
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <motion.div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSelector />
              <Link
                href="/contact"
                className="relative group"
                aria-label="Get started with Apex Capital Partners"
              >
                <button className="relative px-5 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded transition-all duration-200" aria-label="Get started">
                  {mounted && ready ? t('nav.getStarted') : 'Get Started'}
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-gray-100/50 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark block rounded-full"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark block rounded-full my-1"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark block rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden mt-4"
            >
              <motion.div 
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 p-4 space-y-2"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ delay: 0.1 }}
                role="menu"
                aria-label="Mobile navigation menu"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        'block px-4 py-3 font-medium rounded-lg transition-all duration-200',
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary-dark font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4 mt-4 border-t border-gray-200/50 space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                >
                  <div className="flex items-center justify-end px-4">
                    <LanguageSelector />
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative group block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-sm opacity-30 group-active:opacity-100 transition duration-200"></div>
                    <button className="relative w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-lg transform active:scale-[0.98] transition-all duration-200" aria-label="Get started">
                      {mounted && ready ? t('nav.getStarted') : 'Get Started'}
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}