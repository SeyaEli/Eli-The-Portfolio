# Sound Files Setup

Place the following sound files in `public/sounds/`:

## Required Files:
- `ui-hover.mp3` - Button hover sound (short click/tick)
- `ui-click.mp3` - Button click sound (satisfying click)
- `map-open.mp3` - Map transition sound (whoosh/page turn)
- `quest-complete.mp3` - Achievement sound (fanfare/success)
- `ambient.mp3` - Background ambient music (medieval tavern loop)

## Free Sound Resources:
- **Freesound.org** - https://freesound.org/
- **Zapsplat** - https://www.zapsplat.com/
- **Mixkit** - https://mixkit.co/free-sound-effects/
- **OpenGameArt** - https://opengameart.org/

## Temporary Solution:
The app will work without sounds. The soundManager checks if files exist before playing.

## Quick Setup:
1. Download medieval/fantasy UI sounds from above sites
2. Convert to MP3 format (if needed)
3. Place in `public/sounds/` folder
4. Restart dev server
