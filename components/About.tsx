'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { HiUsers, HiSparkles, HiCheckCircle, HiFire } from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { icon: HiUsers, label: 'Happy Customers', value: '5000+' },
    { icon: HiSparkles, label: 'Experience', value: '10+ Years' },
    { icon: HiCheckCircle, label: 'Daily Customers', value: '200+' },
    { icon: HiFire, label: 'Fresh Ingredients', value: '100%' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="about-content space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.h2
              className="font-display text-4xl sm:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our <span className="gradient-text">Story</span>
            </motion.h2>
            <motion.p
              className="text-lg text-text/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              For over a decade, Fizzles Foodz has been the premier destination for fine dining
              in Akyem Oda, crafting memorable experiences one meal at a time.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="glass p-6 rounded-xl backdrop-blur-xl text-center hover:bg-primary/5 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl text-primary">{stat.value}</p>
                  <p className="text-sm text-text/60">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden glow-primary">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl">🍽️</p>
                    <p className="text-lg font-semibold text-text/60 mt-4">Culinary Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl font-bold">Premium Continental Cuisine</h3>
              <p className="text-text/70 leading-relaxed">
                At Fizzles Foodz, we believe that exceptional dining is an art form. Our chefs
                combine traditional techniques with modern innovation to create dishes that
                delight all senses.
              </p>
              <p className="text-text/70 leading-relaxed">
                From intimate dinners for two to grand celebrations, private events, or casual
                gatherings with friends, we provide the perfect setting and culinary experience.
              </p>

              <div className="space-y-3">
                {[
                  'Locally-sourced fresh ingredients',
                  'Expert chefs with international training',
                  'Personalized dining experiences',
                  'Commitment to excellence',
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HiCheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-text">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
