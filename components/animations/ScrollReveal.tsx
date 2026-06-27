'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return <div ref={ref}>{children}</div>
}
