import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { SPRING } from "../../lib/motion";

/** Hairline accent bar at the top of the viewport showing page scroll progress. Decorative. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, SPRING.smooth);
  const isReduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-accent"
      style={{ scaleX: isReduced ? scrollYProgress : smoothed }}
    />
  );
}
