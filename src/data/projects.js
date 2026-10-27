// Projects and case studies, from hub/PORTFOLIO_CONTEXT.md section 5.
// Repo, live, and Marketplace links verified on 2026-10-27 (GitHub API, HTTP and framing headers).
// Dropped per context: Quant Research Notebooks, Pooled, Shark Radar. Not shown: constellation_2.0.
// No archive of minor repos. Earlier work lives in experience.js without repo links.
// A featured project without `links.github` needs `noRepo` (why) or a `todo` (enforced by scripts/check-data.mjs).
// Media files live in public/media/<slug>/ and are referenced by root-relative path ("/media/<slug>/x.webp").

import { decisions } from "./site.config.js";

const GITHUB = "https://github.com/mayank-jain632";

/** @typedef {"signal-pipeline" | "invoice" | "agent-tree" | "shelf-vision" | "none"} DemoType */
/** @typedef {"hackathon" | "shipped" | "in-progress" | "client-work"} Status */

/**
 * @typedef {object} Links
 * @property {string} github main public repo, or ""
 * @property {string} live public URL, or ""
 * @property {string} [githubMirror] secondary public copy of the repo
 * @property {string} [devpost]
 * @property {string} [marketplace]
 */

/**
 * @typedef {object} Media
 * @property {{ provider: "youtube" | "vimeo", id: string, title: string }} [video] loads only on click
 * @property {string} [poster] root-relative image shown on the video facade
 * @property {{ src: string, alt: string }[]} [images] root-relative paths under /media/<slug>/
 * @property {string} [liveEmbed] https URL, only if it allows framing and shows no private data
 */

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
 * @property {string[]} [teamBuild] team work shown under "Built with the team", never as mine
 * @property {string[]} [builtWith] teammates credited as "Built with"
 * @property {Links} links
 * @property {Media} [media] each block renders only when present
 * @property {string} [noRepo] why there is no public repo (client or employer code)
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
    // The CloudFront URL in the README (dgvmahl7u2clq.cloudfront.net) no longer resolves, so no live link.
    links: { github: `${GITHUB}/aws-ai-hackathon`, live: "" },
    demoType: "agent-tree",
    order: 1,
  },
  {
    slug: "crescent-signal-platform",
    name: "Signal execution platform",
    tagline: "TradingView alerts to broker orders in under a second.",
    award: "Client work",
    year: "2025 to Present",
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
    noRepo: "Client work. The client stays anonymous and the code is not public.",
  },
  {
    slug: "clarity",
    name: "Clarity",
    tagline: "A caregiver-facing assistant for dementia care that keeps patient data off public cloud.",
    award: "1st Place, Supabase x Gemini Track",
    year: "2026",
    role: "Built the backend and AI pipeline",
    builtWith: ["Krishna Perla", "Harshal Dhaduk", "RJ Paidi"],
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
    // Devpost lists bruhlol108/SimpleClarity, which returns 404. The public team repo is
    // rjp123456/SimpleClarity ("Clarity Lite, HookEm Hacks 2026"), which includes Mayank's commits.
    links: {
      github: "https://github.com/rjp123456/SimpleClarity",
      live: "",
      devpost: "https://devpost.com/software/clarity-lxbwpt",
    },
    demoType: "none",
    order: 3,
  },
  {
    slug: "myst",
    name: "Myst",
    tagline: "A hands-free Ray-Ban Meta companion for people with early-stage memory loss.",
    award: "2nd Place, HackTX Meta Track",
    year: "2026",
    role: "UI, live transcription, and memory, in a team of 4",
    builtWith: ["Krishna Perla", "Harshal Dhaduk", "RJ Paidi"],
    status: "hackathon",
    featured: true,
    category: "applied-ai",
    problem: "People with early-stage memory loss need help recognizing family and recalling conversations, without reaching for a phone.",
    // TODO: Mayank's stated role is "entire UI, live transcription, memory features". Commit history
    // backs live transcription fully and the UI and memory work in part (see docs/TODO.md). Copy below
    // stays within what the history shows until Mayank confirms.
    build: [
      "I built the Android UI for reminders in Kotlin and worked on the home and family enrollment screens.",
      "I built live transcription: glasses audio streams to Muse in real time and comes back as a conversation recap.",
      "I worked on the memory features, the household records and visit memory that bring back who visited.",
    ],
    // TODO: Android Keystore and the face recognition work are attributed to the team until Mayank confirms which parts were his.
    teamBuild: [
      "Our team's app uses Meta Wearables DAT on Android.",
      "Consent-gated, revocable face recognition that only names enrolled family and declines to guess on strangers.",
      "API key secured with Android Keystore.",
    ],
    result: [
      "2nd place, HackTX Meta Track.",
      "Our team's app correctly recognized enrolled family across about 30 live trials.",
    ],
    stack: ["Kotlin", "Android", "Meta Wearables DAT", "Muse Spark", "Android Keystore"],
    // harshaldhaduk/myst is where the team worked (created 2026-10-24, 61 commits).
    // mayank-jain632/Myst is a later copy of the same history (created 2026-10-27, 60 commits).
    links: {
      github: "https://github.com/harshaldhaduk/myst",
      githubMirror: `${GITHUB}/Myst`,
      live: "",
      devpost: "https://devpost.com/software/myst-78dz52",
    },
    demoType: "none",
    order: 4,
    note: "No photos of real people. Abstract or illustrated visuals only.",
  },
  {
    slug: "crescent-invoicing",
    name: "Invoice automation tool",
    tagline: "An Excel-like tool that replaced industrial invoicing software.",
    award: "Client work",
    year: "2025 to Present",
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
    noRepo: "Client work. The client stays anonymous and the code is not public.",
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
    noRepo: "Employer code, not public.",
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
    // Repo homepage relay-six-indol.vercel.app redirects (307) here. Public landing page with sample
    // data only, no X-Frame-Options or CSP frame-ancestors, so it can be embedded.
    links: {
      github: `${GITHUB}/Relay`,
      live: "https://relay-space.vercel.app",
      marketplace: "https://marketplace.visualstudio.com/items?itemName=Relay.relay-tasks",
    },
    media: { liveEmbed: "https://relay-space.vercel.app" },
    demoType: "none",
    order: 7,
  },
  {
    // D6: shown as a small "In progress" card. Repo last pushed 2026-10-15, so not dormant.
    // No launch or announcement copy. Mayank will post about it separately.
    slug: "blindspot",
    name: "Blindspot",
    tagline: "VS Code extension that shows which parts of your codebase you've never actually looked at.",
    year: "2026",
    role: "Solo project",
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
