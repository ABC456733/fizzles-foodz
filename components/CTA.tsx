'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { RESTAURANT_INFO } from '@/lib/constants'

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate gradient background
      gsap.to('.cta-gradient', {
        backgroundPosition: '200% 0',
        duration: 8,
        repeat: -1,
        ease: 'none',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="cta-gradient max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #EA580C, #F97316, #EA580C)',
          backgroundSize: '200% 200%',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-white/10"
              animate={{
                x: Math.sin(i) * 100,
                y: Math.cos(i) * 100,
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready for an Unforgettable Dining Experience?
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied guests who have experienced the finest continental
            dining in Akyem Oda.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-background transition-all duration-300">
              Reserve a Table
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
            <a
              href={RESTAURANT_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
