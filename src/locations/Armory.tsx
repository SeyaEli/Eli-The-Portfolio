'use client';
import { motion } from 'framer-motion';
import GameHUD from '@/game/GameHUD';
import { useGameStore } from '@/store/gameStore';

const skillCategories = [
  {
    title: 'Frontend Arsenal',
    icon: '⚔️',
    desc: 'Crafting the visual realm',
    color: '#8B0000',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Bootstrap', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Vue.js', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Next.js', level: 40 },
      { name: 'TypeScript', level: 50 },
      { name: 'Framer Motion', level: 40 },
      { name: 'Material UI', level: 40 },
    ],
  },
  {
    title: 'Backend Sorcery',
    icon: '🔮',
    desc: 'Commanding server-side magic',
    color: '#4A0082',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'Node.js', level: 70 },
      { name: '.NET', level: 50 },
      { name: 'Express.js', level: 40 },
      { name: 'Axios', level: 45 },
    ],
  },
  {
    title: 'Database Vaults',
    icon: '🗝️',
    desc: 'Guarding the kingdom\'s knowledge',
    color: '#1B4D3E',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 40 },
      { name: 'MongoDB', level: 40 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '⚙️',
    desc: 'Forging and deploying the realm',
    color: '#5C3A00',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Ubuntu', level: 80 },
      { name: 'Vite', level: 35 },
      { name: 'Docker', level: 30 },
      { name: 'CI/CD Basic', level: 35 },
      { name: 'Zustand', level: 30 },
      { name: 'n8n', level: 40 },
    ],
  },
  {
    title: '3D & Graphics',
    icon: '🌟',
    desc: 'Conjuring worlds from light and geometry',
    color: '#1a4a6e',
    skills: [
      { name: 'Three.js', level: 40 },
    ],
  },
  {
    title: 'Design & Testing',
    icon: '🎨',
    desc: 'Shaping the visual experience',
    color: '#1a3a5e',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Postman', level: 80 },
    ],
  },
];

function MasteryBar({ level, color }: { level: number; color: string }) {
  return (
    <div
      className="relative h-1.5 w-full"
      style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(139,115,85,0.4)',
        clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)',
      }}
    >
      <motion.div
        className="h-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          background: `linear-gradient(to right, ${color}99, ${color})`,
          boxShadow: `0 0 6px ${color}80`,
        }}
      />
    </div>
  );
}

export default function Armory() {
  const { setScreen } = useGameStore();

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

      <div className="min-h-screen px-4 py-24 pt-28">
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
              ⚔️ The Armory
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
            Weapons and tools mastered through countless hours of practice and battle.
            Each bar marks the depth of mastery.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative shadow-xl"
                style={{
                  background: 'linear-gradient(160deg, #F8F0D8 0%, #EAD9A8 50%, #C8A060 100%)',
                  border: '3px solid #CD7F32',
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                {/* Category color accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(to right, transparent, ${category.color}, transparent)` }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-[#CD7F32]"
                      style={{
                        background: 'linear-gradient(to bottom, #2a2015, #1a1510)',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-[#0F0F1E] leading-tight"
                        style={{ fontFamily: 'MedievalSharp, serif' }}
                      >
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-[#5a3e00] font-cinzel italic">{category.desc}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: `linear-gradient(to right, transparent, ${category.color}80, transparent)` }}
                  />

                  {/* Skills with mastery bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-[#1a0f00] font-cinzel">{skill.name}</span>
                          <span
                            className="text-[10px] font-bold px-1.5 py-0.5 text-white"
                            style={{
                              background: category.color,
                              clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)',
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <MasteryBar level={skill.level} color={category.color} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner gems */}
                <div className="absolute top-3 left-3 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
                <div className="absolute top-3 right-3 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-[#D4AF37] rotate-45 shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
