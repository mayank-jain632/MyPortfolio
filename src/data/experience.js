// Experience, from hub/PORTFOLIO_CONTEXT.md section 4. Newest first. Rendered as a changelog.
// Dropped per context: Swift Bot Technologies.
import { decisions } from "./site.config.js";

const PRESENT = "Present";

/**
 * @typedef {object} Role
 * @property {string} id
 * @property {string} company
 * @property {string} [via] staffing or program partner
 * @property {string} role
 * @property {string} location
 * @property {string} start
 * @property {string} end
 * @property {string} period display string, "start to end"
 * @property {boolean} current
 * @property {string[]} bullets
 * @property {string[]} stack
 */

/** @returns {Role} */
function role({ start, end, ...rest }) {
  return { ...rest, start, end, period: `${start} to ${end}`, current: end === PRESENT };
}

/** @type {Role[]} */
export const experience = [
  role({
    id: "family-dollar",
    company: "Family Dollar",
    via: "Convergent Forge",
    role: "Software Engineer",
    location: "Austin, TX",
    start: "September 2026",
    end: PRESENT,
    bullets: [
      "Prototyping Gemini vision on Orchid VMS store cameras across 3+ stores, flagging empty shelves for human review.",
      "Building a Vertex AI, ADK, Cloud Run, BigQuery pipeline in a 15-person team, flagging unverified payment terminals.",
    ],
    stack: ["Gemini", "Vertex AI", "Google ADK", "Cloud Run", "BigQuery"],
  }),
  role({
    id: "dell-stem-aspire",
    company: "Dell STEM Aspire Program",
    role: "Program Participant",
    location: "Austin, TX",
    start: "August 2026",
    end: PRESENT,
    bullets: ["Selected as 1 of 58 students for a four-month program with 1:1 Dell mentorship."],
    stack: [],
  }),
  role({
    id: "crescent",
    company: "Crescent Dynamics LLC",
    role: "Founder and Software Engineer",
    location: "Remote",
    start: "December 2025",
    // D3: company shown as current; client case studies stay past tense.
    end: decisions.crescentEnd,
    bullets: [
      "Runs an independent venture deploying systemd-based trading automation and client tooling.",
      "Cut signal execution from minutes to under 1 second, automating delivery to 50 clients across about 20 daily signals.",
      "Cut invoice turnaround to about 15 minutes per client, saving 20+ hours monthly across 100+ invoices.",
    ],
    stack: ["Python", "systemd", "TradingView", "IBKR", "React", "Supabase"],
  }),
  role({
    id: "trading-desk",
    company: "Proprietary Options Trading Desk",
    role: "Software Engineer",
    location: "Frisco, TX",
    start: "June 2024",
    // D2: follows the resume. Flip decisions.tradingDeskEnd to "Present" if still active.
    end: decisions.tradingDeskEnd,
    // Public-safe wording only. No performance figures.
    bullets: [
      "Built pre-execution trading infrastructure in Python, gating entries on volatility signals for 4 to 5 live strategies.",
      "Owns Atlas, a momentum/futures trading platform, including the execution infrastructure behind it.",
    ],
    stack: ["Python"],
  }),
  role({
    id: "avawatz",
    company: "AvaWatz",
    role: "Machine Learning and Computer Vision Intern",
    location: "Remote",
    start: "September 2024",
    end: "December 2025",
    bullets: [
      "Built and evaluated computer vision pipelines for video security: classification, tracking, facial recognition.",
      "Benchmarked the SlowFast dual-stream architecture, analyzing latency and accuracy tradeoffs.",
      "Owned dataset engineering end to end, building a 3,000+ image training set.",
    ],
    stack: ["Python", "PyTorch"],
  }),
];

// Collapsed by default.
/** @type {Role[]} */
export const earlierExperience = [
  role({
    id: "caraml",
    company: "CARAML Lab, UT Dallas",
    role: "AI Research Intern",
    location: "Richardson, TX",
    start: "May 2024",
    end: "July 2024",
    bullets: [
      "Conditional GANs for synthetic data, LSTM convolutional autoencoder for anomaly detection, ablation studies.",
    ],
    stack: ["Python", "PyTorch"],
  }),
  role({
    id: "oil-a-new",
    company: "Oil A New (501(c)(3))",
    role: "Co-Founder and CTO",
    location: "McKinney, TX",
    start: "March 2024",
    end: "August 2025",
    bullets: ["Full-stack platform coordinating used-oil collection, candle inventory, and orders."],
    stack: [],
  }),
];
