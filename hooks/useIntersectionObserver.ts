import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | Document | null
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: UseIntersectionObserverProps = {}
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    triggerOnce = false
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = useRef(false)

  useEffect(() => {
    if (!ref.current || frozen.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)

        if (entry.isIntersecting && triggerOnce) {
          frozen.current = true
          observer.disconnect()
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, root, rootMargin, triggerOnce])

  return { isIntersecting, entry }
}