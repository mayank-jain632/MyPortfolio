// Projects and case studies, from hub/PORTFOLIO_CONTEXT.md section 5.
// Repo links verified against the GitHub API on 2026-10-27.
// Dropped per context: Quant Research Notebooks, Pooled, Shark Radar. Not shown: constellation_2.0.
// Empty `links.github` on a featured project requires a `todo` (enforced by scripts/check-data.mjs).

import { decisions } from "./site.config.js";

const GITHUB = "https://github.com/mayank-jain632";

/** @typedef {"signal-pipeline" | "invoice" | "agent-tree" | "shelf-vision" | "none"} DemoType */
/** @typedef {"hackathon" | "shipped" | "in-progress" | "client-work"} Status */

/**
 * @typedef {object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} tagline
 * @property {string} [award]
 * @property {string} year
 * @property {string} role
 * @property {Status} status
 * @property {boolean} featured
 * @property {string} category matches a service id in services.js
 * @property {string} problem
 * @property {string[]} build
 * @property {string[]} result
 * @property {string[]} stack
 * @property {{ github: string, live: string }} links
 * @property {DemoType} demoType
 * @property {number} order
 * @property {boolean} [anonymous] client work, never name the client
 * @property {string} [note] design or copy constraint
 * @property {string} [todo]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "aws-agentic-ai",
    name: "AWS Agentic AI Hackathon",
    tagline: "Recursive multi-agent fund research, built in 6 hours.",
    award: "2nd Place",
    year: "2026",
    role: "Owned the walk-forward backtesting layer",
    status: "hackathon",
    featured: true,
    category: "applied-ai",
    problem: "Fund research needs many parallel lines of inquiry, and no strategy should reach a paper trade without proof.",
    build: [
      "Recursive multi-agent research platform where agents spawn sub-agents under a configurable cap.",
      "Fund workspace with mandate, dashboard, and recursive agent canvas (React/Vite, FastAPI, Dexter's agent loop).",
      "All agents on AWS Bedrock, deployed on EC2, CloudFront, ECR, and Secrets Manager behind IAM roles.",
      "Walk-forward backtesting layer: every strategy gated on blind PASS/FAIL replays before any paper trade (Alpaca).",
    ],
    result: ["2nd place, AWS Agentic AI Hackathon.", "Built in 6 hours."],
    stack: ["React", "Vite", "FastAPI", "AWS Bedrock", "EC2", "CloudFront", "ECR", "Secrets Manager", "IAM", "Alpaca"],
    links: { github: `${GITHUB}/aws-ai-hackathon`, live: "" },
    demoType: "agent-tree",
    order: 1,
  },
  {
    slug: "crescent-signal-platform",
    name: "Signal execution platform",
    tagline: "TradingView alerts to broker orders in under a second.",
    award: "Client work",
    // TODO: confirm the years for the anonymous client engagements.
    year: "",
    role: "Founder and engineer, Crescent Dynamics",
    status: "client-work",
    featured: true,
    category: "trading-automation",
    problem: "Signals were delivered by hand, taking minutes to reach clients.",
    build: [
      "TradingView-to-IBKR signal deployment service.",
      "Webhook-to-broker pipeline with signal filtering and risk gating, running as systemd services.",
    ],
    result: [
      "Signal execution went from minutes to under 1 second.",
      "Delivered to 50 clients across about 20 daily signals.",
    ],
    stack: ["Python", "systemd", "TradingView", "IBKR"],
    links: { github: "", live: "" },
    demoType: "signal-pipeline",
    order: 2,
    anonymous: true,
    todo: "TODO: client work, no public repo by default. Confirm nothing should be linked.",
  },
  {
    slug: "clarity",
    name: "Clarity",
    tagline: "A caregiver-facing assistant for dementia care that keeps patient data off public cloud.",
    award: "1st Place, Supabase x Gemini Track",
    year: "2026",
    role: "Built the backend and AI pipeline",
    status: "hackathon",
    featured: true,
    category: "applied-ai",
    problem: "Dementia caregivers need real-time visibility without sending patient data to public cloud.",
    build: [
      "Custom YOLOv11 recognition model.",
      "Gemini voice, served through FastAPI, with Supabase and a Next.js caregiver view.",
      "Tailscale mesh between the iPhone and a local backend keeps patient data off public cloud.",
      "GPS geofencing and real-time caregiver visibility.",
    ],
    result: ["1st place, Supabase x Gemini Track.", "Sub-100ms latency over the private mesh."],
    stack: ["YOLOv11", "Gemini", "FastAPI", "Supabase", "Next.js", "Tailscale"],
    links: { github: "", live: "" },
    demoType: "none",
    order: 3,
    todo: "TODO: Clarity repo is not public under mayank-jain632. Confirm the repo name or owner.",
  },
  {
    slug: "myst",
    name: "Myst",
    tagline: "A hands-free Ray-Ban Meta companion for people with early-stage memory loss.",
    award: "2nd Place, HackTX Meta Track",
    year: "2026",
    // TODO: confirm Mayank's specific role on the 5-person team.
    role: "Team of 5",
    status: "hackathon",
    featured: true,
    category: "applied-ai",
    problem: "People with early-stage memory loss need help recognizing family and recalling conversations, without reaching for a phone.",
    build: [
      "Kotlin on Android with Meta Wearables DAT and Muse Spark.",
      "Consent-gated, revocable face recognition that only names enrolled family and declines to guess on strangers.",
      "Live conversation recaps from glasses audio.",
      "API key secured with Android Keystore.",
    ],
    result: [
      "2nd place, HackTX Meta Track.",
      "Correctly recognized enrolled family across about 30 live trials.",
    ],
    stack: ["Kotlin", "Android", "Meta Wearables DAT", "Muse Spark", "Android Keystore"],
    links: { github: `${GITHUB}/Myst`, live: "" },
    demoType: "none",
    order: 4,
    note: "No photos of real people. Abstract or illustrated visuals only.",
  },
  {
    slug: "crescent-invoicing",
    name: "Invoice automation tool",
    tagline: "An Excel-like tool that replaced industrial invoicing software.",
    award: "Client work",
    // TODO: confirm the years for the anonymous client engagements.
    year: "",
    role: "Founder and engineer, Crescent Dynamics",
    status: "client-work",
    featured: true,
    category: "workflow-automation",
    problem: "Invoicing ran through expensive industrial software and took too long per client.",
    build: ["Excel-like invoice automation tool that replaced the industrial software."],
    result: [
      "Invoice turnaround cut to about 15 minutes per client.",
      "100+ invoices a month, saving 20+ hours monthly.",
    ],
    stack: ["Python", "React", "Supabase"],
    links: { github: "", live: "" },
    demoType: "invoice",
    order: 5,
    anonymous: true,
    todo: "TODO: a public Invoice-Generator repo exists. Confirm whether to link it (client stays anonymous).",
  },
  {
    slug: "family-dollar-shelf-vision",
    name: "Store shelf vision",
    tagline: "Store cameras that flag empty shelves for human review.",
    award: "Family Dollar via Convergent Forge",
    year: "2026",
    role: "Software Engineer",
    status: "in-progress",
    featured: true,
    category: "applied-ai",
    problem: "Empty shelves go unnoticed between store walks.",
    build: [
      "Gemini vision prototype on Orchid VMS store cameras, flagging empty shelves for human review.",
      "Vertex AI, ADK, Cloud Run, and BigQuery pipeline, built in a 15-person team.",
    ],
    result: ["Running across 3+ stores."],
    stack: ["Gemini", "Vertex AI", "Google ADK", "Cloud Run", "BigQuery"],
    links: { github: "", live: "" },
    demoType: "shelf-vision",
    order: 6,
    todo: "TODO: employer work, no public repo expected. Confirm.",
  },
  {
    slug: "relay",
    name: "Relay",
    tagline: "Slack messages become assignable tasks inside VS Code.",
    year: "2025 to Present",
    role: "Built and published the extension",
    status: "shipped",
    featured: true,
    category: "full-stack",
    problem: "Tasks discussed in Slack get lost before they reach the editor.",
    build: [
      "Published VS Code extension that turns Slack messages into assignable tasks.",
      "REST API, PostgreSQL, and a Next.js PM dashboard with GitHub OAuth.",
      "A /nudge command for direct assignment. Railway backend, Vercel frontend.",
    ],
    result: ["Cut task context-switching about 30 to 35% (resume claim)."],
    stack: ["VS Code API", "Node.js", "PostgreSQL", "Next.js", "GitHub OAuth", "Railway", "Vercel"],
    links: { github: `${GITHUB}/Relay`, live: "" },
    demoType: "none",
    order: 7,
  },
  {
    // D6: shown as a small "In progress" card. Repo last pushed 2026-10-15, so not dormant.
    slug: "blindspot",
    name: "Blindspot",
    tagline: "VS Code extension that shows which parts of your codebase you've never actually looked at.",
    year: "2026",
    // TODO: confirm role (solo or team).
    role: "",
    status: "in-progress",
    featured: decisions.showBlindspot,
    category: "full-stack",
    problem: "",
    build: [],
    result: [],
    stack: [],
    links: { github: `${GITHUB}/Blindspot`, live: "" },
    demoType: "none",
    order: 8,
  },
];

/** Featured projects in display order. */
export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

/**
 * "Earlier projects" cards. Only entries with a verified public repo.
 * Excluded until a public repo exists:
 *   TODO: Oil A New website (Oil-A-New-Website is not public).
 *   TODO: Dorm Decor 3D planner (no public repo found).
 */
export const archive = [
  {
    slug: "from-scratch-ml",
    name: "From-scratch ML series",
    tagline: "K-Means, linear regression, and a neural network implemented from first principles.",
    stack: ["Python", "NumPy"],
    links: { github: `${GITHUB}/K-Means`, live: "" },
    order: 1,
  },
  {
    slug: "caraml-research",
    name: "CARAML Labs research",
    tagline: "Data-efficient AI research with conditional GANs and autoencoders.",
    stack: ["Python", "PyTorch"],
    links: { github: `${GITHUB}/CARAML_Labs_Research_Project`, live: "" },
    order: 2,
  },
  {
    slug: "indian-paper-trading",
    name: "Indian paper trading app",
    tagline: "Stock and futures simulator for testing strategies with real-time data.",
    stack: ["TypeScript", "React", "Node.js"],
    links: { github: `${GITHUB}/indianPaperTradingApp`, live: "" },
    order: 3,
  },
].filter((project) => project.links.github);
