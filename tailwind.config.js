/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/game/**/*.{js,ts,jsx,tsx,mdx}',
    './src/locations/**/*.{js,ts,jsx,tsx,mdx}',
    './src/store/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sounds/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        medieval: {
          gold: '#D4AF37',
          goldLight: '#F5D060',
          darkGold: '#B8941E',
          bronze: '#CD7F32',
          parchment: '#F4E8D0',
          darkParchment: '#C8A060',
          amber: '#EAD9A8',
          stone: '#4A4A4A',
          darkStone: '#2C2C2C',
          brown: '#8B7355',
          darkBrown: '#5C4A3A',
          blood: '#8B0000',
          forest: '#1B4D3E',
          night: '#0F0F1E',
          midnight: '#1a1a2e',
          dusk: '#2d2d44',
        },
      },
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        fraktur: ['UnifrakturMaguntia', 'cursive'],
      },
      backgroundImage: {
        'parchment-texture': "url('/textures/parchment.png')",
        'stone-texture': "url('/textures/stone.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'golden-pulse': 'goldenPulse 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        goldenPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(212,175,55,0.6)' },
          '50%': { textShadow: '0 0 40px rgba(212,175,55,1), 0 0 60px rgba(212,175,55,0.5)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
          '75%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
