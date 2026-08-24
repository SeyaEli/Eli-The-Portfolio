'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  { title: 'Library Management System', tags: ['Laravel', 'VueJs', 'MySQL', 'Hostinger'], image: '/images/projects/lms-dashboard1.png', icon: '📚' },
  { title: 'AKSYON IS', tags: ['Laravel', 'VueJs', 'MySQL', 'Ubuntu'], image: '/images/projects/aksyon-public1.png', icon: '🏛️' },
  { title: '4PH Beneficiary Platform', tags: ['Laravel', 'VueJs', 'MySQL', 'Ubuntu'], image: '/images/projects/4ph-dashboard4.png', icon: '🤝' },
  { title: 'IT Service Desk', tags: ['Laravel', 'VueJs', 'MySQL', 'Ubuntu'], image: '/images/projects/servicedesk-dashboard.png', icon: '💻' },
  { title: 'Task Manager', tags: ['.NET', 'React', 'PostgreSQL', 'Material UI'], image: '/images/projects/task-manager.png', icon: '✅' },
  { title: 'Web3 Document Verifier', tags: ['Blockchain', 'Web3', 'Smart Contracts'], image: '/images/projects/document-verifier.png', icon: '🔐' },
  { title: 'RealEstate Chain', tags: ['.NET 10', 'React 19', 'PostgreSQL', 'Solidity', 'Stripe', 'PayMongo', 'Nethereum', 'Vite'], image: '/images/projects/RealestateChain.png', icon: '🏠' },
  { title: 'ATS Resume Platform', tags: ['React', 'TypeScript', 'Zustand', 'Vite', 'Framer Motion', 'jsPDF'], image: '/images/projects/ats-platform.png', icon: '📄', description: 'ATS resume platform with real-time resume preview, AI-assisted content generation, ATS scoring, and in-browser PDF export.' }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-medieval text-medieval-gold text-center mb-16 text-shadow-gold"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(idx)}
              className="quest-card h-80"
            >
              <div className="relative h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-medieval-night via-medieval-night/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-2xl font-medieval text-[#C9B896]">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-rune text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full skyrim-panel"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 skyrim-btn flex items-center justify-center text-2xl"
              >
                ×
              </button>
              
              <div className="relative h-96">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-3xl font-medieval text-[#C9B896] mb-4">
                  {projects[selectedProject].title}
                </h3>
                {projects[selectedProject].description && (
                  <p className="text-medieval-parchment/80 mb-4 text-sm">{projects[selectedProject].description}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag) => (
                    <span key={tag} className="skill-rune">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
