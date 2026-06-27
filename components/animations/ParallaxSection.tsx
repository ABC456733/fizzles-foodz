'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
}

export default function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return
      gsap.to(ref.current, {
        y: window.innerHeight * speed,
        scrollTrigger: {
          trigger: ref.current,
          scrub: 0.5,
        },
        ease: 'none',
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return <div ref={ref}>{children}</div>
}
