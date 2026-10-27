import { useEffect, useState } from "react";
import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * True when the user prefers reduced motion. Wraps motion's hook so callers always get a boolean.
 * @returns {boolean}
 */
export function useReducedMotion() {
  return Boolean(useMotionReducedMotion());
}

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True on devices with a precise hovering pointer (mouse, trackpad). Cursor effects use this.
 * @returns {boolean}
 */
export function useFinePointer() {
  const [isFine, setIsFine] = useState(
    () => typeof window !== "undefined" && window.matchMedia(FINE_POINTER_QUERY).matches
  );

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER_QUERY);
    const onChange = (event) => setIsFine(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isFine;
}

/**
 * True when cursor-driven effects should run: fine pointer and motion allowed.
 * @returns {boolean}
 */
export function useCursorEffects() {
  const isReduced = useReducedMotion();
  const isFine = useFinePointer();
  return isFine && !isReduced;
}
