'use client';
import { motion } from 'framer-motion';
import { useGameStore, characters } from '@/store/gameStore';

export default function GameHUD() {
  const { character, progress, setScreen, soundEnabled, toggleSound, visitedLocations } = useGameStore();

  const selectedChar = characters.find(c => c.id === character);
  const level = Math.floor(progress / 25) + 1;
  const progressInLevel = (progress % 25) * 4; // 0–100 within current level
  const visitedCount = Array.isArray(visitedLocations) ? visitedLocations.length : 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-30">

      {/* ── Top Left — Character Panel ── */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="absolute top-4 left-4 pointer-events-auto z-40"
      >
        <div
          className="relative bg-[#0A0812]/92 border-2 border-[#CD7F32] p-3 min-w-[210px]"
          style={{
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
            boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.15), 0 8px 24px rgba(0,0,0,0.7)',
          }}
        >
          {/* Gold top edge line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

          <div className="flex items-center gap-3 mb-2.5">
            <div
              className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0 border border-[#CD7F32]"
              style={{
                background: 'linear-gradient(135deg, #2a2015, #1a1510)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              {selectedChar?.icon ?? '⚔️'}
            </div>
            <div>
              <div
                className="text-[#D4AF37] font-bold text-sm leading-tight"
                style={{ fontFamily: 'MedievalSharp, serif' }}
              >
                {selectedChar?.name ?? 'Adventurer'}
              </div>
              <div className="text-[#C9B896]/70 text-[10px] font-cinzel">
                Lv. {level} &nbsp;·&nbsp; {visitedCount}/4 Explored
              </div>
            </div>
          </div>

          {/* XP label */}
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#CD7F32] text-[9px] uppercase tracking-widest font-cinzel">Quest Progress</span>
            <span className="text-[#D4AF37] text-[10px] font-bold">{progress}%</span>
          </div>

          {/* XP bar */}
          <div
            className="relative h-5 overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, #1a0f00, #2a1a00)',
              border: '1.5px solid #CD7F32',
              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
            }}
          >
            <motion.div
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
                boxShadow: '0 0 8px rgba(76,175,80,0.6)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white mix-blend-difference">
              {progress < 100 ? 'ON QUEST' : '⚔ COMPLETE'}
            </div>
          </div>

          {/* Corner ornaments */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#D4AF37] rotate-45 opacity-70" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#D4AF37] rotate-45 opacity-70" />
        </div>
      </motion.div>

      {/* ── Top Right — Controls ── */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="absolute top-4 right-4 flex gap-2 pointer-events-auto z-40"
      >
        {/* Sound toggle */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
          className="w-11 h-11 flex items-center justify-center text-lg border-2 border-[#CD7F32] text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
          style={{
            background: 'rgba(10,8,18,0.92)',
            clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
          }}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>

        {/* Map button */}
        <button
          onClick={() => setScreen('map')}
          className="h-11 px-4 flex items-center gap-1.5 border-2 border-[#CD7F32] text-[#D4AF37] font-bold text-sm hover:bg-[#D4AF37]/20 transition-all"
          style={{
            background: 'rgba(10,8,18,0.92)',
            clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
            fontFamily: 'MedievalSharp, serif',
          }}
        >
          🗺 MAP
        </button>
      </motion.div>

      {/* ── Bottom — Quest Status Bar ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-auto z-40"
      >
        <div
          className="px-6 py-2 text-[#F4E8D0]/90 text-sm text-center whitespace-nowrap border border-[#CD7F32]/60"
          style={{
            background: 'rgba(10,8,18,0.88)',
            clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="text-[#D4AF37] font-bold" style={{ fontFamily: 'MedievalSharp, serif' }}>
            Active Quest:
          </span>{' '}
          Explore all locations &nbsp;
          <span className="text-[#CD7F32] font-bold">({visitedCount}/4)</span>
          {visitedCount === 4 && (
            <span className="ml-2 text-green-400 font-bold">— Quest Complete! ⚔</span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
