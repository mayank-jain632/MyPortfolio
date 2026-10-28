import { motion } from "motion/react";
import { useState } from "react";
import { EASE } from "../../lib/motion";
import { Button } from "../ui/Button";
import { DemoFrame } from "./DemoFrame";

const MIN_CAP = 3;
const MAX_CAP = 15;
const WIDTH = 600;
const LEVEL_HEIGHT = 78;

// Complete binary tree: node i has parent floor((i - 1) / 2), so spawning fills level by level.
function layout(index) {
  const level = Math.floor(Math.log2(index + 1));
  const slots = 2 ** level;
  const slot = index + 1 - slots;
  return { x: ((slot + 0.5) / slots) * WIDTH, y: 36 + level * LEVEL_HEIGHT, level };
}

export default function AgentTree() {
  const [count, setCount] = useState(1);
  const [cap, setCap] = useState(7);
  const effectiveCap = Math.max(cap, count);
  const isFull = count >= effectiveCap;
  const nodes = Array.from({ length: count }, (_, index) => ({ index, ...layout(index) }));
  const maxLevel = Math.max(...nodes.map((node) => node.level));

  return (
    <DemoFrame title="Recursive agent tree">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <label className="block text-sm text-fg-muted">
          Spawn cap: <span className="tabular font-medium text-fg">{effectiveCap}</span>
          <input
            type="range"
            min={MIN_CAP}
            max={MAX_CAP}
            value={effectiveCap}
            onChange={(event) => setCap(Number(event.target.value))}
            className="mt-2 block w-48 accent-[oklch(80%_0.2_150)]"
          />
        </label>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setCount(1)} disabled={count === 1}>
            Reset
          </Button>
          <Button size="sm" onClick={() => setCount((current) => current + 1)} disabled={isFull}>
            Spawn agent
          </Button>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${36 + (maxLevel + 1) * LEVEL_HEIGHT - 30}`}
        role="img"
        aria-label={`${count} agents in a tree, each spawned by its parent`}
        className="mt-6 h-auto w-full"
      >
        {nodes.slice(1).map((node) => {
          const parent = layout(Math.floor((node.index - 1) / 2));
          return (
            <motion.path
              key={`edge-${node.index}`}
              d={`M${parent.x} ${parent.y + 16} C${parent.x} ${(parent.y + node.y) / 2} ${node.x} ${(parent.y + node.y) / 2} ${node.x} ${node.y - 16}`}
              stroke="oklch(80% 0.2 150)"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: EASE.outExpo }}
            />
          );
        })}
        {nodes.map((node) => (
          <motion.g
            key={node.index}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE.outExpo, delay: node.index === 0 ? 0 : 0.2 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <circle cx={node.x} cy={node.y} r="16" fill={node.index === 0 ? "oklch(80% 0.2 150)" : "oklch(23% 0.003 286)"} stroke="oklch(100% 0 0 / 0.18)" />
            <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">
              {node.index === 0 ? "R" : node.index}
            </text>
          </motion.g>
        ))}
      </svg>

      <p className="mt-4 border-t border-hairline pt-4 text-sm text-fg-muted" aria-live="polite">
        {isFull ? "Cap reached. No more sub-agents can be spawned." : `${count} of ${effectiveCap} agents running. Each one can spawn sub-agents until the cap.`}
      </p>
    </DemoFrame>
  );
}
