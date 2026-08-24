'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { soundManager } from '@/sounds/soundManager';
import { useState, useEffect } from 'react';
import MapTerrain from './MapTerrain';

const locations = [
  { id: 'intro',    name: 'Kingdom Gate',  icon: '🚪', x: 50, y: 10, desc: 'Enter the Realm',  label: 'Kingdom Gate'    },
  { id: 'barracks', name: 'Barracks',      icon: '🛡️', x: 30, y: 30, desc: 'Choose Your Class', label: 'Training Barracks' },
  { id: 'castle',   name: 'Castle',        icon: '🏰', x: 70, y: 28, desc: 'About Me',          label: 'Throne Room'     },
  { id: 'armory',   name: 'Armory',        icon: '⚔️', x: 20, y: 60, desc: 'My Skills',         label: 'The Armory'      },
  { id: 'quests',   name: 'Quest Board',   icon: '📜', x: 80, y: 62, desc: 'My Projects',       label: 'Quest Board'     },
  { id: 'tavern',   name: 'Tavern',        icon: '🍺', x: 50, y: 85, desc: 'Contact Me',        label: 'The Tavern'      },
];

/* Decorative compass rose SVG */
function CompassRose() {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68">
      {/* Outer ring */}
      <circle cx="34" cy="34" r="32" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7" />
      <circle cx="34" cy="34" r="27" fill="none" stroke="#CD7F32" strokeWidth="0.6" opacity="0.45" />
      {/* Tick marks */}
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i / 32) * Math.PI * 2;
        const isMajor = i % 8 === 0;
        const r1 = 27, r2 = isMajor ? 22 : 24.5;
        return (
          <line
            key={i}
            x1={34 + r1 * Math.sin(angle)}
            y1={34 - r1 * Math.cos(angle)}
            x2={34 + r2 * Math.sin(angle)}
            y2={34 - r2 * Math.cos(angle)}
            stroke="#D4AF37"
            strokeWidth={isMajor ? 0.9 : 0.45}
            opacity={isMajor ? 0.8 : 0.4}
          />
        );
      })}
      {/* N arrow (gold) */}
      <path d="M34 4 L37 30 L34 33 L31 30 Z" fill="#D4AF37" />
      <path d="M34 4 L36 19 L34 22 Z"         fill="white" opacity="0.45" />
      {/* S arrow (bronze) */}
      <path d="M34 64 L37 38 L34 35 L31 38 Z" fill="#8B7355" opacity="0.85" />
      {/* E/W arrows */}
      <path d="M64 34 L38 37 L35 34 L38 31 Z" fill="#CD7F32" opacity="0.75" />
      <path d="M4  34 L30 37 L33 34 L30 31 Z" fill="#CD7F32" opacity="0.75" />
      {/* Diagonal arrows */}
      <path d="M57 11 L38 30 L35 27 L34 24 Z" fill="#D4AF37" opacity="0.4" />
      <path d="M11 57 L30 38 L33 41 L34 44 Z" fill="#D4AF37" opacity="0.4" />
      <path d="M57 57 L38 38 L41 35 L44 34 Z" fill="#D4AF37" opacity="0.4" />
      <path d="M11 11 L30 30 L27 33 L24 34 Z" fill="#D4AF37" opacity="0.4" />
      {/* Center gem */}
      <circle cx="34" cy="34" r="4.5" fill="#D4AF37" />
      <circle cx="34" cy="34" r="2.5" fill="#F5D060" />
      <circle cx="34" cy="34" r="1.2" fill="white" opacity="0.6" />
      {/* Cardinal labels */}
      <text x="34" y="12"  textAnchor="middle" fill="#D4AF37" fontSize="7" fontWeight="bold" fontFamily="Cinzel,serif">N</text>
      <text x="34" y="61"  textAnchor="middle" fill="#8B7355" fontSize="6" fontFamily="Cinzel,serif">S</text>
      <text x="60" y="37"  textAnchor="middle" fill="#CD7F32" fontSize="6" fontFamily="Cinzel,serif">E</text>
      <text x="8"  y="37"  textAnchor="middle" fill="#CD7F32" fontSize="6" fontFamily="Cinzel,serif">W</text>
    </svg>
  );
}

