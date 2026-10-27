import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useCursorEffects, useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE, SPRING } from "../../lib/motion";

const PIN_COUNT = 10;
const PIN_STEP = 28;
const PIN_START = 160;
const pinPositions = Array.from({ length: PIN_COUNT }, (_, index) => PIN_START + index * PIN_STEP);

// Circuit traces on the die, drawn once on load.
const TRACES = [
  "M300 170 V222 H258 V258",
  "M300 430 V378 H342 V342",
  "M170 300 H222 V342 H258",
  "M430 300 H378 V258 H342",
  "M190 190 L226 226",
  "M410 410 L374 374",
  "M410 190 L374 226",
  "M190 410 L226 374",
];

function Pins({ side }) {
  const isHorizontal = side === "top" || side === "bottom";
  return pinPositions.map((position) => {
    const props = isHorizontal
      ? { x: position, y: side === "top" ? 90 : 480, width: 12, height: 30 }
      : { x: side === "left" ? 90 : 480, y: position, width: 30, height: 12 };
    return <rect key={`${side}-${position}`} {...props} rx="3" fill="url(#pin)" />;
  });
}

/**
 * The hero "product shot": a chip with my initials on the die. Tilts toward the cursor on fine
 * pointers and eases up as the page scrolls. Decorative, so it is hidden from assistive tech.
 */
export function Chip({ className }) {
  const ref = useRef(null);
  const isReduced = useReducedMotion();
  const hasCursor = useCursorEffects();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-14, 14]), SPRING.smooth);
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [10, -10]), SPRING.smooth);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], [30, -60]);

  const handlePointerMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative mx-auto aspect-square w-[min(34rem,86vw)] ${className ?? ""}`}
      onPointerMove={hasCursor ? handlePointerMove : undefined}
      onPointerLeave={hasCursor ? handlePointerLeave : undefined}
    >
      <div
        className="absolute inset-[12%] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(55% 0.19 256 / 0.55), transparent)" }}
      />
      <motion.div
        className="relative size-full"
        style={{
          y: isReduced ? 0 : lift,
          rotateX: hasCursor ? rotateX : 0,
          rotateY: hasCursor ? rotateY : 0,
          transformPerspective: 1100,
        }}
      >
        <svg viewBox="0 0 600 600" className="size-full overflow-visible" fill="none">
          <defs>
            <linearGradient id="pkg" x1="120" y1="120" x2="480" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#212124" />
              <stop offset="1" stopColor="#060607" />
            </linearGradient>
            <linearGradient id="edge" x1="120" y1="120" x2="480" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0.08" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="pin" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#4a4a4f" />
              <stop offset="1" stopColor="#18181a" />
            </linearGradient>
            <linearGradient id="die" x1="170" y1="170" x2="430" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="#141416" />
              <stop offset="1" stopColor="#030304" />
            </linearGradient>
            <linearGradient id="core" x1="240" y1="240" x2="360" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#26262a" />
              <stop offset="1" stopColor="#09090a" />
            </linearGradient>
            <linearGradient id="mark" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#8e8e93" />
            </linearGradient>
          </defs>

          <Pins side="top" />
          <Pins side="bottom" />
          <Pins side="left" />
          <Pins side="right" />

          <rect x="120" y="120" width="360" height="360" rx="56" fill="url(#pkg)" />
          <rect x="120.75" y="120.75" width="358.5" height="358.5" rx="55.5" stroke="url(#edge)" strokeWidth="1.5" />

          <rect x="170" y="170" width="260" height="260" rx="30" fill="url(#die)" />
          <rect x="170.5" y="170.5" width="259" height="259" rx="29.5" stroke="#fff" strokeOpacity="0.1" />
          <rect x="196" y="196" width="208" height="208" rx="18" stroke="#fff" strokeOpacity="0.05" />

          {TRACES.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              stroke="oklch(70% 0.165 247)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={isReduced ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.75 }}
              transition={{ duration: 1.4, delay: 0.5 + index * 0.08, ease: EASE.outExpo }}
            />
          ))}

          <rect x="240" y="240" width="120" height="120" rx="24" fill="url(#core)" />
          <rect x="240.5" y="240.5" width="119" height="119" rx="23.5" stroke="#fff" strokeOpacity="0.22" />
          <text
            x="300"
            y="316"
            textAnchor="middle"
            fill="url(#mark)"
            fontSize="52"
            fontWeight="600"
            letterSpacing="-2"
            fontFamily="var(--font-sans)"
          >
            MJ
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
