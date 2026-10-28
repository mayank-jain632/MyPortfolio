import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Every line is a fact from the resume or the site, written as shell output.
const STEPS = [
  { cmd: true, text: "whoami" },
  { cmd: false, text: "mayank jain, cs and math, ut austin" },
  { cmd: true, text: "ls awards/" },
  { cmd: false, text: "1st-supabase-x-gemini  2nd-aws-agentic-ai  2nd-hacktx-meta" },
  { cmd: true, text: "ship --speed" },
  { cmd: false, text: "fast" },
  { cmd: true, text: "echo $STATUS" },
  { cmd: false, text: "open to opportunities" },
];
const TYPE_MS = 34;
const OUTPUT_PAUSE_MS = 260;
const START_DELAY_MS = 1500;

/** A small terminal that types itself once. Reduced motion shows everything at once. */
export function Terminal() {
  const isReduced = useReducedMotion();
  const [typed, setTyped] = useState(() => STEPS.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (isReduced) {
      setTyped(STEPS.map((step) => step.text));
      setDone(true);
      return undefined;
    }
    let cancelled = false;
    let timer = 0;
    const run = (stepIndex, charIndex) => {
      if (cancelled) return;
      if (stepIndex >= STEPS.length) {
        setDone(true);
        return;
      }
      const step = STEPS[stepIndex];
      if (!step.cmd) {
        setTyped((prev) => prev.map((value, i) => (i === stepIndex ? step.text : value)));
        timer = window.setTimeout(() => run(stepIndex + 1, 0), OUTPUT_PAUSE_MS * 2);
        return;
      }
      if (charIndex <= step.text.length) {
        setTyped((prev) => prev.map((value, i) => (i === stepIndex ? step.text.slice(0, charIndex) : value)));
        timer = window.setTimeout(() => run(stepIndex, charIndex + 1), TYPE_MS);
      } else {
        timer = window.setTimeout(() => run(stepIndex + 1, 0), OUTPUT_PAUSE_MS);
      }
    };
    timer = window.setTimeout(() => run(0, 0), START_DELAY_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [isReduced]);

  // The caret sits on the line currently being typed, or on a fresh prompt when finished.
  const activeIndex = typed.findIndex((value, i) => value.length < STEPS[i].text.length);

  return (
    <div
      role="img"
      aria-label="Terminal. whoami: mayank jain, cs and math, ut austin. Awards: 1st Supabase x Gemini, 2nd AWS Agentic AI, 2nd HackTX Meta. Status: open to opportunities."
      className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-hairline bg-surface text-left shadow-float"
    >
      <div aria-hidden="true" className="flex items-center gap-2 border-b border-hairline px-4 py-3">
        <span className="size-2.5 rounded-pill bg-fg/20" />
        <span className="size-2.5 rounded-pill bg-fg/20" />
        <span className="size-2.5 rounded-pill bg-fg/20" />
        <span className="ml-2 text-micro text-fg-subtle">mayank@austin</span>
      </div>
      <div aria-hidden="true" className="min-h-[13.5rem] space-y-1 px-5 py-4 font-mono text-[0.8125rem] leading-6 sm:text-sm">
        {STEPS.map((step, i) =>
          typed[i] === "" && i !== activeIndex ? null : (
            <p key={i} className={step.cmd ? "text-fg" : "pl-4 text-fg-muted"}>
              {step.cmd && <span className="mr-2 text-accent">$</span>}
              <span className="break-words">{typed[i]}</span>
              {i === activeIndex && <span className="caret ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.2em] bg-accent" />}
            </p>
          )
        )}
        {done && (
          <p className="text-fg">
            <span className="mr-2 text-accent">$</span>
            <span className="caret inline-block h-[1.05em] w-[0.5em] translate-y-[0.2em] bg-accent" />
          </p>
        )}
      </div>
    </div>
  );
}
