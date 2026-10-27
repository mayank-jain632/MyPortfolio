// Shared motion tokens for motion/react. Mirrors the CSS tokens in src/index.css.

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1],
  outQuart: [0.25, 1, 0.5, 1],
  inOut: [0.65, 0, 0.35, 1],
};

// Seconds, because motion/react takes seconds.
export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.5,
  reveal: 0.8,
};

export const SPRING = {
  // Cursor-following effects: responsive with a little give.
  magnetic: { stiffness: 220, damping: 18, mass: 0.4 },
  // Progress bars and indicators: no overshoot.
  smooth: { stiffness: 140, damping: 30, restDelta: 0.001 },
};

// Trigger a little before the element is fully in view, and only once.
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" };

export const REVEAL_DISTANCE = 24;

export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE.outExpo },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE.outQuart } },
};

/**
 * Parent variant that staggers its children.
 * @param {number} [stagger] seconds between children
 * @param {number} [delay] seconds before the first child
 */
export function staggerContainer(stagger = 0.06, delay = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}
