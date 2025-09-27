'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(60)
  const [animationTime, setAnimationTime] = useState(0)

  useEffect(() => {
    let lastTime = performance.now()
    let frames = 0
    let animationStart: number | null = null

    const measureFPS = () => {
      const currentTime = performance.now()
      frames++

      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frames * 1000) / (currentTime - lastTime)))
        frames = 0
        lastTime = currentTime
      }

      requestAnimationFrame(measureFPS)
    }

    requestAnimationFrame(measureFPS)

    // Measure animation performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure' && entry.name.includes('animation')) {
          setAnimationTime(Math.round(entry.duration))
        }
      }
    })

    observer.observe({ entryTypes: ['measure'] })

    return () => {
      observer.disconnect()
    }
  }, [])

  const fpsColor = fps >= 55 ? 'text-green-500' : fps >= 30 ? 'text-yellow-500' : 'text-red-500'

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-sm space-y-2">
        <div>
          FPS: <span className={fpsColor}>{fps}</span>
        </div>
        <div>
          Animation Time: <span className="text-blue-400">{animationTime}ms</span>
        </div>
      </div>
    </motion.div>
  )
}