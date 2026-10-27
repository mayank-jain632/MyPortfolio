import { motion } from "motion/react";
import { useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE } from "../../lib/motion";
import { Button } from "../ui/Button";
import { DemoFrame } from "./DemoFrame";

const THRESHOLD = 0.4;
const SLOTS = 10;
const SHELVES = [
  { id: 1, name: "Shelf 1", fullness: 0.9 },
  { id: 2, name: "Shelf 2", fullness: 0.3 },
  { id: 3, name: "Shelf 3", fullness: 0.7 },
  { id: 4, name: "Shelf 4", fullness: 0.1 },
];
const SWEEP_MS = 900;

function Shelf({ shelf, isScanned, isScanning, onScan }) {
  const filled = Math.round(shelf.fullness * SLOTS);
  const needsReview = shelf.fullness < THRESHOLD;
  const percent = Math.round(shelf.fullness * 100);

  return (
    <li>
      <button
        type="button"
        onClick={onScan}
        disabled={isScanning}
        aria-label={`${shelf.name}. ${isScanned ? `${percent} percent full${needsReview ? ", needs review" : ""}` : "Not scanned. Press to scan."}`}
        className="group relative block w-full overflow-hidden rounded-md border border-hairline bg-black px-4 pb-3 pt-4 text-left transition-colors duration-fast hover:border-hairline-strong"
      >
        <div className="flex h-12 items-end gap-1.5" aria-hidden="true">
          {Array.from({ length: SLOTS }, (_, index) => (
            <span
              key={index}
              className={`flex-1 rounded-[4px] ${index < filled ? "h-full bg-raised" : "h-full border border-dashed border-hairline"}`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          <span className="text-fg-muted">{shelf.name}</span>
          {isScanned ? (
            <span className={`flex items-center gap-2 ${needsReview ? "text-fg" : "text-fg-muted"}`}>
              <span className="tabular">{percent}% full</span>
              {needsReview && <span className="rounded-pill bg-accent-fill px-2.5 py-0.5 text-micro font-medium text-white">Needs review</span>}
            </span>
          ) : (
            <span className="text-fg-subtle">{isScanning ? "Scanning" : "Press to scan"}</span>
          )}
        </div>

        {isScanned && (
          <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full">
            <polygon points="1,10 99,3 99,97 1,90" fill="none" stroke="oklch(70% 0.165 247)" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
        {isScanning && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: SWEEP_MS / 1000, ease: EASE.inOut }}
          />
        )}
      </button>
    </li>
  );
}

export default function ShelfVision() {
  const isReduced = useReducedMotion();
  const [scanned, setScanned] = useState(() => new Set());
  const [scanning, setScanning] = useState(() => new Set());

  const scan = (id) => {
    if (scanned.has(id) || scanning.has(id)) return;
    if (isReduced) {
      setScanned((current) => new Set(current).add(id));
      return;
    }
    setScanning((current) => new Set(current).add(id));
    window.setTimeout(() => {
      setScanning((current) => {
        const next = new Set(current);
        next.delete(id);
        return next;
      });
      setScanned((current) => new Set(current).add(id));
    }, SWEEP_MS);
  };

  const scanAll = () => SHELVES.forEach((shelf, index) => window.setTimeout(() => scan(shelf.id), isReduced ? 0 : index * 350));
  const reset = () => {
    setScanned(new Set());
    setScanning(new Set());
  };

  const flagged = SHELVES.filter((shelf) => scanned.has(shelf.id) && shelf.fullness < THRESHOLD).length;

  return (
    <DemoFrame title="Shelf check">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[34ch] text-sm text-fg-muted">
          Press a shelf to scan it. Anything under {Math.round(THRESHOLD * 100)}% full is flagged for a person to look at.
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={reset} disabled={scanned.size === 0 && scanning.size === 0}>
            Reset
          </Button>
          <Button size="sm" onClick={scanAll} disabled={scanned.size === SHELVES.length}>
            Scan all
          </Button>
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {SHELVES.map((shelf) => (
          <Shelf key={shelf.id} shelf={shelf} isScanned={scanned.has(shelf.id)} isScanning={scanning.has(shelf.id)} onScan={() => scan(shelf.id)} />
        ))}
      </ul>
      <p className="mt-5 border-t border-hairline pt-4 text-sm text-fg-muted" aria-live="polite">
        {scanned.size === 0 ? "No shelves scanned yet." : `${scanned.size} of ${SHELVES.length} scanned. ${flagged} flagged for review.`}
      </p>
    </DemoFrame>
  );
}
