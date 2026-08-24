'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  { title: 'Frontend', icon: '⚔️', skills: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React', 'NextJS', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Material UI'] },
  { title: 'Backend', icon: '🔮', skills: ['Laravel', 'Node.js', 'Express.js', '.NET', 'Axios'] },
  { title: 'Databases', icon: '🗝️', skills: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { title: 'DevOps & Tools', icon: '⚙️', skills: ['Ubuntu', 'Git/GitHub', 'CI/CD Basic', 'Docker', 'n8n', 'Vite', 'Zustand'] },
  { title: 'Design & Testing', icon: '🎨', skills: ['Figma', 'Postman'] }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-medieval text-medieval-gold text-center mb-16 text-shadow-gold"
        >
          Skills & Tech Stack
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="skyrim-panel"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#8B7355]">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-medieval text-[#C9B896]">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="skill-rune"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
