'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-medieval text-medieval-gold mb-4 text-shadow-gold"
          >
            John Eliseo Cea
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-medieval-parchment mb-6 font-cinzel"
          >
            Full Stack Developer
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-medieval-darkParchment mb-8 max-w-xl"
          >
            Building web applications that actually work. I work with Laravel, Vue.js, React, and .NET to bring ideas to life
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a href="#contact" className="skyrim-btn">Contact Me</a>
            <a href="/storage/CV - CEA, JOHN ELISEO.pdf" download className="skyrim-btn">Download CV</a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-8 justify-center md:justify-start"
          >
            {[
              { icon: '📧', label: 'Email' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '🐙', label: 'GitHub' },
              { icon: '📘', label: 'Facebook' },
            ].map((social, i) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-3xl cursor-pointer"
              >
                {social.icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="stone-frame"
          >
            <div className="stone-inner">
              <Image
                src="/images/cea.jpg"
                alt="John Eliseo Cea"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
