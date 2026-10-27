import { useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const EDGE_FADE = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

/**
 * Infinite horizontal marquee. Pauses on hover, on focus, and with a visible toggle (WCAG 2.2.2).
 * Under reduced motion it renders a static wrapping list.
 * Items should be non-interactive: the duplicate copy is hidden from assistive tech.
 *
 * @param {object} props
 * @param {Array<string | {key: string}>} props.items
 * @param {(item: any) => import("react").ReactNode} [props.renderItem]
 * @param {string} props.label accessible name for the list
 * @param {number} [props.duration] seconds per loop
 */
export function Marquee({ items, renderItem = (item) => item, label, duration = 40, className }) {
  const isReduced = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const keyOf = (item, index) => (typeof item === "string" ? item : item.key ?? index);

  if (isReduced) {
    return (
      <ul aria-label={label} className={`flex flex-wrap gap-3 ${className ?? ""}`}>
        {items.map((item, index) => (
          <li key={keyOf(item, index)}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }

  const renderCopy = (isDuplicate) => (
    <ul
      aria-label={isDuplicate ? undefined : label}
      aria-hidden={isDuplicate || undefined}
      className="flex shrink-0 gap-3 pr-3"
    >
      {items.map((item, index) => (
        <li key={keyOf(item, index)} className="shrink-0">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee-root relative ${isPaused ? "marquee-paused" : ""} ${className ?? ""}`}>
      <div className="overflow-hidden" style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}>
        <div className="marquee-track flex w-max" style={{ "--marquee-duration": `${duration}s` }}>
          {renderCopy(false)}
          {renderCopy(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-pressed={isPaused}
        className="mt-3 font-mono text-micro uppercase text-fg-subtle transition-colors duration-fast hover:text-fg"
      >
        {isPaused ? "Play" : "Pause"} scrolling list
      </button>
    </div>
  );
}
