'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import GameHUD from '@/game/GameHUD';
import { useGameStore } from '@/store/gameStore';
import confetti from 'canvas-confetti';

const projects = [
  {
    id: 'lms',
    title: 'Library Management System',
    desc: 'Comprehensive LMS with cataloging, member management, and circulation tracking. Deployed on Hostinger with full CRUD operations.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Hostinger'],
    image: '/images/projects/lms-dashboard1.png',
    icon: '📚',
    difficulty: 'Epic',
  },
  {
    id: 'aksyon',
    title: 'AKSYON Information System',
    desc: 'Government information system for tracking citizen complaints, service requests, and inquiries.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Ubuntu'],
    image: '/images/projects/aksyon-public1.png',
    icon: '🏛️',
    difficulty: 'Legendary',
  },
  {
    id: '4ph',
    title: '4PH Beneficiary Platform',
    desc: 'Platform managing Pambansang Pabahay para sa  Pilipino Program beneficiaries, with dashboards, PAF workflows, and data reporting.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Ubuntu'],
    image: '/images/projects/4ph-dashboard4.png',
    icon: '🤝',
    difficulty: 'Legendary',
  },
  {
    id: 'servicedesk',
    title: 'IT Service Desk',
    desc: 'Full-featured IT helpdesk with ticket management, SLA tracking, priority routing, and comprehensive reporting dashboards.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Ubuntu'],
    image: '/images/projects/servicedesk-dashboard.png',
    icon: '💻',
    difficulty: 'Epic',
  },
  {
    id: 'taskmanager',
    title: 'Task Manager',
    desc: 'Full-stack task management application featuring real-time updates, drag-and-drop boards, and team collaboration tools.',
    tags: ['.NET', 'React', 'PostgreSQL', 'Material UI'],
    image: '/images/projects/task-manager.png',
    icon: '✅',
    difficulty: 'Rare',
  },
  {
    id: 'web3',
    title: 'Web3 Document Verifier',
    desc: 'Blockchain-based document verification system using smart contracts to ensure document authenticity on a decentralized ledger.',
    tags: ['Blockchain', 'Web3', 'Smart Contracts'],
    image: '/images/projects/document-verifier.png',
    icon: '🔐',
    difficulty: 'Epic',
  },
  {
    id: 'realestate',
    title: 'RealEstate Chain',
    desc: 'Multi-tenant real estate platform with blockchain-based ownership verification, rental management, KYC workflows, and integrated payments (Stripe & PayMongo).',
    tags: ['.NET 10', 'React 19', 'PostgreSQL', 'Solidity', 'Stripe', 'PayMongo', 'Nethereum', 'Vite'],
    image: '/images/projects/RealestateChain.png',
    icon: '🏠',
    difficulty: 'Legendary',
    ongoing: true,
  },
  {
    id: 'ats',
    title: 'ATS Resume Platform',
    desc: 'ATS resume platform with real-time resume preview, AI-assisted content generation, ATS scoring, and in-browser PDF export.',
    tags: ['NextJs','React', 'TypeScript', 'Zustand', 'Vite', 'Framer Motion', 'jsPDF'],
    image: '/images/projects/ats-platform.png',
    icon: '📄',
    difficulty: 'Epic',
  },
];

const difficultyColors: Record<string, { bg: string; text: string }> = {
  Legendary: { bg: '#FF8C00', text: '#000' },
  Epic:      { bg: '#9B30FF', text: '#fff' },
  Rare:      { bg: '#1E90FF', text: '#fff' },
};

