'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useEffect } from 'react'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      })
    }

    // Send to Vercel Analytics if available
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('track', metric.name, {
        value: metric.value,
        delta: metric.delta,
      })
    }

    // Custom performance monitoring
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
      rating: metric.rating,
    })

    // You can send metrics to your own analytics endpoint
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      }).catch(() => {
        // Fail silently
      })
    }
  })

  useEffect(() => {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('Long task detected:', {
                duration: entry.duration,
                startTime: entry.startTime,
                name: entry.name,
              })
            }
          }
        })
        observer.observe({ entryTypes: ['longtask'] })

        return () => observer.disconnect()
      } catch (e) {
        // Fail silently
      }
    }
  }, [])

  return null
}

// Utility function to get Core Web Vitals status
export function getWebVitalsScore(value: number, metric: string): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  }

  const threshold = thresholds[metric as keyof typeof thresholds]
  if (!threshold) return 'good'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}