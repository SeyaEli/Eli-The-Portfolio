'use client';
import { motion } from 'framer-motion';
import GameHUD from '@/game/GameHUD';
import { useGameStore } from '@/store/gameStore';

const stats = [
  { icon: '⚔️', label: 'Years of Experience', value: '2+' },
  { icon: '📜', label: 'Projects Completed', value: '6+' },
  { icon: '🔮', label: 'Technologies Mastered', value: '18+' },
  { icon: '🏛️', label: 'Government Platforms', value: '2' },
];

const experience = [
  {
    role: 'IT Support Officer II',
    org: 'Contract of Service',
    period: '2024 – Present',
    note: 'Building enterprise-grade web applications across DHSUD offices .',
  },
  {
    role: 'Full Stack Developer',
    org: 'Freelance',
    period: 'Project-Based',
    note: 'Developed and deployed information systems for freelance clients and personal projects, hosted on Hostinger cloud infrastructure.',
  },
];

export default function Castle() {
  const { setScreen } = useGameStore();

  return (
    <div className="fixed inset-0 overflow-auto"
      style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)' }}
    >
      <GameHUD />

      {/* Back Button — positioned below HUD character panel */}
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
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2"
              style={{
                fontFamily: 'MedievalSharp, serif',
                textShadow: '0 0 30px rgba(212,175,55,0.8), 0 4px 8px rgba(0,0,0,0.9)',
              }}
            >
              🏰 The Throne Room
            </h2>
            <div className="flex items-center gap-4 mt-4 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#CD7F32]" />
              <span className="text-[#D4AF37]">⚜</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#CD7F32]" />
            </div>
          </motion.div>

          {/* Main parchment card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative p-8 md:p-10 mb-8 shadow-2xl"
            style={{
              background: 'linear-gradient(160deg, #F8F0D8 0%, #EAD9A8 50%, #C8A060 100%)',
              border: '4px solid #CD7F32',
              clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 12px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Grain texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)',
              }}
            />

            <div className="relative space-y-5 text-[#1a0f00]">
              <p className="text-base md:text-lg leading-relaxed font-cinzel">
                Greetings, traveler! I am{' '}
                <span className="font-bold text-[#8B0000]" style={{ fontFamily: 'MedievalSharp, serif' }}>
                  John Eliseo Cea
                </span>
                , a Full Stack Developer who wields the powers of modern web technologies
                to forge exceptional digital experiences.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-cinzel">
                With mastery over{' '}
                <strong>Laravel</strong>, <strong>Vue.js</strong>, <strong>React</strong>, and <strong>.NET</strong>,
                I craft scalable applications that serve kingdoms of users. My arsenal includes{' '}
                <strong>MySQL</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>, fortified
                with DevOps tools such as <strong>Docker</strong> and <strong>CI/CD</strong> pipelines.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-cinzel">
                From Library Management Systems to Government Platforms, I have embarked on quests that challenge
                both frontend artistry and backend sorcery. Currently seeking new adventures in
                the realm of software development.
              </p>

              {/* Divider */}
              <div
                className="h-px w-full my-4"
                style={{ background: 'linear-gradient(to right, transparent, #CD7F32, transparent)' }}
              />

              {/* Education & Location */}
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="text-xs text-[#8B5E00] font-bold uppercase tracking-wide">Education</div>
                    <div className="font-semibold text-sm">BS Information Technology</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-xs text-[#8B5E00] font-bold uppercase tracking-wide">Realm</div>
                    <div className="font-semibold text-sm">North Fairview, Quezon City</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="text-xs text-[#8B5E00] font-bold uppercase tracking-wide">Status</div>
                    <div className="font-semibold text-sm text-[#1B4D3E]">Open to Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner gems */}
            <div className="absolute top-3 left-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute top-3 right-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
          </motion.div>

          {/* Battle Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-8"
          >
            <h3
              className="text-2xl font-bold text-[#D4AF37] text-center mb-5"
              style={{ fontFamily: 'MedievalSharp, serif', textShadow: '0 0 15px rgba(212,175,55,0.5)' }}
            >
              ⚔ Battle Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="text-center p-4 border-2 border-[#CD7F32]"
                  style={{
                    background: 'linear-gradient(160deg, #2a2520, #1a1510)',
                    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                    boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.1)',
                  }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div
                    className="text-2xl font-bold text-[#D4AF37]"
                    style={{ fontFamily: 'MedievalSharp, serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#C9B896]/80 font-cinzel uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chronicle / Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3
              className="text-2xl font-bold text-[#D4AF37] text-center mb-5"
              style={{ fontFamily: 'MedievalSharp, serif', textShadow: '0 0 15px rgba(212,175,55,0.5)' }}
            >
              📜 The Chronicle
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + idx * 0.1 }}
                  className="relative flex gap-4 p-5 border-2 border-[#CD7F32]"
                  style={{
                    background: 'linear-gradient(135deg, #2a2520, #1a1510)',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                  }}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border-2 border-[#CD7F32] text-lg"
                    style={{
                      background: 'linear-gradient(to bottom, #D4AF37, #8B5E00)',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    ⚔
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span
                        className="text-[#D4AF37] font-bold"
                        style={{ fontFamily: 'MedievalSharp, serif' }}
                      >
                        {exp.role}
                      </span>
                      <span
                        className="text-[9px] px-2 py-0.5 text-[#C9B896] border border-[#8B7355] font-cinzel uppercase tracking-wide"
                        style={{ background: 'rgba(139,115,85,0.2)' }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-[#C9B896]/80 text-xs font-cinzel font-semibold mb-1">{exp.org}</div>
                    <div className="text-[#F4E8D0]/70 text-sm font-cinzel">{exp.note}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
