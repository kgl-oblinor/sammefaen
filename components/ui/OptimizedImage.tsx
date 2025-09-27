import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  containerClassName?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  quality?: number
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  containerClassName,
  placeholder = 'blur',
  blurDataURL,
  quality = 75,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setLoading(false)
    setHasError(true)
    onError?.()
  }

  // Default blur placeholder if none provided
  const defaultBlur = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MjVFNzI4RjYwNTExRTk5QzlCRUM1QjU4QzBGQUY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MjVFNzI5RjYwNTExRTk5QzlCRUM1QjU4QzBGQUY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcyNUU3MjZGNjA1MTFFOUM5QkVDNUI1OEMwRkFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzI1RTcyN0Y2MDUxMUU5QzlCRUM1QjU4QzBGQUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAAQABAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAAI/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCywAH/2Q=='

  if (hasError) {
    return (
      <div className={cn('bg-gray-200 dark:bg-gray-800 flex items-center justify-center', containerClassName)}>
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }

  if (fill) {
    return (
      <div className={cn('relative', containerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            'duration-700 ease-in-out',
            isLoading ? 'scale-105 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0',
            className
          )}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlur}
          quality={quality}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(
        'duration-700 ease-in-out',
        isLoading ? 'scale-105 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0',
        className
      )}
      placeholder={placeholder}
      blurDataURL={blurDataURL || defaultBlur}
      quality={quality}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}