/* Corner ornament SVG */
function CornerOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52"
      style={{ transform: flip ? 'scale(-1,1)' : 'none' }}
    >
      <path d="M2 2 L20 2 Q22 2 22 4 L22 14" stroke="#CD7F32" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M2 2 L2 20 Q2 22 4 22 L14 22"  stroke="#CD7F32" strokeWidth="1.2" fill="none" opacity="0.7" />
      <circle cx="2"  cy="2"  r="2.2" fill="#D4AF37" opacity="0.8" />
      <circle cx="22" cy="2"  r="1.4" fill="#CD7F32" opacity="0.65" />
      <circle cx="2"  cy="22" r="1.4" fill="#CD7F32" opacity="0.65" />
      <path d="M6 6 Q10 6 10 10" stroke="#8B7355" strokeWidth="0.7" fill="none" opacity="0.55" />
      <path d="M6 6 Q6 10 10 10" stroke="#8B7355" strokeWidth="0.7" fill="none" opacity="0.55" />
      <rect x="14" y="2"  width="4" height="1.2" rx="0.3" fill="#CD7F32" opacity="0.45" />
      <rect x="2"  y="14" width="1.2" height="4" rx="0.3" fill="#CD7F32" opacity="0.45" />
    </svg>
  );
}

/* Map legend */
function MapLegend() {
  const items = [
    { color: '#3a7aa8', label: 'Water' },
    { color: '#234e14', label: 'Forest' },
    { color: '#5a3c28', label: 'Mountains' },
    { color: '#9a8060', label: 'Roads' },
    { color: '#607030', label: 'Fields' },
  ];
  return (
    <div
      className="absolute bottom-3 left-3 z-20 pointer-events-none"
      style={{
        background: 'rgba(20,14,8,0.82)',
        border: '1.5px solid #8B7355',
        padding: '7px 10px',
        clipPath: 'polygon(5px 0,100% 0,100% calc(100% - 5px),calc(100% - 5px) 100%,0 100%,0 5px)',
      }}
    >
      <div className="text-[8px] tracking-widest uppercase text-[#D4AF37] font-bold mb-1.5" style={{ fontFamily: 'Cinzel,serif' }}>
        Legend
      </div>
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-1.5 mb-0.5">
          <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: color, opacity: 0.85 }} />
          <span className="text-[8px] text-[#E8DCC8] tracking-wide" style={{ fontFamily: 'Cinzel,serif' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function KingdomMap() {
  const { setScreen, visitLocation, visitedLocations, lastLocation } = useGameStore();
  const [travelingTo, setTravelingTo]     = useState<string | null>(null);
  const [hoveredLoc,  setHoveredLoc]      = useState<string | null>(null);
  const [animatedPosition, setAnimatedPosition] = useState({ x: 50, y: 10 });

  useEffect(() => {
    const loc = locations.find(l => l.id === lastLocation);
    if (loc && !travelingTo) setAnimatedPosition({ x: loc.x, y: loc.y });
  }, [lastLocation, travelingTo]);

  const handleLocationClick = (locationId: string) => {
    if (travelingTo) return;
    const targetLoc = locations.find(l => l.id === locationId);
    if (!targetLoc) return;

    setTravelingTo(locationId);
    soundManager.play('mapOpen');
    setAnimatedPosition({ x: targetLoc.x, y: targetLoc.y });

    setTimeout(() => {
      visitLocation(locationId);
      setTravelingTo(null);
      if (locationId === 'intro')    setScreen('intro');
      else if (locationId === 'barracks') setScreen('character-select');
      else setScreen(locationId as any);
    }, 1900);
  };

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a0f08 0%, #2d1c10 40%, #1a0f08 100%)' }}
    >
      {/* Ambient vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)' }}
      />

      {/* ── TOP BAR ── */}
      <div className="relative z-20 flex items-center justify-between px-5 pt-4 pb-3 flex-shrink-0">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setScreen('intro')}
          className="px-5 py-2 text-sm font-bold text-[#E8DCC8] border-2 border-[#8B7355] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          style={{
            background: 'linear-gradient(to bottom, #3a3020, #2a2015)',
            clipPath: 'polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => soundManager.play('hover')}
        >
          ← Return to Realm
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#D4AF37] text-center"
          style={{
            fontFamily: 'MedievalSharp, serif',
            textShadow: '0 0 24px rgba(212,175,55,0.9), 0 4px 8px rgba(0,0,0,0.9)',
          }}
        >
          ⚜ Kingdom Map ⚜
        </motion.h2>

        <div className="w-[148px]" />
      </div>

      {/* ── MAP CONTAINER ── */}
      <div className="flex-1 px-5 pb-5 min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full overflow-hidden"
          style={{
            /* Thick layered frame */
            border: '3px solid #5a3808',
            outline: '2px solid #8B5E00',
            outlineOffset: '3px',
            boxShadow: `
              inset 0 0 120px rgba(0,0,0,0.55),
              inset 0 0 40px rgba(90,40,8,0.4),
              0 0 0 6px #3a2408,
              0 0 0 9px #7a5020,
              0 0 60px rgba(0,0,0,0.7)
            `,
            /* Rich parchment background */
            background: `
              radial-gradient(ellipse 60% 55% at 18% 22%, rgba(139,69,19,0.22) 0%, transparent 55%),
              radial-gradient(ellipse 55% 50% at 82% 18%, rgba(101,67,33,0.18) 0%, transparent 50%),
              radial-gradient(ellipse 70% 35% at 50% 0%,  rgba(34,85,34,0.2)   0%, transparent 100%),
              radial-gradient(ellipse 40% 35% at 18% 62%, rgba(110,75,18,0.2)  0%, transparent 100%),
              radial-gradient(ellipse 35% 35% at 82% 58%, rgba(25,55,90,0.14)  0%, transparent 100%),
              radial-gradient(ellipse 50% 30% at 50% 88%, rgba(110,55,15,0.22) 0%, transparent 100%),
              linear-gradient(155deg, #EDD9A8 0%, #D4C090 18%, #C8AC7A 38%, #B89860 58%, #A08050 78%, #8B6F47 100%)
            `,
          }}
        >
          {/* Noise / parchment grain overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.22]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Fine linen texture */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg,   transparent, transparent 3px, rgba(100,70,30,0.04) 3px, rgba(100,70,30,0.04) 4px),
                repeating-linear-gradient(90deg,  transparent, transparent 3px, rgba(100,70,30,0.03) 3px, rgba(100,70,30,0.03) 4px)
              `,
            }}
          />

          {/* Edge aging / burn marks */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 55%, rgba(40,15,5,0.5) 100%)' }}
          />

          {/* Detailed SVG terrain */}
          <MapTerrain />

          {/* ── Map title scroll ── */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 pointer-events-none z-10"
          >
            <div
              className="relative px-8 py-2 shadow-xl"
              style={{
                background: 'linear-gradient(to bottom, #F5E8C8, #EAD9A0)',
                border: '2px solid #8B5E00',
                clipPath: 'polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 12px rgba(0,0,0,0.4)',
              }}
            >
              {/* scroll curl ends */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 rounded-full"
                style={{ background: 'linear-gradient(90deg,#c8a060,#e8d090)', border: '1px solid #7a5010' }}
              />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-6 rounded-full"
                style={{ background: 'linear-gradient(270deg,#c8a060,#e8d090)', border: '1px solid #7a5010' }}
              />
              <div
                className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#5a3008]"
                style={{ fontFamily: 'Cinzel, serif', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}
              >
                ⚜ The Kingdom of Code ⚜
              </div>
            </div>
          </motion.div>

          {/* ── Corner ornaments ── */}
          <div className="absolute top-1 left-1 pointer-events-none z-10 opacity-70">
            <CornerOrnament />
          </div>
          <div className="absolute top-1 right-1 pointer-events-none z-10 opacity-70">
            <CornerOrnament flip />
          </div>
          <div className="absolute bottom-1 left-1 pointer-events-none z-10 opacity-70"
            style={{ transform: 'scale(1,-1)' }}>
            <CornerOrnament />
          </div>
          <div className="absolute bottom-1 right-1 pointer-events-none z-10 opacity-70"
            style={{ transform: 'scale(-1,-1)' }}>
            <CornerOrnament />
          </div>

          {/* ── Compass rose ── */}
          <motion.div
            className="absolute bottom-3 right-3 select-none pointer-events-none z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CompassRose />
          </motion.div>

          {/* ── Legend ── */}
          <MapLegend />

          {/* ── Scale bar ── */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-center gap-0.5">
            <div className="flex items-center">
              <div className="w-16 h-2 flex">
                <div className="flex-1 bg-[#5a3808] border border-[#3a2004] opacity-80" />
                <div className="flex-1 bg-[#e8d090] border border-[#3a2004] opacity-80" />
                <div className="flex-1 bg-[#5a3808] border border-[#3a2004] opacity-80" />
                <div className="flex-1 bg-[#e8d090] border border-[#3a2004] opacity-80" />
              </div>
            </div>
            <span className="text-[7px] text-[#5a3808] tracking-widest opacity-75" style={{ fontFamily: 'Cinzel,serif' }}>
              LEAGUES
            </span>
          </div>

          {/* ── Travel path SVG overlay ── */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-sm">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <AnimatePresence>
              {travelingTo && (() => {
                const from = locations.find(l => l.id === lastLocation);
                const to   = locations.find(l => l.id === travelingTo);
                if (!from || !to) return null;
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2 - 12;
                return (
                  <>
                    {/* Glow halo */}
                    <motion.path
                      key="travel-path-halo"
                      d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                      stroke="#FFD700"
                      strokeWidth="4"
                      fill="none"
                      opacity="0"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.25, 0.25, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.7, ease: 'easeInOut' }}
                      filter="url(#glow)"
                    />
                    {/* Main path */}
                    <motion.path
                      key="travel-path"
                      d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      strokeDasharray="2,1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.7, ease: 'easeInOut' }}
                      filter="url(#glow-sm)"
                    />
                  </>
                );
              })()}
            </AnimatePresence>
          </svg>

          {/* ── Player marker ── */}
          <motion.div
            className="absolute pointer-events-none z-30"
            animate={{ left: `${animatedPosition.x}%`, top: `${animatedPosition.y}%` }}
            transition={{ duration: 1.7, ease: 'easeInOut' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {/* Travelling dust particles */}
            {travelingTo && [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full blur-sm"
                style={{ background: i % 2 ? '#D4AF37' : '#CD7F32' }}
                initial={{ x: 0, y: 0, opacity: 0.9, scale: 1 }}
                animate={{
                  x: [(Math.cos(i * 36 * Math.PI / 180)) * (8 + i * 2),
                      (Math.cos(i * 36 * Math.PI / 180)) * (16 + i * 3)],
                  y: [(Math.sin(i * 36 * Math.PI / 180)) * (8 + i * 2),
                      (Math.sin(i * 36 * Math.PI / 180)) * (16 + i * 3)],
                  opacity: [0.9, 0],
                  scale: [1, 0.2],
                }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08, ease: 'easeOut' }}
              />
            ))}

            {/* Floating player pin */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Shadow blob */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-2.5 rounded-full blur"
                style={{ background: 'rgba(0,0,0,0.35)' }}
                animate={{ scaleX: [1, 0.75, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Avatar */}
              <motion.div
                className="text-4xl drop-shadow-lg relative z-10 select-none"
                animate={{
                  rotate: travelingTo ? [0, 8, -8, 0] : 0,
                  scale:  travelingTo ? [1, 1.12, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 0.45, repeat: travelingTo ? Infinity : 0 },
                  scale:  { duration: 0.3,  repeat: travelingTo ? Infinity : 0 },
                }}
              >
                🤺
              </motion.div>

              {/* "You are here" banner */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div
                  className="px-3 py-1 shadow-lg"
                  style={{
                    background: 'linear-gradient(to bottom, #F5E8C8, #EAD9A0)',
                    border: '1.5px solid #8B5E00',
                    clipPath: 'polygon(6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px),0 6px)',
                  }}
                >
                  <span className="text-[10px] font-bold text-[#5a3008]" style={{ fontFamily: 'Cinzel, serif' }}>
                    ⚜ You&apos;re Here ⚜
                  </span>
                </div>
                {/* Arrow tip */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0
                  border-l-[5px] border-r-[5px] border-t-[6px]
                  border-l-transparent border-r-transparent border-t-[#8B5E00]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Location markers ── */}
          {locations.map((loc, idx) => (
            <div
              key={loc.id}
              className="absolute"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25 + idx * 0.12, type: 'spring', stiffness: 220, damping: 14 }}
                onClick={() => handleLocationClick(loc.id)}
                onMouseEnter={() => { soundManager.play('hover'); setHoveredLoc(loc.id); }}
                onMouseLeave={() => setHoveredLoc(null)}
                className={`relative cursor-pointer group ${travelingTo ? 'pointer-events-none' : ''}`}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#D4AF37] -z-10"
                  animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: idx * 0.55 }}
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '72px', height: '72px' }}
                />
                {/* Hover glow */}
                <motion.div
                  className="absolute rounded-full bg-[#D4AF37] blur-2xl -z-10"
                  animate={{ opacity: hoveredLoc === loc.id ? 0.45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ inset: '-8px' }}
                />

                {/* Hexagon badge */}
                <motion.div
                  className="relative w-[68px] h-[68px] flex items-center justify-center text-3xl"
                  style={{
                    background: Array.isArray(visitedLocations) && visitedLocations.includes(loc.id)
                      ? 'linear-gradient(160deg,#A8E06A 0%,#78C040 30%,#5CA020 60%,#3A7010 100%)'
                      : 'linear-gradient(160deg,#FFE082 0%,#FFD54F 30%,#FFC107 60%,#FF8F00 100%)',
                    clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                    boxShadow: '0 5px 0 #7a4e00, 0 8px 22px rgba(0,0,0,0.55)',
                    filter: 'drop-shadow(0 2px 5px rgba(255,200,0,0.35))',
                  }}
                  whileHover={{ scale: 1.18, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.93, y: 2 }}
                >
                  <span className="relative z-10 text-2xl">{loc.icon}</span>
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
                    style={{ clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }}
                  />
                </motion.div>

                {/* Visited checkmark */}
                {Array.isArray(visitedLocations) && visitedLocations.includes(loc.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-b from-green-400 to-green-700 border-[1.5px] border-white flex items-center justify-center text-white text-[10px] font-black shadow-lg z-10"
                    style={{ clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }}
                  >
                    ✓
                  </motion.div>
                )}

                {/* Name label */}
                <AnimatePresence>
                  <div className="absolute top-[72px] left-1/2 -translate-x-1/2 text-center pointer-events-none w-36">
                    <div
                      className="px-2 py-0.5 text-[10px] font-bold text-[#D4AF37] border border-[#8B5E00] leading-tight whitespace-nowrap mx-auto inline-block"
                      style={{
                        background: 'rgba(12,8,4,0.9)',
                        clipPath: 'polygon(4px 0,100% 0,calc(100% - 4px) 100%,0 100%)',
                        fontFamily: 'Cinzel, serif',
                      }}
                    >
                      {loc.name}
                    </div>
                    <div
                      className="mt-0.5 px-1.5 py-0.5 text-[8px] font-semibold whitespace-nowrap inline-block"
                      style={{
                        fontFamily: 'Cinzel, serif',
                        background: 'rgba(10,6,2,0.82)',
                        color: '#E8DCC8',
                        border: '1px solid rgba(139,94,0,0.4)',
                      }}
                    >
                      {loc.desc}
                    </div>
                  </div>
                </AnimatePresence>

                {/* Hover tooltip */}
                <AnimatePresence>
                  {hoveredLoc === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.92 }}
                      transition={{ duration: 0.18 }}
                      className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 pointer-events-none"
                    >
                      <div
                        className="px-3 py-1.5 text-[9px] font-semibold text-[#E8DCC8] shadow-xl"
                        style={{
                          background: 'linear-gradient(to bottom, #3a2a18, #241808)',
                          border: '1.5px solid #D4AF37',
                          clipPath: 'polygon(6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px),0 6px)',
                          fontFamily: 'Cinzel, serif',
                        }}
                      >
                        <span className="text-[#D4AF37]">⚜</span> {loc.label} <span className="text-[#D4AF37]">⚜</span>
                        <br />
                        <span className="text-[8px] text-[#C8A880] tracking-wider">{loc.desc}</span>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0
                        border-l-[5px] border-r-[5px] border-t-[6px]
                        border-l-transparent border-r-transparent border-t-[#D4AF37]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}

          {/* Travelling overlay message */}
          <AnimatePresence>
            {travelingTo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
              >
                <div
                  className="px-6 py-3 text-sm font-bold text-[#D4AF37] tracking-widest uppercase text-center"
                  style={{
                    background: 'rgba(10,6,2,0.88)',
                    border: '2px solid #D4AF37',
                    clipPath: 'polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)',
                    fontFamily: 'Cinzel, serif',
                    textShadow: '0 0 12px rgba(212,175,55,0.8)',
                  }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 0.85, repeat: Infinity }}
                  >
                    ✦ Travelling... ✦
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
