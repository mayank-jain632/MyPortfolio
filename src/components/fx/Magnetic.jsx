import { motion, useMotionValue, useSpring } from "motion/react";
import { useCursorEffects } from "../../hooks/useReducedMotion";
import { SPRING } from "../../lib/motion";

/**
 * Wraps a button or link so it leans toward the cursor while hovered.
 * Inert on touch devices and under reduced motion. Focus and clicks go to the child as usual.
 *
 * @param {object} props
 * @param {number} [props.strength] fraction of the cursor offset to follow (0 to 1)
 */
export function Magnetic({ strength = 0.25, className, children }) {
  const isEnabled = useCursorEffects();
  const x = useSpring(useMotionValue(0), SPRING.magnetic);
  const y = useSpring(useMotionValue(0), SPRING.magnetic);

  if (!isEnabled) {
    return <span className={`inline-flex ${className ?? ""}`}>{children}</span>;
  }

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={`inline-flex ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.span>
  );
}
