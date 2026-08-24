'use client';

export default function MapTerrain() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="mt-lake" cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#3a7aa8" stopOpacity="0.78" />
          <stop offset="55%" stopColor="#1e4d6e" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#0d2030" stopOpacity="0.88" />
        </radialGradient>
        <radialGradient id="mt-lake-sheen" cx="32%" cy="28%" r="55%">
          <stop offset="0%" stopColor="#9ed4f0" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#9ed4f0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mt-swamp" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#2a3810" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1a2510" stopOpacity="0.35" />
        </radialGradient>
        <pattern id="mt-road-cobble" x="0" y="0" width="2" height="1.2" patternUnits="userSpaceOnUse">
          <rect x="0.1" y="0.1" width="0.85" height="0.9" rx="0.12" fill="#9a8468" opacity="0.7" />
          <rect x="1.05" y="0.1" width="0.85" height="0.9" rx="0.12" fill="#8a7458" opacity="0.65" />
        </pattern>
        <pattern id="mt-farmA" x="0" y="0" width="3" height="1.4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.7" x2="3" y2="0.7" stroke="#7a6540" strokeWidth="0.5" opacity="0.45" />
        </pattern>
        <pattern id="mt-farmB" x="0" y="0" width="2.5" height="1.4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.7" x2="2.5" y2="0.7" stroke="#607030" strokeWidth="0.45" opacity="0.42" />
        </pattern>
        <filter id="mt-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.3" stdDeviation="0.5" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <filter id="mt-glow-water">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ---- Parchment stains / age marks ---- */}
      <ellipse cx="8" cy="8" rx="18" ry="14" fill="url(#mt-stain-tl)" opacity="0.18" />
      <ellipse cx="92" cy="92" rx="18" ry="14" fill="#6a3808" opacity="0.12" />
      <ellipse cx="92" cy="8" rx="14" ry="12" fill="#7a4e12" opacity="0.1" />
      <ellipse cx="8" cy="92" rx="14" ry="12" fill="#6a3808" opacity="0.1" />
      <ellipse cx="35" cy="55" rx="12" ry="8" fill="#5a3008" opacity="0.04" />
      <ellipse cx="72" cy="40" rx="10" ry="6" fill="#4a2800" opacity="0.05" />

      {/* ---- Distant hazy mountains (atmospheric perspective) ---- */}
      <g opacity="0.16">
        <path d="M56 27 L61 18 L66 27 Z" fill="#8fa8b8" />
        <path d="M62 27 L67 15 L72 27 Z" fill="#9ab5c5" />
        <path d="M69 27 L74 19 L79 27 Z" fill="#8fa8b8" />
        <path d="M76 27 L80 22 L84 27 Z" fill="#9ab5c5" />
        <path d="M7 31 L11 24 L15 31 Z" fill="#8fa8b8" />
        <path d="M12 31 L16 27 L20 31 Z" fill="#9ab5c5" />
      </g>

      {/* ---- Main mountain range top-right (near Castle) ---- */}
      <path d="M55 27 L62 16 L69 27 Z" fill="#2c1c0e" opacity="0.74" />
      <path d="M61 27 L68 9  L75 27 Z" fill="#2c1c0e" opacity="0.8" />
      <path d="M68 27 L74 13 L80 27 Z" fill="#2c1c0e" opacity="0.74" />
      <path d="M75 27 L79 18 L84 27 Z" fill="#2c1c0e" opacity="0.68" />
      <path d="M81 27 L84 22 L88 27 Z" fill="#2c1c0e" opacity="0.58" />

      <path d="M55 27 L62 16 L65.5 27 Z" fill="#5a3c28" />
      <path d="M61 27 L68 9  L71.5 27 Z" fill="#5a3c28" />
      <path d="M68 27 L74 13 L77.5 27 Z" fill="#5a3c28" />
      <path d="M75 27 L79 18 L82   27 Z" fill="#5a3c28" />

      <path d="M62 16 L65.5 27 L69 27 Z" fill="#8c7060" opacity="0.85" />
      <path d="M68 9  L71.5 27 L75 27 Z" fill="#9c8070" opacity="0.82" />
      <path d="M74 13 L77.5 27 L80 27 Z" fill="#8c7060" opacity="0.88" />
      <path d="M79 18 L82   27 L84 27 Z" fill="#9c8070" opacity="0.78" />

      <line x1="63"   y1="22"   x2="65"   y2="26.5" stroke="#1c1008" strokeWidth="0.22" opacity="0.5" />
      <line x1="65.5" y1="18"   x2="67.5" y2="24"   stroke="#1c1008" strokeWidth="0.18" opacity="0.42" />
      <line x1="69"   y1="15"   x2="71"   y2="22"   stroke="#1c1008" strokeWidth="0.22" opacity="0.5" />
      <line x1="71.5" y1="12"   x2="73.5" y2="20"   stroke="#1c1008" strokeWidth="0.18" opacity="0.42" />
      <line x1="75"   y1="18"   x2="77"   y2="24"   stroke="#1c1008" strokeWidth="0.22" opacity="0.46" />
      <line x1="80.5" y1="21.5" x2="82.5" y2="25.5" stroke="#1c1008" strokeWidth="0.16" opacity="0.38" />

      <path d="M57 24  L62   23"   stroke="#3a2818" strokeWidth="0.22" opacity="0.38" fill="none" />
      <path d="M63 19.5 L68  18.5" stroke="#3a2818" strokeWidth="0.2"  opacity="0.35" fill="none" />
      <path d="M70 16  L75.5 15"   stroke="#3a2818" strokeWidth="0.18" opacity="0.3"  fill="none" />

      {/* Snow caps */}
      <path d="M68 9  L71   14.5 L65   14.5 Z" fill="#f2f0ea" opacity="0.93" />
      <path d="M74 13 L76.5 18   L71.5 18   Z" fill="#f2f0ea" opacity="0.88" />
      <path d="M62 16 L64   21   L60   21   Z" fill="#f2f0ea" opacity="0.76" />
      <path d="M79 18 L81   22.5 L77   22.5 Z" fill="#f2f0ea" opacity="0.7"  />
      <path d="M84 22 L85.5 25   L82.5 25   Z" fill="#f2f0ea" opacity="0.6"  />
      <path d="M68.6 9.5 L70.2 14 L68 14 Z"   fill="white"   opacity="0.55" />
      <path d="M74.5 13.5 L75.8 17 L74 17 Z"  fill="white"   opacity="0.5"  />

      {/* Base rubble */}
      <ellipse cx="58"   cy="26.7" rx="1.6" ry="0.62" fill="#4a3020" opacity="0.62" />
      <ellipse cx="64"   cy="26.7" rx="1.3" ry="0.55" fill="#5a4030" opacity="0.52" />
      <ellipse cx="71"   cy="26.7" rx="1.9" ry="0.7"  fill="#4a3020" opacity="0.6"  />
      <ellipse cx="78"   cy="26.7" rx="1.4" ry="0.55" fill="#5a4030" opacity="0.5"  />
      <ellipse cx="83.5" cy="26.7" rx="1.1" ry="0.48" fill="#4a3020" opacity="0.44" />

      {/* ---- Secondary mountains top-left ---- */}
      <path d="M5  32 L10 22 L15 32 Z" fill="#3a2818" opacity="0.66" />
      <path d="M10 32 L15 25 L20 32 Z" fill="#3a2818" opacity="0.6"  />
      <path d="M16 32 L20 27 L24 32 Z" fill="#2e1e10" opacity="0.52" />
      <path d="M10 22 L12.5 32 L15 32 Z" fill="#6a4e40" opacity="0.72" />
      <path d="M15 25 L17.5 32 L20 32 Z" fill="#6a4e40" opacity="0.66" />
      <path d="M10 22 L12 26.5 L8  26.5 Z" fill="#eae8e0" opacity="0.68" />
      <path d="M15 25 L17 28.5 L13 28.5 Z" fill="#eae8e0" opacity="0.58" />
      <line x1="11"   y1="27"   x2="13.5" y2="31.5" stroke="#1c1008" strokeWidth="0.2"  opacity="0.4"  />
      <line x1="16.5" y1="28"   x2="18.5" y2="31.5" stroke="#1c1008" strokeWidth="0.16" opacity="0.35" />
      <ellipse cx="8"    cy="31.7" rx="1.3" ry="0.5"  fill="#4a3020" opacity="0.5"  />
      <ellipse cx="13.5" cy="31.7" rx="1.6" ry="0.54" fill="#3a2010" opacity="0.44" />
      <ellipse cx="19.5" cy="31.7" rx="1.1" ry="0.44" fill="#4a3020" opacity="0.4"  />

      {/* ---- Dense forest left side (near Armory 20,60) ---- */}
      <ellipse cx="11" cy="62" rx="9.5" ry="13.5" fill="#0e2006" opacity="0.3" />
      {/* Back tree row */}
      <circle cx="10"  cy="54" r="2.8" fill="#1a3a0c" opacity="0.72" />
      <circle cx="13"  cy="52" r="3"   fill="#1d4210" opacity="0.76" />
      <circle cx="7.5" cy="55" r="2.4" fill="#163408" opacity="0.68" />
      <circle cx="16"  cy="53" r="2.6" fill="#1a3a0c" opacity="0.7"  />
      <circle cx="6"   cy="57" r="2.1" fill="#1d4210" opacity="0.64" />
      <circle cx="18"  cy="55" r="2.3" fill="#163408" opacity="0.66" />
      {/* Mid tree row */}
      <circle cx="9"   cy="58" r="3.2" fill="#234e14" opacity="0.8"  />
      <circle cx="14"  cy="57" r="2.9" fill="#285818" opacity="0.78" />
      <circle cx="5.5" cy="60" r="2.5" fill="#1f4810" opacity="0.72" />
      <circle cx="17"  cy="59" r="2.7" fill="#234e14" opacity="0.74" />
      <circle cx="12"  cy="61" r="3.1" fill="#285818" opacity="0.8"  />
      <circle cx="7"   cy="63" r="2.8" fill="#1f4810" opacity="0.76" />
      <circle cx="19"  cy="62" r="2.4" fill="#234e14" opacity="0.7"  />
      {/* Front tree row (darkest/biggest) */}
      <circle cx="8.5" cy="65" r="3.4" fill="#0e2806" opacity="0.84" />
      <circle cx="14"  cy="64" r="3.1" fill="#122e08" opacity="0.82" />
      <circle cx="5"   cy="66" r="2.7" fill="#0e2806" opacity="0.76" />
      <circle cx="18.5" cy="65" r="2.9" fill="#122e08" opacity="0.78" />
      <circle cx="11.5" cy="67" r="3.3" fill="#0e2806" opacity="0.82" />
      {/* Tree highlights */}
      <circle cx="8.8"  cy="63.5" r="1.2" fill="#3a7a20" opacity="0.28" />
      <circle cx="14.2" cy="62.5" r="1.0" fill="#3a7a20" opacity="0.26" />
      <circle cx="12"   cy="59.5" r="1.1" fill="#3a7a20" opacity="0.3"  />
      <circle cx="10"   cy="57"   r="0.9" fill="#4a8a28" opacity="0.25" />
      <circle cx="17.5" cy="58"   r="0.9" fill="#3a7a20" opacity="0.26" />

      {/* ---- Smaller forest patch top-left (near Barracks 30,30) ---- */}
      <ellipse cx="27" cy="40" rx="5" ry="6.5" fill="#0e2006" opacity="0.22" />
      <circle cx="25"  cy="37" r="2.2" fill="#1a3a0c" opacity="0.6"  />
      <circle cx="28"  cy="36" r="2.4" fill="#234e14" opacity="0.64" />
      <circle cx="30"  cy="38" r="2.1" fill="#1a3a0c" opacity="0.58" />
      <circle cx="26.5" cy="40" r="2.5" fill="#1d4210" opacity="0.65" />
      <circle cx="29.5" cy="41" r="2.2" fill="#234e14" opacity="0.62" />
      <circle cx="24.5" cy="41.5" r="1.9" fill="#1a3a0c" opacity="0.58" />

      {/* ---- Forest patch bottom (near Tavern 50,85) ---- */}
      <circle cx="33"  cy="79" r="2.4" fill="#1a3a0c" opacity="0.56" />
      <circle cx="37"  cy="78" r="2.7" fill="#234e14" opacity="0.6"  />
      <circle cx="42"  cy="77" r="2.2" fill="#1d4210" opacity="0.54" />
      <circle cx="35.5" cy="81" r="2.5" fill="#1a3a0c" opacity="0.58" />
      <circle cx="40"  cy="80" r="2.3" fill="#234e14" opacity="0.56" />
      <circle cx="60"  cy="78" r="2.1" fill="#1a3a0c" opacity="0.5"  />
      <circle cx="64"  cy="77" r="2.5" fill="#234e14" opacity="0.54" />
      <circle cx="58"  cy="80" r="2.2" fill="#1d4210" opacity="0.5"  />
      <circle cx="62.5" cy="81" r="2.0" fill="#1a3a0c" opacity="0.48" />

      {/* ---- Lake (center-right, between Castle and Quest Board) ---- */}
      <ellipse cx="75" cy="48" rx="10" ry="7" fill="url(#mt-lake)" />
      <ellipse cx="75" cy="48" rx="10" ry="7" fill="url(#mt-lake-sheen)" />
      {/* Shoreline edge */}
      <ellipse cx="75" cy="48" rx="10" ry="7"   fill="none" stroke="#2d6a8c" strokeWidth="0.4"  opacity="0.55" />
      <ellipse cx="75" cy="48" rx="9.2" ry="6.4" fill="none" stroke="#5a9ac0" strokeWidth="0.25" opacity="0.35" />
      {/* Lake ripples */}
      <ellipse cx="74"   cy="47"   rx="3.5" ry="1.8" fill="none" stroke="#7ab8d8" strokeWidth="0.22" opacity="0.4"  />
      <ellipse cx="76"   cy="49.5" rx="2.2" ry="1.0" fill="none" stroke="#7ab8d8" strokeWidth="0.18" opacity="0.35" />
      <ellipse cx="71.5" cy="48.5" rx="1.6" ry="0.8" fill="none" stroke="#9ad0e8" strokeWidth="0.15" opacity="0.3"  />
      <ellipse cx="78"   cy="46.5" rx="1.8" ry="0.7" fill="none" stroke="#9ad0e8" strokeWidth="0.15" opacity="0.3"  />
      {/* Lake sparkle highlights */}
      <ellipse cx="72" cy="45.5" rx="0.8" ry="0.3" fill="#d0eef8" opacity="0.55" />
      <ellipse cx="78" cy="44.5" rx="0.6" ry="0.25" fill="#e0f4fc" opacity="0.5"  />
      <ellipse cx="75" cy="43.5" rx="0.5" ry="0.22" fill="#d0eef8" opacity="0.45" />
      {/* "The Silver Lake" label area */}
      <text x="75" y="49.5" textAnchor="middle" fill="#c8dde8" fontSize="2.1" fontStyle="italic" opacity="0.7" fontFamily="Cinzel, serif">Silver Mere</text>

      {/* ---- Swamp patch (left of Quest Board) ---- */}
      <ellipse cx="62" cy="68" rx="7" ry="4.5" fill="url(#mt-swamp)" />
      <ellipse cx="62" cy="68" rx="7" ry="4.5" fill="none" stroke="#3a4818" strokeWidth="0.35" opacity="0.4" />
      {/* Swamp reeds */}
      <line x1="57"  y1="68"   x2="57"  y2="64.5" stroke="#4a5820" strokeWidth="0.4" opacity="0.55" />
      <line x1="58.5" y1="69"  x2="58.5" y2="65"  stroke="#3a4818" strokeWidth="0.35" opacity="0.5" />
      <line x1="60"  y1="67.5" x2="60"  y2="64"   stroke="#4a5820" strokeWidth="0.4" opacity="0.55" />
      <line x1="64"  y1="68.5" x2="64"  y2="65"   stroke="#3a4818" strokeWidth="0.35" opacity="0.5" />
      <line x1="66"  y1="67.5" x2="66"  y2="64.5" stroke="#4a5820" strokeWidth="0.4" opacity="0.52" />
      <ellipse cx="57"   cy="64.4" rx="0.7" ry="0.4" fill="#6a7830" opacity="0.65" />
      <ellipse cx="58.5" cy="64.9" rx="0.65" ry="0.38" fill="#5a6828" opacity="0.6" />
      <ellipse cx="60"   cy="63.9" rx="0.7" ry="0.4" fill="#6a7830" opacity="0.65" />
      <ellipse cx="64"   cy="64.9" rx="0.65" ry="0.38" fill="#5a6828" opacity="0.6" />
      <ellipse cx="66"   cy="64.4" rx="0.7" ry="0.38" fill="#6a7830" opacity="0.6" />
      {/* Swamp bubbles */}
      <circle cx="59"  cy="68.5" r="0.4" fill="none" stroke="#5a6820" strokeWidth="0.22" opacity="0.5" />
      <circle cx="63"  cy="69.2" r="0.3" fill="none" stroke="#5a6820" strokeWidth="0.18" opacity="0.45" />
      <circle cx="65.5" cy="68.2" r="0.35" fill="none" stroke="#5a6820" strokeWidth="0.2" opacity="0.48" />

      {/* ---- Winding river — starts BELOW left mountain base (y>33) ---- */}
      {/* River base (darkest) */}
      <path d="M3 38 Q8 43 16 49 Q26 56 36 63 Q46 71 56 79 Q66 86 76 91 Q83 94 90 96"
        stroke="#1a3a58" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* River mid */}
      <path d="M3 38 Q8 43 16 49 Q26 56 36 63 Q46 71 56 79 Q66 86 76 91 Q83 94 90 96"
        stroke="#2e6088" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.62" />
      {/* River surface highlight */}
      <path d="M3 38 Q8 43 16 49 Q26 56 36 63 Q46 71 56 79 Q66 86 76 91 Q83 94 90 96"
        stroke="#6ba8c8" strokeWidth="1.0" fill="none" strokeLinecap="round" opacity="0.38" />
      {/* Inner shimmer line */}
      <path d="M3.5 37.5 Q8.5 42.5 16.5 48.5 Q26.5 55.5 36.5 62.5 Q46.5 70.5 56.5 78.5 Q66.5 85.5 76.5 90.5 Q83.5 93.5 90 95.5"
        stroke="#9ad0e8" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.3" />
      {/* River name */}
      <text x="28" y="53" textAnchor="middle" fill="#3a6080" fontSize="1.6" fontStyle="italic" opacity="0.6" transform="rotate(-35, 28, 53)" fontFamily="Cinzel, serif">Verdant River</text>

      {/* ---- Farmland / cultivated fields (below Barracks, left side) ---- */}
      <rect x="10" y="68" width="14" height="10" rx="0.5" fill="url(#mt-farmA)" opacity="0.6" />
      <rect x="10" y="68" width="14" height="10" rx="0.5" fill="#7a8040" opacity="0.08" />
      <rect x="11" y="79" width="11" height="7"  rx="0.5" fill="url(#mt-farmB)" opacity="0.55" />
      <rect x="11" y="79" width="11" height="7"  rx="0.5" fill="#6a7030" opacity="0.06" />
      {/* Field dividers */}
      <line x1="17"  y1="68" x2="17"  y2="78" stroke="#8a7040" strokeWidth="0.35" opacity="0.45" />
      <line x1="10"  y1="73" x2="24"  y2="73" stroke="#8a7040" strokeWidth="0.35" opacity="0.45" />
      <line x1="16.5" y1="79" x2="16.5" y2="86" stroke="#8a7040" strokeWidth="0.3" opacity="0.4" />
      <line x1="11"  y1="82.5" x2="22" y2="82.5" stroke="#8a7040" strokeWidth="0.3" opacity="0.4" />

      {/* ---- Stone roads / cobblestone paths ---- */}
      {/* Road from Gate (50,10) to Barracks (30,30) */}
      <path d="M50 10 Q42 18 30 30"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M50 10 Q42 18 30 30"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M50 10 Q42 18 30 30"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road from Gate (50,10) to Castle (70,28) */}
      <path d="M50 10 Q58 16 70 28"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M50 10 Q58 16 70 28"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M50 10 Q58 16 70 28"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road from Barracks (30,30) to Armory (20,60) */}
      <path d="M30 30 Q26 43 20 60"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M30 30 Q26 43 20 60"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M30 30 Q26 43 20 60"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road from Castle (70,28) to Quest Board (80,62) */}
      <path d="M70 28 Q76 42 80 62"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M70 28 Q76 42 80 62"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M70 28 Q76 42 80 62"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road from Armory (20,60) to Tavern (50,85) */}
      <path d="M20 60 Q32 70 50 85"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M20 60 Q32 70 50 85"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M20 60 Q32 70 50 85"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road from Quest Board (80,62) to Tavern (50,85) */}
      <path d="M80 62 Q68 72 50 85"
        stroke="#7a6040" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M80 62 Q68 72 50 85"
        stroke="#9a8060" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="0.8,1.0" opacity="0.5" />
      <path d="M80 62 Q68 72 50 85"
        stroke="#c0a880" strokeWidth="0.45" fill="none" strokeLinecap="round" opacity="0.28" />

      {/* Road edge stones */}
      <circle cx="40"   cy="19.5" r="0.55" fill="#6a5838" opacity="0.5" />
      <circle cx="43"   cy="16.5" r="0.45" fill="#7a6848" opacity="0.45" />
      <circle cx="36.5" cy="23.5" r="0.5"  fill="#6a5838" opacity="0.48" />
      <circle cx="60"   cy="18.5" r="0.55" fill="#6a5838" opacity="0.5" />
      <circle cx="63.5" cy="22"   r="0.45" fill="#7a6848" opacity="0.45" />
      <circle cx="56.5" cy="14.5" r="0.5"  fill="#6a5838" opacity="0.48" />
      <circle cx="26"   cy="42"   r="0.5"  fill="#6a5838" opacity="0.45" />
      <circle cx="23.5" cy="50.5" r="0.45" fill="#7a6848" opacity="0.42" />
      <circle cx="74"   cy="40"   r="0.5"  fill="#6a5838" opacity="0.45" />
      <circle cx="77"   cy="50.5" r="0.45" fill="#7a6848" opacity="0.42" />
      <circle cx="35"   cy="71.5" r="0.5"  fill="#6a5838" opacity="0.45" />
      <circle cx="40.5" cy="76.5" r="0.45" fill="#7a6848" opacity="0.42" />
      <circle cx="65"   cy="72"   r="0.5"  fill="#6a5838" opacity="0.45" />
      <circle cx="60"   cy="77"   r="0.45" fill="#7a6848" opacity="0.42" />

      {/* ---- Rolling hills ---- */}
      <ellipse cx="48" cy="90" rx="15" ry="6"  fill="#5a4830" opacity="0.28" />
      <ellipse cx="54" cy="91" rx="12" ry="5"  fill="#6a5840" opacity="0.24" />
      <ellipse cx="45" cy="92" rx="10" ry="4"  fill="#5a4830" opacity="0.2"  />
      <ellipse cx="85" cy="80" rx="10" ry="5.5" fill="#5a4830" opacity="0.22" />
      <ellipse cx="88" cy="82" rx="7"  ry="4"  fill="#6a5840" opacity="0.18" />

      {/* ---- Scattered rocks and boulders ---- */}
      <ellipse cx="34"   cy="55"   rx="1.8" ry="1.1" fill="#4a3828" opacity="0.52" />
      <ellipse cx="33.5" cy="54.6" rx="0.9" ry="0.4" fill="#7a6858" opacity="0.3"  />
      <ellipse cx="88"   cy="72"   rx="1.5" ry="0.9" fill="#4a3828" opacity="0.45" />
      <ellipse cx="87.5" cy="71.6" rx="0.7" ry="0.3" fill="#7a6858" opacity="0.25" />
      <ellipse cx="14"   cy="45"   rx="1.3" ry="0.8" fill="#4a3828" opacity="0.42" />
      <ellipse cx="25"   cy="68"   rx="1.2" ry="0.7" fill="#5a4838" opacity="0.4"  />
      <ellipse cx="48"   cy="73"   rx="1.1" ry="0.65" fill="#4a3828" opacity="0.38" />
      <ellipse cx="90"   cy="55"   rx="1.4" ry="0.85" fill="#5a4838" opacity="0.4"  />
      <ellipse cx="85"   cy="35"   rx="1.3" ry="0.75" fill="#4a3828" opacity="0.38" />
      <ellipse cx="5"    cy="72"   rx="1.2" ry="0.7"  fill="#5a4838" opacity="0.36" />
      <ellipse cx="90"   cy="40"   rx="1.0" ry="0.6"  fill="#4a3828" opacity="0.35" />

      {/* ---- Ancient ruins (between Armory and Quest Board) ---- */}
      <rect x="46" y="64" width="3.5" height="4.5" fill="#6a5040" opacity="0.35" />
      <rect x="50.5" y="65.5" width="2.5" height="3" fill="#6a5040" opacity="0.3" />
      <rect x="44.5" y="66" width="2" height="3" fill="#5a4030" opacity="0.28" />
      <line x1="44.5" y1="64.5" x2="50" y2="64.5" stroke="#3a2818" strokeWidth="0.28" opacity="0.4" />
      <line x1="50"   y1="65.5" x2="53" y2="65.5" stroke="#3a2818" strokeWidth="0.25" opacity="0.35" />
      <rect x="45.5" y="63.5" width="0.6" height="3.5" fill="#7a6050" opacity="0.45" />
      <rect x="48.5" y="63"   width="0.6" height="4"   fill="#7a6050" opacity="0.45" />
      <rect x="51"   y="64.5" width="0.5" height="3.2" fill="#7a6050" opacity="0.4"  />

      {/* ---- Scattered grass blades ---- */}
      <g stroke="#4a6030" strokeWidth="0.28" fill="none" opacity="0.4">
        <path d="M88 18 Q88.5 16 89 18" />
        <path d="M89.5 17.5 Q90 15.5 90.5 17.5" />
        <path d="M91 19 Q91.5 17 92 19" />
        <path d="M5 40 Q5.5 38 6 40" />
        <path d="M6.5 39 Q7 37 7.5 39" />
        <path d="M35 68 Q35.5 66 36 68" />
        <path d="M36.5 67 Q37 65 37.5 67" />
        <path d="M58 90 Q58.5 88 59 90" />
        <path d="M59.5 89 Q60 87 60.5 89" />
        <path d="M83 92 Q83.5 90 84 92" />
        <path d="M84.5 91.5 Q85 89.5 85.5 91.5" />
        <path d="M44 52 Q44.5 50 45 52" />
        <path d="M90 64 Q90.5 62 91 64" />
        <path d="M3 60 Q3.5 58 4 60" />
        <path d="M3.5 62 Q4 60 4.5 62" />
      </g>

      {/* ---- Map edge vignette ---- */}
      <rect x="0" y="0" width="100" height="100"
        fill="none"
        stroke="#5a3808"
        strokeWidth="0.5"
        opacity="0.15"
      />

      {/* ---- Decorative corner flourishes ---- */}
      <g opacity="0.35" fill="none" stroke="#7a5828" strokeWidth="0.4">
        <path d="M2 2 Q5 2 5 5" />
        <path d="M2 2 Q2 5 5 5" />
        <path d="M98 2 Q95 2 95 5" />
        <path d="M98 2 Q98 5 95 5" />
        <path d="M2 98 Q5 98 5 95" />
        <path d="M2 98 Q2 95 5 95" />
        <path d="M98 98 Q95 98 95 95" />
        <path d="M98 98 Q98 95 95 95" />
      </g>
    </svg>
  );
}
