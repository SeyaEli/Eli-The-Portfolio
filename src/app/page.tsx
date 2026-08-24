'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'
import { soundManager } from '@/sounds/soundManager'
import GameIntro from '@/game/GameIntro'
import CharacterSelect from '@/game/CharacterSelect'
import KingdomMap from '@/game/KingdomMap'
import Castle from '@/locations/Castle'
import Armory from '@/locations/Armory'
import QuestBoard from '@/locations/QuestBoard'
import Tavern from '@/locations/Tavern'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const { screen, visitedLocations } = useGameStore();

  useEffect(() => {
    soundManager.init();
    console.log('Current screen:', screen);
    console.log('Visited locations:', visitedLocations);
  }, [screen, visitedLocations]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      {screen === 'intro' && <GameIntro />}
      {screen === 'character-select' && <CharacterSelect />}
      {screen === 'map' && <KingdomMap />}
      {screen === 'castle' && <Castle />}
      {screen === 'armory' && <Armory />}
      {screen === 'quests' && <QuestBoard />}
      {screen === 'tavern' && <Tavern />}
    </main>
  )
}
