"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Esperar a que Lenis esté disponible
    const initLenis = () => {
      // @ts-ignore - Lenis is loaded from CDN
      if (typeof window !== 'undefined' && window.Lenis) {
        // @ts-ignore
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return lenis
      }
      return null
    }

    const lenis = initLenis()

    return () => {
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return null
}
