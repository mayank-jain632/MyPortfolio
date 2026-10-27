import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Button } from "../ui/Button";
import { DemoFrame, Segmented } from "./DemoFrame";

const NODES = ["Alert", "Filter", "Risk check", "Broker"];

// Manual runs in time-lapse: 4.8 s of real time stands in for about 3 minutes.
const MODES = {
  manual: {
    duration: 4800,
    timelapse: 40,
    caption: "Someone reads the alert, checks it, and places the order by hand.",
  },
  auto: {
    duration: 900,
    timelapse: 1,
    caption: "Webhook in, filter, risk check, order out. Nobody in the loop.",
  },
};

function formatElapsed(mode, progress) {
  const realSeconds = (progress * MODES[mode].duration) / 1000;
  if (mode === "auto") return `${realSeconds.toFixed(2)} s`;
  const simulated = Math.round(realSeconds * MODES.manual.timelapse);
  return `${Math.floor(simulated / 60)}:${String(simulated % 60).padStart(2, "0")}`;
}

export default function SignalPipeline() {
  const isReduced = useReducedMotion();
  const [mode, setMode] = useState("auto");
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const run = () => {
    cancelAnimationFrame(frame.current);
    if (isReduced) {
      setProgress(1);
      return;
    }
    const { duration } = MODES[mode];
    const start = performance.now();
    setIsRunning(true);
    const tick = (now) => {
      const next = Math.min((now - start) / duration, 1);
      setProgress(next);
      if (next < 1) frame.current = requestAnimationFrame(tick);
      else setIsRunning(false);
    };
    setProgress(0);
    frame.current = requestAnimationFrame(tick);
  };

  const changeMode = (next) => {
    cancelAnimationFrame(frame.current);
    setIsRunning(false);
    setProgress(0);
    setMode(next);
  };

  const isDone = progress === 1;

  return (
    <DemoFrame title="Signal to order">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Segmented
          label="Execution mode"
          value={mode}
          onChange={changeMode}
          options={[
            { value: "manual", label: "Manual" },
            { value: "auto", label: "Automated" },
          ]}
        />
        <Button size="sm" onClick={run} disabled={isRunning}>
          {isDone ? "Send another" : "Send signal"}
        </Button>
      </div>

      <div className="mx-9 mb-14 mt-12 sm:mx-12" aria-hidden="true">
        <div className="relative h-11">
          <div className="absolute inset-x-0 top-1/2 h-px bg-hairline-strong" />
          <div className="absolute left-0 top-1/2 h-px bg-accent" style={{ width: `${progress * 100}%` }} />
          {NODES.map((name, index) => {
            const isReached = progress >= index / (NODES.length - 1) && progress > 0;
            return (
              <div
                key={name}
                className="absolute top-0 -translate-x-1/2"
                style={{ left: `${(index / (NODES.length - 1)) * 100}%` }}
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-pill border text-sm font-semibold transition-colors duration-base ${
                    isReached ? "border-accent-fill bg-accent-fill text-white" : "border-hairline-strong bg-surface text-fg-subtle"
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-sm ${isReached ? "text-fg" : "text-fg-subtle"}`}>
                  {name}
                </span>
              </div>
            );
          })}
          {progress > 0 && progress < 1 && (
            <span
              className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-fg"
              style={{ left: `${progress * 100}%` }}
            />
          )}
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-hairline pt-6">
        <p className="max-w-[28ch] text-sm text-fg-muted">{MODES[mode].caption}</p>
        <div className="text-right">
          <p className="tabular text-title font-semibold text-fg">{progress === 0 ? "0.00 s" : formatElapsed(mode, progress)}</p>
          <p className="text-micro text-fg-subtle">{mode === "manual" ? "Time-lapse, 40x" : "Elapsed"}</p>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {isDone ? `Order placed in ${formatElapsed(mode, 1)}${mode === "manual" ? " of simulated time" : ""}.` : ""}
      </p>
    </DemoFrame>
  );
}
