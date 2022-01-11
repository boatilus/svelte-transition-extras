import type { EasingFunction as _EasingFunction } from 'svelte/transition'

// Re-export for convenience.
export type EasingFunction = _EasingFunction

export {
  blur as blurOnce,
  draw as drawOnce,
  fade as fadeOnce,
  fly as flyOnce,
  scale as scaleOnce,
  slide as slideOnce
} from './once/index.js'

export {
  blur as blurIf,
  draw as drawIf,
  fade as fadeIf,
  fly as flyIf,
  scale as scaleIf,
  slide as slideIf
} from './if/index.js'
