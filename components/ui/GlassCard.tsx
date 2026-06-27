'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-xl backdrop-blur-xl border border-primary/10 ${className}`}
      whileHover={hover ? { y: -5, borderColor: 'rgba(234, 88, 12, 0.3)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
