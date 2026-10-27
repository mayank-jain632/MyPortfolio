import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { VIEWPORT, fade, fadeUp, staggerContainer } from "../../lib/motion";

function withDelay(variants, delay) {
  if (!delay) return variants;
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...variants.visible.transition, delay },
    },
  };
}

/**
 * Fades and rises its content once when it scrolls into view.
 * Under reduced motion it only fades.
 */
export function Reveal({ as = "div", delay = 0, className, children, ...rest }) {
  const isReduced = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={withDelay(isReduced ? fade : fadeUp, delay)}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Staggers the RevealItem children inside it. */
export function RevealGroup({ as = "div", stagger = 0.08, delay = 0, className, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger, delay)}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Child of RevealGroup. Inherits the group's trigger. */
export function RevealItem({ as = "div", className, children, ...rest }) {
  const isReduced = useReducedMotion();
  const Component = motion[as];
  return (
    <Component className={className} variants={isReduced ? fade : fadeUp} {...rest}>
      {children}
    </Component>
  );
}
