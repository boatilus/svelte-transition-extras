import type {
  BlurParams as _BlurParams,
  DrawParams as _DrawParams,
  FadeParams as _FadeParams,
  FlyParams as _FlyParams,
  ScaleParams as _ScaleParams,
  SlideParams as _SlideParams
} from 'svelte/transition'

import * as builtin from 'svelte/transition'

export type BlurParams = _BlurParams & { condition: boolean }
export type DrawParams = _DrawParams & { condition: boolean }
export type FadeParams = _FadeParams & { condition: boolean }
export type FlyParams = _FlyParams & { condition: boolean }
export type ScaleParams = _ScaleParams & { condition: boolean }
export type SlideParams = _SlideParams & { condition: boolean }

/** Run the blur animation only if `condition` is true. */
export const blur = (node: Element, args: BlurParams) => {
  if (args.condition) {
    return builtin.blur(node, args)
  }
}

/** Run the draw animation only if `condition` is true. */
export const draw = (
  node: SVGElement & { getTotalLength(): number },
  args: DrawParams
) => {
  if (args.condition) {
    return builtin.draw(node, args)
  }
}

/** Run the fade animation only if `condition` is true. */
export const fade = (node: Element, args: FadeParams) => {
  if (args.condition) {
    return builtin.fade(node, args)
  }
}

/** Run the fly animation only if `condition` is true. */
export const fly = (node: Element, args: FlyParams) => {
  if (args.condition) {
    return builtin.fly(node, args)
  }
}

/** Run the scale animation only if `condition` is true. */
export const scale = (node: Element, args: ScaleParams) => {
  if (args.condition) {
    return builtin.scale(node, args)
  }
}

/** Run the slide animation only if `condition` is true. */
export const slide = (node: Element, args: SlideParams) => {
  if (args.condition) {
    return builtin.slide(node, args)
  }
}
