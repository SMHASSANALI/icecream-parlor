// components/LenisProvider.js
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothness (0 - 1)
      smooth: true,
      direction: 'vertical',
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Optional: Reset scroll to top on route change
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}
