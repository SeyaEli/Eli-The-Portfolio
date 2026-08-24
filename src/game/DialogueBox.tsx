'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DialogueBoxProps {
  npcName: string;
  npcIcon: string;
  children: ReactNode;
}

export default function DialogueBox({ npcName, npcIcon, children }: DialogueBoxProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50 pointer-events-none"
    >
      <div
        className="relative bg-[#0A0812]/96 border-4 border-[#CD7F32] p-5 flex gap-4 pointer-events-auto"
        style={{
          clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
          boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.15), 0 -4px 30px rgba(0,0,0,0.7)',
        }}
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

        {/* NPC Avatar */}
        <div className="flex-shrink-0">
          <div
            className="w-16 h-16 flex items-center justify-center text-3xl border-2 border-[#CD7F32]"
            style={{
              background: 'linear-gradient(160deg, #D4AF37, #8B5E00)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            {npcIcon}
          </div>
        </div>

        {/* Dialogue Content */}
        <div className="flex-1 min-w-0">
          <div
            className="text-[#D4AF37] font-bold text-lg mb-1.5 leading-tight"
            style={{ fontFamily: 'MedievalSharp, serif', textShadow: '0 0 10px rgba(212,175,55,0.4)' }}
          >
            {npcName}
          </div>
          <div className="text-[#F4E8D0]/90 text-sm font-cinzel leading-relaxed">
            {children}
          </div>
        </div>

        {/* Blinking cursor indicator */}
        <div className="absolute bottom-3 right-6 flex items-center gap-1">
          <motion.span
            className="text-[#D4AF37] text-xs font-cinzel"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ▼
          </motion.span>
        </div>

        {/* Corner gems */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-[#D4AF37] rotate-45 opacity-80" />
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#D4AF37] rotate-45 opacity-80" />
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#D4AF37] rotate-45 opacity-80" />
        <div className="absolute bottom-2 right-8 w-3 h-3 bg-[#D4AF37] rotate-45 opacity-80" />
      </div>
    </motion.div>
  );
}
