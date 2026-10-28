import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { DURATION, EASE } from "../../lib/motion";

// Article is part of the phrase so "an applied AI" reads correctly.
const ROLES = ["a full-stack", "an applied AI", "a backend", "an award-winning", "a math-minded", "a systems"];
const INTERVAL_MS = 2300;

/**
 * "I'm a ___ developer." with the blank cycling. Screen readers get one static sentence.
 * Reduced motion shows the first role and never changes.
 */
export function RoleRotator({ className }) {
  const isReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isReduced) return undefined;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % ROLES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isReduced]);

  return (
    <span className={`block min-h-[2.3em] text-[0.72em] sm:min-h-0 ${className ?? ""}`}>
      <span className="sr-only">I'm a developer across full-stack, applied AI, backend, and trading systems.</span>
      <span aria-hidden="true" className="inline-flex flex-wrap items-baseline justify-center gap-x-[0.28em]">
        <span>I'm</span>
        <motion.span layout="position" transition={{ duration: DURATION.slow, ease: EASE.outExpo }} className="relative inline-flex overflow-hidden pb-[0.12em]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={ROLES[index]}
              initial={isReduced ? false : { y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
              className="whitespace-nowrap text-accent"
            >
              {ROLES[index]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        <motion.span layout="position" transition={{ duration: DURATION.slow, ease: EASE.outExpo }}>
          developer.
        </motion.span>
      </span>
    </span>
  );
}
