'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`glass rounded-xl backdrop-blur-xl p-6 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
