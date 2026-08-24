'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-medieval text-medieval-gold text-center mb-12 text-shadow-gold">
          About Me
        </h2>
        
        <div className="skyrim-panel">
          <div className="space-y-6 text-[#C9B896]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              Hey there! I'm <span className="font-bold text-medieval-gold">John Eliseo Cea</span>, 
              a Full Stack Developer who loves building things for the web. I've been working with everything from 
              frontend frameworks to backend systems, and I genuinely enjoy the challenge of making it all work together.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed"
            >
              I work mainly with <span className="font-bold">Laravel</span>, <span className="font-bold">Vue.js</span>, 
              <span className="font-bold"> React</span>, and <span className="font-bold">.NET</span>. On the database side, 
              I'm comfortable with MySQL, MongoDB, and PostgreSQL. I also know my way around Docker and CI/CD pipelines 
              when it comes to deployment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-lg leading-relaxed"
            >
              I've worked on projects ranging from Library Management Systems to Government Platforms—stuff that 
              needs to be reliable and handle real users. Right now, I'm looking for new opportunities where I can 
              keep learning and contribute to something meaningful.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-6 border-t border-medieval-gold/30"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <span className="font-semibold">Bachelor of Science in Information Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>North Fairview, Quezon City</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
