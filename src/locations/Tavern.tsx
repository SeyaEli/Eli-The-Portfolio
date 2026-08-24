'use client';
import { motion } from 'framer-motion';
import GameHUD from '@/game/GameHUD';
import { useGameStore } from '@/store/gameStore';

const contactInfo = [
  {
    icon: '📧',
    label: 'Electronic Raven',
    value: 'johneliseo.cea12@gmail.com',
    href: 'mailto:johneliseo.cea12@gmail.com',
    hint: 'Send a message by raven',
  },
  {
    icon: '📞',
    label: 'Crystal Ball',
    value: '09127523926',
    href: 'tel:09127523926',
    hint: 'Call through the mystical crystal',
  },
  {
    icon: '📍',
    label: 'Realm Location',
    value: 'North Fairview, Quezon City',
    href: null,
    hint: 'Where this knight resides',
  },
];

const socialLinks = [
  {
    icon: '🔗',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/johneliseocea/',
    desc: 'Professional Guild',
    color: '#0A66C2',
  },
  {
    icon: '⚙️',
    label: 'GitHub',
    href: 'https://github.com/SeyaEli',
    desc: 'Code Repository',
    color: '#333',
  },
];

export default function Tavern() {
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
        <div className="max-w-3xl mx-auto w-full">

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
              🍺 The Tavern
            </h2>
            <div className="flex items-center gap-4 mt-3 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#CD7F32]" />
              <span className="text-[#D4AF37]">⚜</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#CD7F32]" />
            </div>
          </motion.div>

          {/* Main contact parchment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative p-8 md:p-10 mb-6 shadow-2xl"
            style={{
              background: 'linear-gradient(160deg, #F8F0D8 0%, #EAD9A8 50%, #C8A060 100%)',
              border: '4px solid #CD7F32',
              clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), 0 12px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Grain texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)',
              }}
            />

            <div className="relative">
              <p className="text-center text-base md:text-lg text-[#1a0f00] mb-8 font-cinzel font-semibold italic">
                &ldquo;Seeking a skilled developer for your next quest?<br />
                Let us forge an alliance worthy of legend!&rdquo;
              </p>

              {/* Contact items */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, idx) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="relative border-2 border-[#CD7F32] overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #2a2520, #1a1510)',
                      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                    }}
                    whileHover={{ x: 4 }}
                  >
                    {/* Gold hover line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-5 p-4">
                      <div
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl border border-[#CD7F32]"
                        style={{
                          background: 'linear-gradient(to bottom, #2a2015, #1a1510)',
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-[#CD7F32] uppercase tracking-widest font-cinzel mb-0.5">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-sm md:text-base text-[#F4E8D0] hover:text-[#D4AF37] transition-colors font-cinzel truncate block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-sm md:text-base text-[#F4E8D0] font-cinzel">{contact.value}</div>
                        )}
                        <div className="text-[10px] text-[#8B7355] font-cinzel italic mt-0.5">{contact.hint}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-px w-full mb-6"
                style={{ background: 'linear-gradient(to right, transparent, #CD7F32, transparent)' }}
              />

              {/* Social links row */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex-1 flex items-center gap-3 p-3 border-2 border-[#8B7355] hover:border-[#D4AF37] transition-all group"
                    style={{
                      background: 'linear-gradient(135deg, #2a2520, #1a1510)',
                      clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-[#D4AF37] group-hover:text-[#F5D060] transition-colors">
                        {link.label}
                      </div>
                      <div className="text-[10px] text-[#8B7355] font-cinzel italic">{link.desc}</div>
                    </div>
                    <span className="ml-auto text-[#8B7355] group-hover:text-[#D4AF37] text-sm transition-colors">→</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="mailto:johneliseo.cea12@gmail.com"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-bold text-[#0F0F1E] text-sm border-2 border-[#CD7F32] transition-all"
                  style={{
                    background: 'linear-gradient(to bottom, #F5D060, #D4AF37, #B8941E)',
                    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                    boxShadow: '0 0 20px rgba(212,175,55,0.3), 0 4px 12px rgba(0,0,0,0.4)',
                    textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  ✉ Send Message
                </motion.a>

                <motion.a
                  href="/storage/CV - CEA, JOHN ELISEO.pdf"
                  download
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-bold text-[#E8DCC8] text-sm border-2 border-[#8B7355] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                  style={{
                    background: 'linear-gradient(to bottom, #3a3020, #2a2015)',
                    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  📜 Download Scroll (CV)
                </motion.a>
              </div>
            </div>

            {/* Corner gems */}
            <div className="absolute top-3 left-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute top-3 right-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-[#D4AF37] rotate-45 shadow-md" />
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <div className="flex items-center gap-4 mb-4 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8B7355]/50" />
              <span className="text-[#8B7355] text-sm">⚜</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8B7355]/50" />
            </div>
            <p
              className="text-[#8B7355]/70 text-sm font-cinzel"
              style={{ fontFamily: 'MedievalSharp, serif' }}
            >
              © 2024 John Eliseo Cea · All rights reserved
            </p>
            <p className="text-[#8B7355]/50 text-xs font-cinzel mt-1 italic">
              Forged with ⚔ in the Kingdom of Code
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