export default function QuestBoard() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { completeQuest, completedQuests, setScreen } = useGameStore();

  const handleQuestClick = (idx: number) => {
    setSelectedProject(idx);
    const questId = projects[idx].id;
    const currentCompleted = Array.isArray(completedQuests) ? completedQuests : [];
    if (!currentCompleted.includes(questId)) {
      completeQuest(questId);
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.55 }, colors: ['#D4AF37', '#CD7F32', '#F5D060'] });
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-auto"
      style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)' }}
    >
      <GameHUD />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setScreen('map')}
        className="fixed top-36 left-4 z-40 px-5 py-2.5 text-[#E8DCC8] font-bold text-sm border-2 border-[#8B7355] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all shadow-lg"
        style={{
          background: 'linear-gradient(to bottom, #3a3020, #2a2015)',
          clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
        }}
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Map
      </motion.button>

      <div className="min-h-screen px-4 py-24 pt-28 pb-20">
        <div className="max-w-7xl mx-auto w-full">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2"
              style={{
                fontFamily: 'MedievalSharp, serif',
                textShadow: '0 0 30px rgba(212,175,55,0.8), 0 4px 8px rgba(0,0,0,0.9)',
              }}
            >
              📜 Quest Board
            </h2>
            <div className="flex items-center gap-4 mt-3 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#CD7F32]" />
              <span className="text-[#D4AF37]">⚜</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#CD7F32]" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-[#C9B896]/80 text-sm mb-12 max-w-2xl mx-auto font-cinzel italic"
          >
            Legendary quests completed by this developer. Click any scroll to uncover the full tale!
          </motion.p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const diff = difficultyColors[project.difficulty];
              const isCompleted = Array.isArray(completedQuests) && completedQuests.includes(project.id);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 + idx * 0.09 }}
                  onClick={() => handleQuestClick(idx)}
                  className="relative cursor-pointer group bg-[#0F0F1E] border-4 border-[#CD7F32] overflow-hidden"
                  style={{
                    clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-[#0F0F1E]/40 to-transparent" />

                    {/* Difficulty badge */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        background: diff.bg,
                        color: diff.text,
                        clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                      }}
                    >
                      {project.difficulty}
                    </div>

                    {/* Ongoing badge */}
                    {(project as typeof project & { ongoing?: boolean }).ongoing && (
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute bottom-3 left-0 right-0 mx-3 flex items-center justify-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                        style={{
                          background: 'linear-gradient(to right, #1a3a1a, #2d5a2d, #1a3a1a)',
                          border: '1px solid #4ade80',
                          color: '#4ade80',
                          clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
                        Ongoing Development
                      </motion.div>
                    )}

                    {/* Completed badge */}
                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-b from-green-500 to-green-700 border-3 border-white flex items-center justify-center text-white text-lg font-bold shadow-xl"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          border: '2px solid #fff',
                        }}
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl flex-shrink-0 leading-none">{project.icon}</span>
                      <h3
                        className="text-base font-bold text-[#F4E8D0] leading-snug"
                        style={{ fontFamily: 'MedievalSharp, serif' }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[#C9B896]/70 text-xs font-cinzel leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-bold text-[#0F0F1E]"
                          style={{
                            background: 'linear-gradient(to bottom, #F5D060, #D4AF37)',
                            clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner gems */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #F8F0D8 0%, #EAD9A8 60%, #C8A060 100%)',
                border: '4px solid #CD7F32',
                clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
              }}
            >
              {/* Close button — positioned away from clip-path corner */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-8 z-20 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-transform shadow-lg"
                style={{
                  background: 'linear-gradient(to bottom, #8B0000, #600000)',
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                }}
                title="Close"
              >
                ×
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80 bg-[#0F0F1E]">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-7 relative">
                {/* Grain texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)',
                  }}
                />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{projects[selectedProject].icon}</span>
                    <div>
                      <h3
                        className="text-2xl md:text-3xl font-bold text-[#0F0F1E] leading-tight"
                        style={{ fontFamily: 'MedievalSharp, serif' }}
                      >
                        {projects[selectedProject].title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span
                          className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase"
                          style={{
                            background: difficultyColors[projects[selectedProject].difficulty].bg,
                            color: difficultyColors[projects[selectedProject].difficulty].text,
                            clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                          }}
                        >
                          {projects[selectedProject].difficulty} Quest
                        </span>
                        {(projects[selectedProject] as typeof projects[0] & { ongoing?: boolean }).ongoing && (
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                            style={{
                              background: '#1a3a1a',
                              border: '1px solid #4ade80',
                              color: '#4ade80',
                              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
                            Ongoing Development
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-px w-full mb-4"
                    style={{ background: 'linear-gradient(to right, transparent, #CD7F32, transparent)' }}
                  />

                  <p className="text-[#1a0f00] text-sm font-cinzel leading-relaxed mb-5">
                    {projects[selectedProject].desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-bold text-[#D4AF37]"
                        style={{
                          background: 'linear-gradient(to bottom, #2a2015, #1a1510)',
                          border: '2px solid #CD7F32',
                          clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner gems */}
                <div className="absolute bottom-3 left-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
                <div className="absolute bottom-3 right-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
