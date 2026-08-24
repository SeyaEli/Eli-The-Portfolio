import { Howl } from 'howler';

class SoundManager {
  private sounds: { [key: string]: Howl } = {};
  private enabled: boolean = true;
  private initialized: boolean = false;

  init() {
    if (this.initialized) return;
    this.initialized = true;
    // Sounds disabled - add MP3 files to public/sounds/ to enable
  }

  play(soundName: string) {
    if (this.enabled && this.sounds[soundName]) {
      try {
        this.sounds[soundName].play();
      } catch (error) {
        // Silently fail if sound doesn't exist
      }
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    if (!enabled) {
      Object.values(this.sounds).forEach(sound => {
        try {
          sound.stop();
        } catch (error) {
          // Silently fail
        }
      });
    }
  }
}

export const soundManager = new SoundManager();
