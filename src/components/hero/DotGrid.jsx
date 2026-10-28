import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const DOTS = "radial-gradient(circle, currentColor 1px, transparent 1.5px)";

/**
 * Faint dot grid behind the hero. A green layer of the same grid is revealed in a soft circle
 * that follows the cursor. Fine pointers only; reduced motion keeps it still.
 * `parentRef` is the element whose pointer movement drives the glow.
 */
export function DotGrid({ parentRef }) {
  const root = useRef(null);
  const isReduced = useReducedMotion();

  useEffect(() => {
    const parent = parentRef.current;
    const node = root.current;
    if (!parent || !node || isReduced) return undefined;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;

    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        node.style.setProperty("--my", `${event.clientY - rect.top}px`);
        node.style.setProperty("--glow", "1");
      });
    };
    const leave = () => node.style.setProperty("--glow", "0");

    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, [parentRef, isReduced]);

  const fade = "linear-gradient(to bottom, black 35%, transparent 95%)";
  const spot = "radial-gradient(220px circle at var(--mx, 50%) var(--my, 40%), black, transparent)";

  return (
    <div ref={root} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{ "--glow": 0 }}>
      <div
        className="absolute inset-0 text-white/[0.13]"
        style={{ backgroundImage: DOTS, backgroundSize: "28px 28px", WebkitMaskImage: fade, maskImage: fade }}
      />
      <div
        className="absolute inset-0 text-accent transition-opacity duration-slow"
        style={{
          backgroundImage: DOTS,
          backgroundSize: "28px 28px",
          opacity: "var(--glow)",
          WebkitMaskImage: spot,
          maskImage: spot,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-slow"
        style={{
          opacity: "calc(var(--glow) * 0.5)",
          background: "radial-gradient(260px circle at var(--mx, 50%) var(--my, 40%), oklch(80% 0.2 150 / 0.12), transparent)",
        }}
      />
    </div>
  );
}
