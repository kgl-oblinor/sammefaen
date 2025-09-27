// Mobile Performance Monitoring and Optimization Utilities

export class PerformanceMonitor {
  constructor(options = {}) {
    this.options = {
      enableLogging: true,
      reportThreshold: 100, // Report if any metric exceeds 100ms
      ...options
    };
    
    this.metrics = {
      fps: [],
      renderTime: [],
      interactionDelay: [],
      memoryUsage: []
    };
    
    this.observers = {};
    this.init();
  }

  init() {
    // Monitor FPS
    this.startFPSMonitoring();
    
    // Monitor interaction delays
    this.setupInteractionObserver();
    
    // Monitor memory usage
    this.startMemoryMonitoring();
    
    // Monitor page visibility
    this.setupVisibilityTracking();
    
    // Setup performance observer
    this.setupPerformanceObserver();
  }

  startFPSMonitoring() {
    let lastTime = performance.now();
    let frames = 0;
    let fps = 0;

    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        this.metrics.fps.push(fps);
        
        // Keep only last 60 measurements
        if (this.metrics.fps.length > 60) {
          this.metrics.fps.shift();
        }
        
        if (this.options.enableLogging && fps < 30) {
          console.warn(`Low FPS detected: ${fps}`);
        }
        
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
  }

  setupInteractionObserver() {
    // Track first input delay
    if ('PerformanceObserver' in window) {
      try {
        this.observers.firstInput = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const delay = entry.processingStart - entry.startTime;
            this.metrics.interactionDelay.push(delay);
            
            if (this.options.enableLogging && delay > this.options.reportThreshold) {
              console.warn(`High interaction delay: ${delay.toFixed(2)}ms`);
            }
          }
        });
        
        this.observers.firstInput.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('First Input Delay not supported');
      }
    }
  }

  startMemoryMonitoring() {
    if (performance.memory) {
      setInterval(() => {
        const memoryInfo = {
          usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1048576), // Convert to MB
          totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1048576),
          jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
        };
        
        this.metrics.memoryUsage.push(memoryInfo);
        
        // Keep only last 30 measurements
        if (this.metrics.memoryUsage.length > 30) {
          this.metrics.memoryUsage.shift();
        }
        
        // Warn if memory usage is high
        const usagePercent = (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100;
        if (this.options.enableLogging && usagePercent > 90) {
          console.warn(`High memory usage: ${usagePercent.toFixed(1)}%`);
        }
      }, 5000); // Check every 5 seconds
    }
  }

  setupVisibilityTracking() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.onPageHidden();
      } else {
        this.onPageVisible();
      }
    });
  }

  setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      // Observe paint timing
      try {
        this.observers.paint = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (this.options.enableLogging) {
              console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
            }
          }
        });
        
        this.observers.paint.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.log('Paint timing not supported');
      }

      // Observe layout shifts
      try {
        this.observers.layoutShift = new PerformanceObserver((list) => {
          let totalShift = 0;
          for (const entry of list.getEntries()) {
            totalShift += entry.value;
          }
          
          if (this.options.enableLogging && totalShift > 0.1) {
            console.warn(`Layout shift detected: ${totalShift.toFixed(3)}`);
          }
        });
        
        this.observers.layoutShift.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('Layout shift tracking not supported');
      }
    }
  }

  onPageHidden() {
    // Pause expensive operations when page is hidden
    if (this.options.enableLogging) {
      console.log('Page hidden - pausing operations');
    }
  }

  onPageVisible() {
    // Resume operations when page becomes visible
    if (this.options.enableLogging) {
      console.log('Page visible - resuming operations');
    }
  }

  getMetrics() {
    const avgFPS = this.metrics.fps.length > 0
      ? this.metrics.fps.reduce((a, b) => a + b, 0) / this.metrics.fps.length
      : 0;
    
    const avgInteractionDelay = this.metrics.interactionDelay.length > 0
      ? this.metrics.interactionDelay.reduce((a, b) => a + b, 0) / this.metrics.interactionDelay.length
      : 0;
    
    const currentMemory = this.metrics.memoryUsage[this.metrics.memoryUsage.length - 1] || {};
    
    return {
      averageFPS: Math.round(avgFPS),
      averageInteractionDelay: avgInteractionDelay.toFixed(2),
      currentMemoryUsage: currentMemory,
      metrics: this.metrics
    };
  }

  destroy() {
    // Clean up observers
    Object.values(this.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
  }
}

// Debounce utility for scroll and resize events
export function debounce(func, wait, immediate = false) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

// Throttle utility for high-frequency events
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Request Idle Callback polyfill
export const requestIdleCallback = window.requestIdleCallback || 
  function(callback) {
    const start = Date.now();
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      });
    }, 1);
  };

// Efficient scroll position tracking
export class ScrollTracker {
  constructor(callback, options = {}) {
    this.callback = callback;
    this.options = {
      throttleDelay: 100,
      ...options
    };
    
    this.ticking = false;
    this.scrollY = 0;
    this.scrollX = 0;
    
    this.boundUpdate = this.update.bind(this);
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  }

  onScroll() {
    this.scrollY = window.scrollY;
    this.scrollX = window.scrollX;
    this.requestTick();
  }

  requestTick() {
    if (!this.ticking) {
      window.requestAnimationFrame(this.boundUpdate);
      this.ticking = true;
    }
  }

  update() {
    this.callback({
      scrollY: this.scrollY,
      scrollX: this.scrollX
    });
    this.ticking = false;
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}

// Intersection Observer for lazy loading and animations
export class LazyLoader {
  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = {
      rootMargin: '50px',
      threshold: 0.1,
      onIntersect: null,
      ...options
    };
    
    this.observer = null;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadElement(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: this.options.rootMargin,
      threshold: this.options.threshold
    });

    // Start observing elements
    this.observeElements();
  }

  observeElements() {
    const elements = document.querySelectorAll(this.selector);
    elements.forEach(element => {
      this.observer.observe(element);
    });
  }

  loadElement(element) {
    if (this.options.onIntersect) {
      this.options.onIntersect(element);
    }
    
    // Default lazy loading for images
    if (element.tagName === 'IMG' && element.dataset.src) {
      element.src = element.dataset.src;
      element.classList.add('loaded');
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Network connection monitoring
export class NetworkMonitor {
  constructor(callback) {
    this.callback = callback;
    this.connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    this.init();
  }

  init() {
    if (this.connection) {
      this.updateConnectionInfo();
      this.connection.addEventListener('change', this.updateConnectionInfo.bind(this));
    }
    
    window.addEventListener('online', this.handleOnline.bind(this));
    window.addEventListener('offline', this.handleOffline.bind(this));
  }

  updateConnectionInfo() {
    const info = {
      effectiveType: this.connection.effectiveType,
      downlink: this.connection.downlink,
      rtt: this.connection.rtt,
      saveData: this.connection.saveData,
      online: navigator.onLine
    };
    
    this.callback(info);
  }

  handleOnline() {
    this.callback({ online: true });
  }

  handleOffline() {
    this.callback({ online: false });
  }

  destroy() {
    if (this.connection) {
      this.connection.removeEventListener('change', this.updateConnectionInfo);
    }
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }
}