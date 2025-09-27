// Touch gesture utilities for mobile interactions

export class TouchGestureHandler {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      threshold: 50, // Minimum distance for swipe
      allowedTime: 300, // Maximum time for swipe
      onSwipeLeft: null,
      onSwipeRight: null,
      onSwipeUp: null,
      onSwipeDown: null,
      onTap: null,
      onDoubleTap: null,
      onLongPress: null,
      onPinchZoom: null,
      ...options
    };

    this.touchStartX = null;
    this.touchStartY = null;
    this.touchEndX = null;
    this.touchEndY = null;
    this.touchStartTime = null;
    this.lastTap = 0;
    this.longPressTimer = null;
    this.pinchStartDistance = null;

    this.init();
  }

  init() {
    // Touch events
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
    this.element.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    this.element.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    
    // Mouse events for desktop testing
    this.element.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.element.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.element.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  handleTouchStart(e) {
    const touch = e.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.touchStartTime = Date.now();

    // Handle pinch zoom start
    if (e.touches.length === 2) {
      this.pinchStartDistance = this.getPinchDistance(e.touches);
    }

    // Start long press timer
    if (this.options.onLongPress) {
      this.longPressTimer = setTimeout(() => {
        this.options.onLongPress({
          x: this.touchStartX,
          y: this.touchStartY
        });
      }, 500);
    }
  }

  handleTouchMove(e) {
    // Cancel long press on move
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }

    // Handle pinch zoom
    if (e.touches.length === 2 && this.pinchStartDistance && this.options.onPinchZoom) {
      const currentDistance = this.getPinchDistance(e.touches);
      const scale = currentDistance / this.pinchStartDistance;
      
      this.options.onPinchZoom({
        scale,
        centerX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        centerY: (e.touches[0].clientY + e.touches[1].clientY) / 2
      });
      
      e.preventDefault();
    }
  }

  handleTouchEnd(e) {
    // Clear long press timer
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }

    // Reset pinch zoom
    this.pinchStartDistance = null;

    if (e.changedTouches.length === 0) return;

    const touch = e.changedTouches[0];
    this.touchEndX = touch.clientX;
    this.touchEndY = touch.clientY;

    this.handleGesture();
  }

  handleMouseDown(e) {
    this.touchStartX = e.clientX;
    this.touchStartY = e.clientY;
    this.touchStartTime = Date.now();
    this.isMouseDown = true;
  }

  handleMouseMove(e) {
    if (!this.isMouseDown) return;
    // Mouse move handling if needed
  }

  handleMouseUp(e) {
    if (!this.isMouseDown) return;
    
    this.touchEndX = e.clientX;
    this.touchEndY = e.clientY;
    this.isMouseDown = false;
    
    this.handleGesture();
  }

  handleGesture() {
    const elapsedTime = Date.now() - this.touchStartTime;
    const distanceX = this.touchEndX - this.touchStartX;
    const distanceY = this.touchEndY - this.touchStartY;
    const absDistanceX = Math.abs(distanceX);
    const absDistanceY = Math.abs(distanceY);

    // Check for tap
    if (absDistanceX < 10 && absDistanceY < 10 && elapsedTime < 200) {
      const now = Date.now();
      
      // Check for double tap
      if (now - this.lastTap < 300 && this.options.onDoubleTap) {
        this.options.onDoubleTap({
          x: this.touchEndX,
          y: this.touchEndY
        });
        this.lastTap = 0;
      } else {
        // Single tap
        if (this.options.onTap) {
          this.options.onTap({
            x: this.touchEndX,
            y: this.touchEndY
          });
        }
        this.lastTap = now;
      }
      return;
    }

    // Check for swipe
    if (elapsedTime <= this.options.allowedTime) {
      if (absDistanceX >= this.options.threshold && absDistanceX > absDistanceY) {
        // Horizontal swipe
        if (distanceX > 0 && this.options.onSwipeRight) {
          this.options.onSwipeRight({ distance: absDistanceX, duration: elapsedTime });
        } else if (distanceX < 0 && this.options.onSwipeLeft) {
          this.options.onSwipeLeft({ distance: absDistanceX, duration: elapsedTime });
        }
      } else if (absDistanceY >= this.options.threshold && absDistanceY > absDistanceX) {
        // Vertical swipe
        if (distanceY > 0 && this.options.onSwipeDown) {
          this.options.onSwipeDown({ distance: absDistanceY, duration: elapsedTime });
        } else if (distanceY < 0 && this.options.onSwipeUp) {
          this.options.onSwipeUp({ distance: absDistanceY, duration: elapsedTime });
        }
      }
    }
  }

  getPinchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  destroy() {
    this.element.removeEventListener('touchstart', this.handleTouchStart);
    this.element.removeEventListener('touchmove', this.handleTouchMove);
    this.element.removeEventListener('touchend', this.handleTouchEnd);
    this.element.removeEventListener('mousedown', this.handleMouseDown);
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseup', this.handleMouseUp);
    
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
    }
  }
}

// Pull-to-refresh handler
export class PullToRefreshHandler {
  constructor(options = {}) {
    this.options = {
      threshold: 80,
      maxPull: 150,
      onRefresh: null,
      ...options
    };

    this.startY = 0;
    this.currentY = 0;
    this.pulling = false;
    this.refreshing = false;

    this.init();
  }

  init() {
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  handleTouchStart(e) {
    if (window.scrollY === 0) {
      this.startY = e.touches[0].pageY;
      this.pulling = true;
    }
  }

  handleTouchMove(e) {
    if (!this.pulling || this.refreshing) return;

    this.currentY = e.touches[0].pageY;
    const pullDistance = Math.min(this.currentY - this.startY, this.options.maxPull);

    if (pullDistance > 0) {
      e.preventDefault();
      
      // Update UI to show pull progress
      const pullIndicator = document.querySelector('.pull-to-refresh');
      if (pullIndicator) {
        pullIndicator.classList.add('visible');
        pullIndicator.style.transform = `translateX(-50%) translateY(${pullDistance}px) scale(${Math.min(pullDistance / this.options.threshold, 1)})`;
        pullIndicator.style.opacity = Math.min(pullDistance / this.options.threshold, 1);
      }
    }
  }

  handleTouchEnd() {
    if (!this.pulling || this.refreshing) return;

    const pullDistance = this.currentY - this.startY;
    
    if (pullDistance >= this.options.threshold && this.options.onRefresh) {
      this.refreshing = true;
      
      // Trigger refresh
      this.options.onRefresh(() => {
        this.refreshing = false;
        const pullIndicator = document.querySelector('.pull-to-refresh');
        if (pullIndicator) {
          pullIndicator.classList.remove('visible');
        }
      });
    } else {
      // Reset pull indicator
      const pullIndicator = document.querySelector('.pull-to-refresh');
      if (pullIndicator) {
        pullIndicator.classList.remove('visible');
      }
    }

    this.pulling = false;
    this.startY = 0;
    this.currentY = 0;
  }

  destroy() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }
}

// Utility function to detect touch device
export const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
};

// Utility function for haptic feedback (if supported)
export const triggerHapticFeedback = (type = 'light') => {
  if ('vibrate' in navigator) {
    switch (type) {
      case 'light':
        navigator.vibrate(10);
        break;
      case 'medium':
        navigator.vibrate(20);
        break;
      case 'heavy':
        navigator.vibrate(30);
        break;
      case 'success':
        navigator.vibrate([10, 50, 10]);
        break;
      case 'error':
        navigator.vibrate([20, 100, 20]);
        break;
      default:
        navigator.vibrate(10);
    }
  }
};