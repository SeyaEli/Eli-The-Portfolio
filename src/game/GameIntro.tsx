'use client';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { soundManager } from '@/sounds/soundManager';

const floatingRunes = [
  { symbol: '✦', x: 8, y: 12, size: 1.4, delay: 0, duration: 7 },
  { symbol: '⚜', x: 88, y: 10, size: 1.1, delay: 1.2, duration: 8 },
  { symbol: '✠', x: 15, y: 72, size: 1.0, delay: 0.8, duration: 6 },
  { symbol: '❧', x: 82, y: 75, size: 1.2, delay: 2.0, duration: 9 },
  { symbol: '✦', x: 92, y: 45, size: 0.8, delay: 1.5, duration: 7.5 },
  { symbol: '⚜', x: 5, y: 48, size: 0.9, delay: 0.3, duration: 8.5 },
  { symbol: '✠', x: 50, y: 5, size: 0.7, delay: 2.5, duration: 6.5 },
  { symbol: '❧', x: 45, y: 93, size: 0.8, delay: 1.8, duration: 7.2 },
];

export default function GameIntro() {
  const setScreen = useGameStore((state) => state.setScreen);

  const handleStart = () => {
    soundManager.play('click');
    setScreen('character-select');
  };

  const handleSkip = () => {
    soundManager.play('click');
    setScreen('map');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #1a1a35 0%, #0F0F1E 60%, #080810 100%)' }}
    >
      {/* Floating rune symbols */}
      {floatingRunes.map((rune, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none text-[#D4AF37]"
          style={{
            left: `${rune.x}%`,
            top: `${rune.y}%`,
            fontSize: `${rune.size}rem`,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: rune.duration,
            delay: rune.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {rune.symbol}
        </motion.div>
      ))}

      {/* Radial light beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center relative z-10 px-6 max-w-3xl w-full"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#CD7F32] text-2xl mb-6 tracking-[0.5em]"
        >
          ✦ ✦ ✦
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-[#D4AF37] mb-4 leading-none"
          style={{
            fontFamily: 'MedievalSharp, serif',
            textShadow: '0 0 40px rgba(212,175,55,0.9), 0 0 80px rgba(212,175,55,0.4), 0 6px 12px rgba(0,0,0,0.9)',
          }}
          animate={{
            textShadow: [
              '0 0 30px rgba(212,175,55,0.8), 0 6px 12px rgba(0,0,0,0.9)',
              '0 0 60px rgba(212,175,55,1), 0 0 100px rgba(212,175,55,0.5), 0 6px 12px rgba(0,0,0,0.9)',
              '0 0 30px rgba(212,175,55,0.8), 0 6px 12px rgba(0,0,0,0.9)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          THE PORTFOLIO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[#CD7F32] mb-3 tracking-[0.3em] uppercase font-cinzel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A Medieval Adventure
        </motion.p>

        {/* Lore text */}
        <motion.p
          className="text-sm md:text-base text-[#F4E8D0]/70 mb-8 font-cinzel italic max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          &ldquo;In the realm of code, one developer&apos;s legend awaits discovery.
          Choose your path and begin the chronicle.&rdquo;
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center gap-4 mb-10 max-w-sm mx-auto"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#CD7F32]" />
          <span className="text-[#D4AF37] text-xl">⚜</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#CD7F32]" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={handleStart}
            className="relative px-12 py-4 bg-gradient-to-b from-[#D4AF37] via-[#B8941E] to-[#8B5E00] text-[#0F0F1E] text-xl font-bold border-4 border-[#CD7F32] overflow-hidden group"
            style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              textShadow: '0 1px 2px rgba(255,255,255,0.3)',
              boxShadow: '0 0 30px rgba(212,175,55,0.4), 0 6px 20px rgba(0,0,0,0.5)',
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={() => soundManager.play('hover')}
          >
            <span className="relative z-10">⚔ BEGIN ADVENTURE ⚔</span>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Skip button */}
          <motion.button
            onClick={handleSkip}
            className="px-8 py-4 bg-gradient-to-b from-[#3a3020] to-[#2a2015] text-[#C9B896] text-base font-bold border-2 border-[#8B7355] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            style={{
              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={() => soundManager.play('hover')}
          >
            📜 Skip to Map
          </motion.button>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-[#8B7355]/60 text-xs tracking-[0.4em] uppercase font-cinzel"
        >
          John Eliseo Cea · Full Stack Developer
        </motion.div>
      </motion.div>
    </div>
  );
}
