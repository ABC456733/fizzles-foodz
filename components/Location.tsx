'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiMapPin, HiPhone, HiClock } from 'react-icons/hi2'
import { RESTAURANT_INFO } from '@/lib/constants'

export default function Location() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Visit <span className="gradient-text">Fizzles Foodz</span>
          </h2>
          <p className="text-lg text-text/70">We&apos;re conveniently located in Akyem Oda</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden glass p-2 backdrop-blur-xl h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl mb-2">📍</p>
                <p className="text-text/60">Map Integration</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <div className="glass p-6 rounded-xl backdrop-blur-xl hover:bg-primary/5 transition-colors">
              <div className="flex gap-4">
                <HiMapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-text mb-2">Address</p>
                  <p className="text-text/70">{RESTAURANT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="glass p-6 rounded-xl backdrop-blur-xl hover:bg-primary/5 transition-colors block"
            >
              <div className="flex gap-4">
                <HiPhone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-text mb-2">Phone</p>
                  <p className="text-text/70">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="glass p-6 rounded-xl backdrop-blur-xl hover:bg-primary/5 transition-colors">
              <div className="flex gap-4">
                <HiClock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-text mb-2">Hours</p>
                  <p className="text-text/70">
                    {RESTAURANT_INFO.hours.open} - {RESTAURANT_INFO.hours.close}
                  </p>
                  <p className="text-text/70">{RESTAURANT_INFO.hours.note}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={RESTAURANT_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-all text-center"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
