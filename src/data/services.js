// Productized services, from hub/PORTFOLIO_CONTEXT.md section 2.
// No prices, packages, or turnaround times.

/**
 * @typedef {object} Service
 * @property {string} id
 * @property {string} name
 * @property {string} promise one line
 * @property {string[]} proof
 * @property {string[]} statIds ids from stats.js
 * @property {string[]} projectSlugs ids from projects.js
 */

/** @type {Service[]} */
export const services = [
  {
    id: "trading-automation",
    name: "Trading and execution automation",
    promise: "Webhook-to-broker pipelines with signal filtering, risk gating, and walk-forward backtesting.",
    proof: [
      "Cut signal execution from minutes to under 1 second, delivering to 50 clients across about 20 daily signals (Crescent).",
      "Pre-execution infrastructure gating entries on volatility signals across 4 to 5 live strategies (trading desk).",
      "Walk-forward backtesting layer gating every strategy on blind PASS/FAIL replays (AWS hackathon).",
    ],
    statIds: ["signal-latency", "signal-clients", "live-strategies"],
    projectSlugs: ["crescent-signal-platform", "aws-agentic-ai"],
  },
  {
    id: "workflow-automation",
    name: "Business workflow automation",
    promise: "Internal tools that replace expensive software or manual spreadsheets.",
    proof: [
      "Invoice turnaround cut to about 15 minutes per client, 100+ invoices a month, saving 20+ hours monthly (Crescent).",
    ],
    statIds: ["invoice-turnaround", "invoices-monthly", "hours-saved"],
    projectSlugs: ["crescent-invoicing"],
  },
  {
    id: "applied-ai",
    name: "Applied AI and computer vision",
    promise: "Vision pipelines, multi-agent systems, and custom-trained models.",
    proof: [
      "Gemini vision prototype on store cameras flagging empty shelves across 3+ stores (Family Dollar via Convergent Forge).",
      "Custom YOLOv11 recognition (Clarity).",
      "Recursive multi-agent research platform built in 6 hours (AWS hackathon).",
      "3,000+ image training set built end to end (AvaWatz).",
    ],
    statIds: ["training-images", "hackathon-hours", "stores"],
    projectSlugs: ["family-dollar-shelf-vision", "clarity", "aws-agentic-ai", "myst"],
  },
  {
    id: "full-stack",
    name: "Full-stack product builds",
    promise: "Next.js, FastAPI, Supabase, Postgres, VS Code extensions, and Android.",
    proof: [
      "Published VS Code extension plus Next.js PM dashboard (Relay).",
      "1st place Supabase x Gemini Track, 2nd place AWS Agentic AI Hackathon, 2nd place HackTX Meta Track.",
    ],
    statIds: ["hackathon-podiums"],
    projectSlugs: ["relay", "blindspot", "myst"],
  },
];
