import React, { useState, useEffect, useRef } from 'react';
import './mobile-responsive.css';

const LazyImage = ({ 
  src, 
  alt, 
  srcSet, 
  sizes, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%23f3f4f6"/%3E%3C/svg%3E',
  onLoad,
  onError 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageClass, setImageClass] = useState('lazy-image');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && src) {
      // Create a new image to preload
      const img = new Image();
      
      if (srcSet) {
        img.srcset = srcSet;
      }
      
      img.src = src;
      
      img.onload = () => {
        setImageSrc(src);
        setImageClass('lazy-image loaded');
        if (onLoad) onLoad();
      };
      
      img.onerror = () => {
        setImageClass('lazy-image error');
        if (onError) onError();
      };
    }
  }, [isIntersecting, src, srcSet, onLoad, onError]);

  return (
    <picture className="responsive-picture">
      {/* WebP format for modern browsers */}
      {srcSet && (
        <source
          type="image/webp"
          srcSet={srcSet.replace(/\.(jpg|jpeg|png)/g, '.webp')}
          sizes={sizes}
        />
      )}
      
      {/* Original format fallback */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        srcSet={isIntersecting ? srcSet : undefined}
        sizes={sizes}
        className={`responsive-image ${imageClass} ${className}`}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default LazyImage;