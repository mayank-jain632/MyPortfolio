// Identity, links, open decisions, and hero copy, from hub/PORTFOLIO_CONTEXT.md (v2, 2026-10-27).
// Content lives beside this file: experience, projects, services, stats, skills, wins, education.
// Do not add facts that are not in the context file. Missing facts are marked "TODO:".
// Forbidden content is enforced by scripts/check-data.mjs, which runs before every build.

// ---------------------------------------------------------------------------
// Decisions (context section 11). Flip these fields to override the defaults.
// ---------------------------------------------------------------------------
export const decisions = {
  // D1: availability badge text. Do not name an internship employer.
  availability: "Open to select projects",
  // D2: trading desk end date. Resume says August 2026. Set to "Present" to flip.
  tradingDeskEnd: "August 2026",
  // D3: Crescent shown as "Present", but case studies stay past tense with no active-client claims.
  crescentEnd: "Present",
  // D4: math double major is unconfirmed. Set true once confirmed.
  showMathMajor: false,
  // D5: GPA omitted from the public site.
  showGpa: false,
  // D6: Blindspot shown as a small "In progress" card. Set false if the repo goes dormant.
  showBlindspot: true,
  // D8: Truvo and Capital One are not on the resume and stay omitted.
};

// ---------------------------------------------------------------------------
// Identity and links (context sections 1 and 8)
// ---------------------------------------------------------------------------
export const site = {
  name: "Mayank Jain",
  // Keep title and description in sync with index.html.
  title: "Mayank Jain | Software engineer for trading automation and applied AI",
  description:
    "Trading automation, applied AI, and full-stack products. Independent engineer, UT Austin CS '28.",
  location: "Austin, TX",
  relocation: "Open to relocation",
  email: "07mayankjain@gmail.com",
  availability: decisions.availability,
  links: {
    github: "https://github.com/mayank-jain632",
    linkedin: "https://www.linkedin.com/in/mayank-jain-016066293/",
    // TODO: Mayank adds a web-safe resume (no phone, no desk figures) here. Until then this link 404s.
    // scripts/check-data.mjs scans the PDF text once the file exists.
    resume: "/Mayank_Jain_Resume.pdf",
    // D7, checked 2026-10-27: this URL serves the production deployment (200).
    // my-portfolio-eight-azure-119agdlasi.vercel.app, the repo's "website" field, returns 404.
    canonical: "https://mayank-jain-portfolio.vercel.app",
  },
};

// In-page sections, in order. Drives the navbar and its active state.
export const navigation = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "proof", label: "Proof" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Hero and about copy (context section 1). The first headline is the one shown.
// ---------------------------------------------------------------------------
export const headlines = [
  "I build the systems that run while you sleep.",
  "Automation that earns its keep.",
  "From signal to execution in under a second.",
];

export const hero = {
  eyebrow: "Introducing Mayank Jain",
  headline: headlines[0],
  subhead:
    "Trading automation, applied AI, and full-stack products for people who would rather ship than babysit. Independent engineer, UT Austin CS '28.",
  primaryCta: { label: "Work with me", href: `mailto:${site.email}` },
  secondaryCta: { label: "Download resume", href: site.links.resume },
};

export const about = {
  summary: "Software engineer first. Trading automation and applied AI are where I go deepest.",
  details: [
    "CS at UT Austin, graduating May 2028.",
    "Independent engineering work through Crescent Dynamics LLC.",
    `Based in ${site.location}. ${site.relocation}.`,
  ],
};
