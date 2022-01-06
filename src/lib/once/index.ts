import type {
  BlurParams as _BlurParams,
  DrawParams as _DrawParams,
  FadeParams as _FadeParams,
  FlyParams as _FlyParams,
  ScaleParams as _ScaleParams,
  SlideParams as _SlideParams
} from 'svelte/transition'

import * as builtin from 'svelte/transition'

export type BlurParams = _BlurParams & { id: string }
export type DrawParams = _DrawParams & { id: string }
export type FadeParams = _FadeParams & { id: string }
export type FlyParams = _FlyParams & { id: string }
export type ScaleParams = _ScaleParams & { id: string }
export type SlideParams = _SlideParams & { id: string }

/**
 * Run the blur transition only if the element hasn't already been transitioned
 * once.
 */
export const blur = (element: Element, args: BlurParams) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.blur(element, args)
  }
}

/**
 * Run the draw transition only if the element hasn't already been transitioned
 * once.
 */
export const draw = (
  node: SVGElement & { getTotalLength(): number },
  args: DrawParams
) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.draw(node, args)
  }
}

/**
 * Run the fade transition only if the element hasn't already been transitioned
 * once.
 */
export const fade = (element: Element, args: FadeParams) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.fade(element, args)
  }
}

/**
 * Run the fly transition only if the element hasn't already been transitioned
 * once.
 */
export const fly = (element: Element, args: FlyParams) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.fly(element, args)
  }
}

/**
 * Run the scale transition only if the element hasn't already been transitioned
 * once.
 */
export const scale = (element: Element, args: ScaleParams) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.scale(element, args)
  }
}

/**
 * Run the slide transition only if the element hasn't already been transitioned
 * once.
 */
export const slide = (element: Element, args: SlideParams) => {
  if (!once_refs.includes(args.id)) {
    once_refs.push(args.id)
    return builtin.slide(element, args)
  }
}

// Maintains a list of element IDs that've been registered by transition
// functions.
const once_refs: string[] = []
