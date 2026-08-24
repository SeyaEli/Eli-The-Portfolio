# 🎮 QUICK START GUIDE

## ⚡ Start Playing NOW

```bash
cd portfolio-nextjs
npm run dev
```

**Open:** http://localhost:3000

---

## 🎯 Game Flow (30 seconds)

1. **Click "START GAME"**
2. **Choose a character** (Warrior, Mage, Rogue, Paladin, or Ranger)
3. **Click locations on map** to explore
4. **Click projects** to complete quests (confetti!)
5. **Watch progress bar** fill up

---

## 🗺️ Map Locations

| Icon | Location | Content |
|------|----------|---------|
| 🏰 | Castle | About Me |
| ⚔️ | Armory | Skills |
| 📜 | Quest Board | Projects |
| 🍺 | Tavern | Contact |

---

## 🎮 Controls

- **Click** = Navigate
- **Hover** = Glow effect
- **MAP button** = Return to map
- **🔊 button** = Toggle sound

---

## 📊 Progress System

- Visit location = **+25%**
- View project = **+10%**
- Max = **100%**

---

## 🔧 Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Install deps
npm install
```

---

## 📁 Key Files

```
src/
├── game/              # Game screens
├── locations/         # 4 locations
├── store/             # Game state
└── sounds/            # Audio system

public/
└── sounds/            # Add MP3 files here (optional)
```

---

## 🎨 Character Classes

- ⚔️ **Warrior** - Strength
- 🔮 **Mage** - Intelligence  
- 🗡️ **Rogue** - Agility
- 🛡️ **Paladin** - Wisdom
- 🏹 **Ranger** - Dexterity

---

## 🔊 Optional: Add Sounds

Place in `public/sounds/`:
- `ui-hover.mp3`
- `ui-click.mp3`
- `map-open.mp3`
- `quest-complete.mp3`
- `ambient.mp3`

**Free sounds:** Freesound.org, Zapsplat.com

---

## 🐛 Quick Fixes

**Build error?**
```bash
npm install
```

**State stuck?**
```javascript
localStorage.clear()
```

**Port in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

---

## 📚 Documentation

- `GAME_SETUP.md` - Full setup guide
- `GAME_FLOW.md` - Visual diagrams
- `IMPLEMENTATION_COMPLETE.md` - What was built

---

## 🚀 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build Locally
```bash
npm run build
npm start
```

---

## ✨ Features

✅ 5 character classes  
✅ Interactive map  
✅ 4 explorable locations  
✅ Progress tracking  
✅ Quest system  
✅ Confetti effects  
✅ Save/load state  
✅ Sound system  
✅ Medieval UI  
✅ Smooth animations  

---

## 🎯 What Recruiters Will See

1. **Unique presentation** - Not another boring portfolio
2. **Technical skills** - Modern React, TypeScript, state management
3. **Game development** - Interactive experience design
4. **Attention to detail** - Polished UI/UX
5. **Creativity** - Memorable and engaging

---

## 🏆 You're Ready!

Your portfolio is now a **fully playable RPG game** that will blow recruiters away!

**Start the adventure:** `npm run dev`

---

**⚔️ Good luck on your quest, developer! 🏰**
