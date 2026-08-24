import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CharacterClass = 'warrior' | 'mage' | 'rogue' | 'paladin' | 'ranger';
export type GameScreen = 'intro' | 'character-select' | 'map' | 'castle' | 'armory' | 'quests' | 'tavern' | 'barracks';

interface GameState {
  screen: GameScreen;
  character: CharacterClass | null;
  visitedLocations: string[];
  completedQuests: string[];
  progress: number;
  soundEnabled: boolean;
  lastLocation: string;
  setScreen: (screen: GameScreen) => void;
  setCharacter: (character: CharacterClass) => void;
  visitLocation: (location: string) => void;
  completeQuest: (questId: string) => void;
  toggleSound: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      screen: 'intro',
      character: null,
      visitedLocations: [],
      completedQuests: [],
      progress: 0,
      soundEnabled: true,
      lastLocation: 'intro',
      setScreen: (screen) => set({ screen }),
      setCharacter: (character) => set({ character }),
      visitLocation: (location) => set((state) => {
        const currentVisited = Array.isArray(state.visitedLocations) ? state.visitedLocations : [];
        if (currentVisited.includes(location)) return { lastLocation: location };
        return { 
          visitedLocations: [...currentVisited, location],
          progress: Math.min(100, state.progress + 25),
          lastLocation: location
        };
      }),
      completeQuest: (questId) => set((state) => {
        const currentCompleted = Array.isArray(state.completedQuests) ? state.completedQuests : [];
        if (currentCompleted.includes(questId)) return state;
        return { 
          completedQuests: [...currentCompleted, questId],
          progress: Math.min(100, state.progress + 10)
        };
      }),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      resetGame: () => set({ 
        screen: 'intro',
        character: null,
        visitedLocations: [],
        completedQuests: [],
        progress: 0,
        lastLocation: 'intro'
      })
    }),
    { 
      name: 'medieval-portfolio-game',
      partialize: (state) => ({
        screen: state.screen,
        character: state.character,
        visitedLocations: Array.isArray(state.visitedLocations) ? state.visitedLocations : [],
        completedQuests: Array.isArray(state.completedQuests) ? state.completedQuests : [],
        progress: state.progress,
        soundEnabled: state.soundEnabled,
        lastLocation: state.lastLocation
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (!Array.isArray(state.visitedLocations)) state.visitedLocations = [];
          if (!Array.isArray(state.completedQuests)) state.completedQuests = [];
        }
      }
    }
  )
);

export const characters = [
  { id: 'warrior' as CharacterClass, name: 'Warrior', bonus: 'Strength', icon: '⚔️' },
  { id: 'mage' as CharacterClass, name: 'Mage', bonus: 'Intelligence', icon: '🔮' },
  { id: 'rogue' as CharacterClass, name: 'Rogue', bonus: 'Agility', icon: '🗡️' },
  { id: 'paladin' as CharacterClass, name: 'Paladin', bonus: 'Wisdom', icon: '🛡️' },
  { id: 'ranger' as CharacterClass, name: 'Ranger', bonus: 'Dexterity', icon: '🏹' }
];
