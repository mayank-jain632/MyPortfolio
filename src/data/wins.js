// Awards and selections, from hub/PORTFOLIO_CONTEXT.md sections 3 and 4.
// Award titles use the resume wording.

/**
 * @typedef {object} Win
 * @property {string} id
 * @property {string} title
 * @property {string} event
 * @property {string} year
 * @property {"award" | "selection"} kind
 * @property {string} [projectSlug] links to projects.js
 */

/** @type {Win[]} */
export const wins = [
  {
    id: "clarity",
    title: "1st Place",
    event: "Supabase x Gemini Track",
    year: "2026",
    kind: "award",
    projectSlug: "clarity",
  },
  {
    id: "aws",
    title: "2nd Place",
    event: "AWS Agentic AI Hackathon",
    year: "2026",
    kind: "award",
    projectSlug: "aws-agentic-ai",
  },
  {
    id: "myst",
    title: "2nd Place",
    event: "HackTX Meta Track",
    year: "2026",
    kind: "award",
    projectSlug: "myst",
  },
  {
    id: "dell",
    title: "1 of 58 students selected",
    event: "Dell STEM Aspire Program",
    year: "2026",
    kind: "selection",
  },
];
