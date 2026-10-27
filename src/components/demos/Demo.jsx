import { lazy, Suspense, useRef } from "react";
import { useInView } from "motion/react";

// Each demo is its own chunk, fetched only when it is close to the viewport.
const DEMOS = {
  "signal-pipeline": lazy(() => import("./SignalPipeline")),
  invoice: lazy(() => import("./InvoiceDemo")),
  "agent-tree": lazy(() => import("./AgentTree")),
  "shelf-vision": lazy(() => import("./ShelfVision")),
};

function Placeholder() {
  return <div className="h-96 rounded-lg border border-hairline bg-surface" aria-hidden="true" />;
}

/**
 * @param {{ type: import("../../data/projects").DemoType }} props
 */
export function Demo({ type }) {
  const ref = useRef(null);
  const isNear = useInView(ref, { once: true, margin: "400px 0px" });
  const Component = DEMOS[type];
  if (!Component) return null;

  return (
    <div ref={ref}>
      {isNear ? (
        <Suspense fallback={<Placeholder />}>
          <Component />
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
