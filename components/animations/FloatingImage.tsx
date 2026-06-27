'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface FloatingImageProps {
  children: React.ReactNode
  delay?: number
}

export default function FloatingImage({ children, delay = 0 }: FloatingImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      y: -20,
      duration: 3 + Math.random() * 2,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
