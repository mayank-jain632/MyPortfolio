import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE, VIEWPORT } from "../../lib/motion";

/**
 * Counts from `from` to `to` once when scrolled into view.
 * Shows the final value immediately under reduced motion. Screen readers always get the final value.
 */
export function CountUp({ to, from = 0, decimals = 0, prefix = "", suffix = "", duration = 1.6, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEWPORT);
  const isReduced = useReducedMotion();

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const format = (value) => `${prefix}${formatter.format(value)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView || isReduced) return undefined;
    const controls = animate(from, to, {
      duration,
      ease: EASE.outExpo,
      onUpdate: (value) => {
        node.textContent = format(value);
      },
    });
    return () => controls.stop();
    // format is derived from the listed props.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isReduced, from, to, duration, decimals, prefix, suffix]);

  return (
    <span className={`tabular-nums ${className ?? ""}`}>
      <span ref={ref} aria-hidden="true">
        {format(isReduced ? to : from)}
      </span>
      <span className="sr-only">{format(to)}</span>
    </span>
  );
}
