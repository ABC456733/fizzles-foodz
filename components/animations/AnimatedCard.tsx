'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  index?: number
}

export default function AnimatedCard({ children, delay = 0, index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
