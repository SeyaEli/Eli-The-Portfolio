'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'johneliseo.cea12@gmail.com', href: 'mailto:johneliseo.cea12@gmail.com' },
  { icon: '📞', label: 'Phone', value: '09127523926', href: 'tel:09127523926' },
  { icon: '📍', label: 'Location', value: 'North Fairview, Quezon City', href: null }
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-medieval text-medieval-gold text-center mb-16 text-shadow-gold"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="skyrim-panel"
        >
          <p className="text-center text-lg text-[#C9B896] mb-12">
            Looking for a developer? Let's talk about your project!
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((contact, idx) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="contact-stone"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl">{contact.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#8B7355] uppercase tracking-wide">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-lg text-[#C9B896] hover:text-[#E8DCC8] transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-lg text-[#C9B896]">
                        {contact.value}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a href="mailto:johneliseo.cea12@gmail.com" className="skyrim-btn inline-block">
              Send Message
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-medieval-parchment"
        >
          <p className="font-medieval text-xl">
            © 2024 John Eliseo Cea. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
