import { useRef } from "react";
import { useCursorEffects } from "../../hooks/useReducedMotion";

/**
 * Card surface with a radial highlight that follows the cursor.
 * Position is written to CSS variables, so moving the cursor never re-renders React.
 * Fine pointers only. Elsewhere it renders as a plain card.
 */
export function Spotlight({ as: Component = "div", size = 420, className, children, ...rest }) {
  const ref = useRef(null);
  const isEnabled = useCursorEffects();

  const handlePointerMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <Component
      ref={ref}
      className={`group/spot relative isolate overflow-hidden ${className ?? ""}`}
      onPointerMove={isEnabled ? handlePointerMove : undefined}
      {...rest}
    >
      {isEnabled && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-slow ease-out-quart group-hover/spot:opacity-100"
          style={{
            background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), oklch(var(--color-accent) / 0.08), transparent 60%)`,
          }}
        />
      )}
      {children}
    </Component>
  );
}
