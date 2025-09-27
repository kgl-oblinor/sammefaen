'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface LazyLoadProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  placeholder?: React.ReactNode
  className?: string
}

export default function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  placeholder = <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-full w-full" />,
  className 
}: LazyLoadProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold,
    rootMargin,
    triggerOnce: true
  })

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isIntersecting, isLoaded])

  return (
    <div ref={ref} className={className}>
      {isLoaded ? children : placeholder}
    </div>
  )
}