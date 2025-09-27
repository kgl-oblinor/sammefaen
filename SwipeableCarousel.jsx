import React, { useState, useRef, useEffect } from 'react';
import './mobile-responsive.css';

const SwipeableCarousel = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate drag distance
    const dragDistance = currentTouch - touchStart;
    const maxDrag = window.innerWidth * 0.3; // Limit drag to 30% of screen width
    const boundedDrag = Math.max(-maxDrag, Math.min(maxDrag, dragDistance));
    
    setTranslateX(-currentIndex * 100 + (boundedDrag / window.innerWidth) * 100);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > minSwipeDistance;
    const isSwipeRight = distance < -minSwipeDistance;
    
    if (isSwipeLeft && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (isSwipeRight && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    // Reset drag position
    setTranslateX(-currentIndex * 100);
    setIsSwiping(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle mouse events for desktop testing
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setTouchEnd(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    
    const currentMouse = e.clientX;
    setTouchEnd(currentMouse);
    
    const dragDistance = currentMouse - touchStart;
    const maxDrag = window.innerWidth * 0.3;
    const boundedDrag = Math.max(-maxDrag, Math.min(maxDrag, dragDistance));
    
    setTranslateX(-currentIndex * 100 + (boundedDrag / window.innerWidth) * 100);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  const handleMouseLeave = () => {
    if (isSwiping) {
      handleTouchEnd();
    }
  };

  // Update translateX when currentIndex changes
  useEffect(() => {
    if (!isSwiping) {
      setTranslateX(-currentIndex * 100);
    }
  }, [currentIndex, isSwiping]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div
        className={`carousel-wrapper ${isSwiping ? 'swiping' : ''}`}
        style={{ transform: `translateX(${translateX}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      
      {/* Carousel Dots */}
      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCarousel;