'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useGameStore, characters, CharacterClass } from '@/store/gameStore';
import { soundManager } from '@/sounds/soundManager';

const characterDetails: Record<CharacterClass, { lore: string; color: string }> = {
  warrior: {
    lore: 'Master of weapons and battle tactics. Brute strength guides every deployment.',
    color: '#8B0000',
  },
  mage: {
    lore: 'Commands the arcane arts of code. Intelligence shapes digital reality itself.',
    color: '#4A0082',
  },
  rogue: {
    lore: 'Swift and cunning. Scripts and shadows bend to your expert precision.',
    color: '#1B4D3E',
  },
  paladin: {
    lore: 'Divine guardian of clean architecture and the sacred laws of best practices.',
    color: '#8B5E00',
  },
  ranger: {
    lore: 'Full-stack marksman. Precision and patience guide every line of code.',
    color: '#2C4A1A',
  },
};

// SVG Fleur-de-lis component rendered purely in SVG
function FleurDeLis({ size = 40, color = '#D4AF37' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 120" fill={color} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="30" rx="12" ry="20" />
      <ellipse cx="50" cy="30" rx="12" ry="20" transform="rotate(-40 50 30)" />
      <ellipse cx="50" cy="30" rx="12" ry="20" transform="rotate(40 50 30)" />
      <ellipse cx="50" cy="22" rx="8" ry="14" />
      <rect x="44" y="48" width="12" height="38" rx="4" />
      <ellipse cx="50" cy="93" rx="16" ry="6" />
      <rect x="36" y="89" width="28" height="6" rx="3" />
    </svg>
  );
}

export default function CharacterSelect() {
  const { setCharacter, setScreen } = useGameStore();

  const handleSelect = (characterId: CharacterClass) => {
    soundManager.play('click');
    setCharacter(characterId);
    setTimeout(() => setScreen('map'), 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto"
      style={{ background: 'radial-gradient(ellipse at 50% 20%, #1a1a35 0%, #0F0F1E 60%, #080810 100%)' }}
    >
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setScreen('intro')}
        className="fixed top-5 left-5 z-50 px-5 py-2.5 bg-gradient-to-b from-[#3a3020] to-[#2a2015] text-[#C9B896] text-sm font-bold border-2 border-[#8B7355] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
        style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => soundManager.play('hover')}
      >
        ← Return
      </motion.button>

      <div className="w-full max-w-6xl px-6 pt-16 pb-12">

        {/* ── Hero Portrait Section ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          {/* Top ⚜ rune */}
          <motion.div
            animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-3"
          >
            <FleurDeLis size={44} color="#D4AF37" />
          </motion.div>

          {/* Portrait frame wrapper */}
          <div className="relative flex items-center justify-center">

            {/* Left side ⚜ */}
            <motion.div
              className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-60"
              animate={{ x: [0, -3, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <FleurDeLis size={28} color="#CD7F32" />
            </motion.div>

            {/* Right side ⚜ */}
            <motion.div
              className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-60"
              animate={{ x: [0, 3, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <FleurDeLis size={28} color="#CD7F32" />
            </motion.div>

            {/* Outer glow ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 220,
                height: 220,
                background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Shield frame — outer (gold border layer) */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 178,
                height: 210,
                background: 'linear-gradient(160deg, #F5D060 0%, #D4AF37 30%, #CD7F32 60%, #8B5E00 100%)',
                clipPath: 'polygon(50% 0%, 100% 12%, 100% 72%, 50% 100%, 0% 72%, 0% 12%)',
                boxShadow: '0 0 40px rgba(212,175,55,0.5), 0 8px 30px rgba(0,0,0,0.7)',
              }}
            >
              {/* Shield frame — inner content area (slight inset) */}
              <div
                className="absolute overflow-hidden"
                style={{
                  width: 162,
                  height: 192,
                  clipPath: 'polygon(50% 0%, 100% 12%, 100% 72%, 50% 100%, 0% 72%, 0% 12%)',
                  background: '#0F0F1E',
                }}
              >
                <Image
                  src="/images/cea.jpg"
                  alt="John Eliseo Cea — Full Stack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Inner vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 80% 80% at 50% 40%, transparent 50%, rgba(0,0,0,0.45) 100%)',
                  }}
                />
              </div>

              {/* Crown gem at the top-center of shield */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-b from-[#F5D060] to-[#D4AF37] border-2 border-[#8B5E00] rotate-45 shadow-lg z-10"
              />
              {/* Left shoulder gem */}
              {/* <div className="absolute top-[14%] left-[3%] w-3.5 h-3.5 bg-gradient-to-b from-[#F5D060] to-[#CD7F32] rotate-45 shadow-md" /> */}
              {/* Right shoulder gem */}
              {/* <div className="absolute top-[14%] right-[3%] w-3.5 h-3.5 bg-gradient-to-b from-[#F5D060] to-[#CD7F32] rotate-45 shadow-md" /> */}
            </div>
          </div>

          {/* Bottom ⚜ */}
          <motion.div
            className="mt-2 opacity-70"
            animate={{ y: [0, 4, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <FleurDeLis size={32} color="#CD7F32" />
          </motion.div>

          {/* Name & Title beneath portrait */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4"
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-[#D4AF37]"
              style={{
                fontFamily: 'MedievalSharp, serif',
                textShadow: '0 0 20px rgba(212,175,55,0.8), 0 3px 6px rgba(0,0,0,0.9)',
              }}
            >
              John Eliseo Cea
            </h3>
            <p
              className="text-[#C9B896] text-sm mt-1 font-cinzel italic tracking-widest"
            >
              ⚔ Full Stack Developer ⚔
            </p>

            {/* Stat badges row */}
            <div className="flex items-center justify-center gap-3 mt-3">
              {[
                { label: 'LVL', value: '99' },
                { label: 'EXP', value: '2+ Yrs' },
                { label: 'CLASS', value: 'Dev' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="px-3 py-1 text-center"
                  style={{
                    background: 'linear-gradient(to bottom, #2a2015, #1a1510)',
                    border: '1.5px solid #CD7F32',
                    clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                  }}
                >
                  <div className="text-[9px] text-[#CD7F32] uppercase tracking-widest font-cinzel">{badge.label}</div>
                  <div className="text-xs font-bold text-[#F5D060]" style={{ fontFamily: 'MedievalSharp, serif' }}>{badge.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Class Selection Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-4"
        >
          <div className="flex items-center gap-4 mb-4 max-w-sm mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#CD7F32]" />
            <span className="text-[#D4AF37] text-lg">⚜</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#CD7F32]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2"
            style={{
              fontFamily: 'MedievalSharp, serif',
              textShadow: '0 0 25px rgba(212,175,55,0.7), 0 4px 8px rgba(0,0,0,0.9)',
            }}
          >
            Choose Your Class
          </h2>
          <p className="text-[#F4E8D0]/60 text-sm font-cinzel italic">
            Your class shapes how you approach every coding quest
          </p>
        </motion.div>

        {/* ── Character Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-6">
          {characters.map((char, idx) => {
            const details = characterDetails[char.id];
            return (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.09 }}
                onClick={() => handleSelect(char.id)}
                onMouseEnter={() => soundManager.play('hover')}
                className="cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative border-4 border-[#CD7F32] overflow-hidden h-full transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  style={{
                    clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                    background: 'linear-gradient(160deg, #F8F0D8 0%, #EAD9A8 50%, #C8A060 100%)',
                  }}
                >
                  {/* Class color accent bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${details.color}, transparent)` }}
                  />

                  <div className="p-5 text-center">
                    <motion.div
                      className="text-5xl mb-3 leading-none"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {char.icon}
                    </motion.div>

                    <h3
                      className="text-lg font-bold text-[#0F0F1E] mb-1"
                      style={{ fontFamily: 'MedievalSharp, serif' }}
                    >
                      {char.name}
                    </h3>

                    <div
                      className="inline-block px-2 py-0.5 text-xs font-bold text-white mb-3"
                      style={{
                        background: details.color,
                        clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)',
                      }}
                    >
                      +{char.bonus}
                    </div>

                    <div
                      className="h-px w-full mb-3"
                      style={{ background: `linear-gradient(to right, transparent, ${details.color}80, transparent)` }}
                    />

                    <p className="text-xs text-[#3a2800] leading-relaxed font-cinzel italic">
                      {details.lore}
                    </p>
                  </div>

                  {/* Corner gems */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#D4AF37] rotate-45 shadow-md" />
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#D4AF37] rotate-45 shadow-md" />
                  <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#D4AF37] rotate-45 shadow-md" />
                  <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-[#D4AF37] rotate-45 shadow-md" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-[#8B7355]/60 text-xs font-cinzel italic"
        >
          Each class begins your journey — the destination remains the same
        </motion.p>
      </div>
    </div>
  );
}
