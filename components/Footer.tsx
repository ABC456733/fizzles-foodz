'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiFacebook, HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { RESTAURANT_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-text text-background pt-20 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-display font-bold text-xl text-primary">Fizzles Foodz</span>
            </div>
            <p className="text-background/70">
              Premium continental dining experience in Akyem Oda, Ghana.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-primary">Hours</h3>
            <div className="space-y-2 text-background/70">
              <p>{RESTAURANT_INFO.hours.note}</p>
              <p>
                {RESTAURANT_INFO.hours.open} - {RESTAURANT_INFO.hours.close}
              </p>
              <p className="text-sm pt-2">Rating: ⭐ {RESTAURANT_INFO.googleRating}/5</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <HiPhone size={18} />
                {RESTAURANT_INFO.phone}
              </a>
              <a
                href={RESTAURANT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <HiFacebook size={18} />
                Facebook
              </a>
              <a
                href={RESTAURANT_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <HiEnvelope size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/60">
            <p>&copy; {currentYear} Fizzles Foodz. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
