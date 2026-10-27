// Single source of site content, derived from hub/PORTFOLIO_CONTEXT.md (v2, 2026-10-27).
// Do not add facts that are not in that file. Missing facts are marked "TODO:".
// Never add: phone number, desk PNL/Sharpe/Calmar, Atlas CAGR, client names, client quotes.

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
  // D6: Blindspot shown as a small "In progress" card. Set false if the repo is dormant.
  showBlindspot: true,
  // D8: Truvo and Capital One are not on the resume and stay omitted.
};

// ---------------------------------------------------------------------------
// Identity and links (context sections 1 and 8)
// ---------------------------------------------------------------------------
export const site = {
  name: "Mayank Jain",
  location: "Austin, TX",
  relocation: "Open to relocation",
  // D7: GitHub profile URL is canonical. The repo points to
  // my-portfolio-eight-azure-119agdlasi.vercel.app instead.
  // TODO: confirm the canonical URL and update the GitHub repo "website" field to match.
  canonicalUrl: "https://mayank-jain-portfolio.vercel.app",
  email: "07mayankjain@gmail.com",
  github: "https://github.com/mayank-jain632",
  linkedin: "https://www.linkedin.com/in/mayank-jain-016066293/",
  // TODO: Mayank drops the final PDF at public/Mayank_Jain_Resume.pdf.
  resumePath: "/Mayank_Jain_Resume.pdf",
};

// ---------------------------------------------------------------------------
// Hero (context section 1)
// Alternative headlines kept for reference:
//   "Automation that earns its keep."
//   "From signal to execution in under a second."
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: "Introducing Mayank Jain",
  headline: "I build the systems that run while you sleep.",
  subhead:
    "Trading automation, applied AI, and full-stack products for people who would rather ship than babysit. Independent engineer, UT Austin CS '28.",
  primaryCta: { label: "Work with me", href: `mailto:${site.email}` },
  secondaryCta: { label: "Download resume", href: site.resumePath },
};

// ---------------------------------------------------------------------------
// Services (context section 2). No prices, packages, or turnaround promises.
// ---------------------------------------------------------------------------
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
  },
  {
    id: "workflow-automation",
    name: "Business workflow automation",
    promise: "Internal tools that replace expensive software or manual spreadsheets.",
    proof: [
      "Invoice turnaround cut to about 15 minutes per client, 100+ invoices a month, saving 20+ hours monthly (Crescent).",
    ],
  },
  {
    id: "applied-ai",
    name: "Applied AI and computer vision",
    promise: "Vision pipelines, multi-agent systems, and custom-trained models.",
    proof: [
      "Gemini vision prototype on store cameras flagging empty shelves across 3+ stores (Family Dollar via Convergent Forge).",
      "Custom YOLOv11 recognition model (Clarity).",
      "Recursive multi-agent research platform built in 6 hours (AWS hackathon).",
      "3,000+ image training set built end to end (AvaWatz).",
    ],
  },
  {
    id: "full-stack",
    name: "Full-stack product builds",
    promise: "Next.js, FastAPI, Supabase, Postgres, VS Code extensions, and Android.",
    proof: [
      "Published VS Code extension plus Next.js PM dashboard (Relay).",
      "1st place Supabase x Gemini Track, 2nd place AWS Agentic AI Hackathon, 2nd place HackTX Meta Track.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Headline proof numbers (context section 3)
// ---------------------------------------------------------------------------
export const proofStats = [
  { value: "<1s", label: "signal execution, down from minutes" },
  { value: "50", label: "clients served across about 20 daily signals" },
  { value: "20+", label: "hours saved monthly on invoicing" },
  { value: "3", label: "hackathon podiums in 2026" },
];

// ---------------------------------------------------------------------------
// Experience (context section 4), newest first, rendered as a changelog
// ---------------------------------------------------------------------------
export const experience = [
  {
    company: "Family Dollar",
    via: "Convergent Forge",
    title: "Software Engineer",
    location: "Austin, TX",
    start: "September 2026",
    end: "Present",
    bullets: [
      "Prototyping Gemini vision on Orchid VMS store cameras across 3+ stores, flagging empty shelves for human review.",
      "Building a Vertex AI, ADK, Cloud Run, BigQuery pipeline in a 15-person team, flagging unverified payment terminals.",
    ],
    stack: ["Gemini", "Vertex AI", "Google ADK", "Cloud Run", "BigQuery"],
  },
  {
    company: "Dell STEM Aspire Program",
    title: "Program Participant",
    location: "Austin, TX",
    start: "August 2026",
    end: "Present",
    bullets: ["Selected as 1 of 58 students for a four-month program with 1:1 Dell mentorship."],
    stack: [],
  },
  {
    company: "Crescent Dynamics LLC",
    title: "Founder and Software Engineer",
    location: "Remote",
    start: "December 2025",
    end: decisions.crescentEnd,
    bullets: [
      "Runs an independent venture deploying systemd-based trading automation and client tooling.",
      "Cut signal execution from minutes to under 1 second, automating delivery to 50 clients across about 20 daily signals.",
      "Cut invoice turnaround to about 15 minutes per client, saving 20+ hours monthly across 100+ invoices.",
    ],
    stack: ["Python", "systemd", "TradingView", "IBKR", "React", "Supabase"],
  },
  {
    company: "Proprietary Options Trading Desk",
    title: "Software Engineer",
    location: "Frisco, TX",
    start: "June 2024",
    end: decisions.tradingDeskEnd,
    bullets: [
      "Built pre-execution trading infrastructure in Python, gating entries on volatility signals for 4 to 5 live strategies.",
      "Owns Atlas, a momentum/futures trading platform, including the execution infrastructure behind it.",
    ],
    stack: ["Python"],
  },
  {
    company: "AvaWatz",
    title: "Machine Learning and Computer Vision Intern",
    location: "Remote",
    start: "September 2024",
    end: "December 2025",
    bullets: [
      "Built and evaluated computer vision pipelines for video security: classification, tracking, facial recognition.",
      "Benchmarked the SlowFast dual-stream architecture, analyzing latency and accuracy tradeoffs.",
      "Owned dataset engineering end to end, building a 3,000+ image training set.",
    ],
    stack: ["Python", "PyTorch"],
  },
];

// Collapsed by default.
export const earlierExperience = [
  {
    company: "CARAML Lab, UT Dallas",
    title: "AI Research Intern",
    start: "May 2024",
    end: "July 2024",
    summary:
      "Conditional GANs for synthetic data, LSTM convolutional autoencoder for anomaly detection, ablation studies.",
  },
  {
    company: "Oil A New (501(c)(3))",
    title: "Co-Founder and CTO",
    start: "March 2024",
    end: "August 2025",
    summary: "Full-stack platform coordinating used-oil collection, candle inventory, and orders.",
  },
];

// ---------------------------------------------------------------------------
// Projects (context section 5)
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    slug: "aws-agentic-ai",
    name: "AWS Agentic AI Hackathon",
    award: "2nd Place",
    year: "2026",
    problem: "Fund research needs many parallel lines of inquiry, and strategies need proof before any trade.",
    built:
      "Recursive multi-agent fund research platform built in 6 hours. Agents spawn sub-agents under a configurable cap. Fund workspace with mandate, dashboard, and recursive agent canvas. I owned the walk-forward backtesting layer: every strategy gated on blind PASS/FAIL replays before any paper trade (Alpaca).",
    result: "2nd place, AWS Agentic AI Hackathon.",
    stack: ["React", "Vite", "FastAPI", "AWS Bedrock", "EC2", "CloudFront", "ECR", "Secrets Manager", "IAM"],
    repo: "https://github.com/mayank-jain632/aws-ai-hackathon",
  },
  {
    slug: "clarity",
    name: "Clarity",
    award: "1st Place, Supabase x Gemini Track",
    year: "2026",
    problem: "Dementia caregivers need real-time visibility without sending patient data to public cloud.",
    built:
      "Caregiver-facing assistant. I built the backend and AI pipeline: custom YOLOv11 recognition, Gemini voice, FastAPI, Supabase, Next.js. A Tailscale mesh between iPhone and local backend keeps patient data off public cloud. GPS geofencing and real-time caregiver visibility.",
    result: "1st place, Supabase x Gemini Track. Sub-100ms latency over the private mesh.",
    stack: ["YOLOv11", "Gemini", "FastAPI", "Supabase", "Next.js", "Tailscale"],
    // TODO: confirm the Clarity repo name and add the link.
    repo: "",
  },
  {
    slug: "myst",
    name: "Myst",
    award: "2nd Place, HackTX Meta Track",
    year: "2026",
    problem: "People with early-stage memory loss need hands-free help recognizing family and recalling conversations.",
    built:
      "Ray-Ban Meta glasses companion built with 4 teammates in Kotlin on Android with Meta Wearables DAT and Muse Spark. Consent-gated, revocable face recognition that only names enrolled family and declines to guess on strangers. Live conversation recaps from glasses audio. API key secured with Android Keystore.",
    result: "2nd place, HackTX Meta Track. Correctly recognized enrolled family across about 30 live trials.",
    stack: ["Kotlin", "Android", "Meta Wearables DAT", "Muse Spark", "Android Keystore"],
    repo: "https://github.com/mayank-jain632/Myst",
    // Design note: no photos of real people. Abstract or illustrated visuals only.
  },
  {
    slug: "relay",
    name: "Relay",
    award: "",
    year: "2025 to Present",
    problem: "Tasks discussed in Slack get lost before they reach the editor.",
    built:
      "Published VS Code extension turning Slack messages into assignable tasks. REST API, PostgreSQL, Next.js PM dashboard, GitHub OAuth, and a /nudge command. Railway backend, Vercel frontend.",
    result: "Cut task context-switching about 30 to 35% (resume claim).",
    stack: ["VS Code API", "Node.js", "PostgreSQL", "Next.js", "GitHub OAuth", "Railway", "Vercel"],
    repo: "https://github.com/mayank-jain632/Relay",
  },
  {
    slug: "crescent-client-work",
    name: "Signal platform and invoicing tool",
    award: "Client work",
    // TODO: confirm the years for the anonymous client engagements.
    year: "",
    problem: "Manual signal delivery took minutes, and invoicing ran through expensive industrial software.",
    built:
      "A TradingView-to-IBKR signal deployment service and an Excel-like invoice automation tool that replaced industrial software.",
    result:
      "Signal execution went from minutes to under 1 second for 50 clients. Invoice turnaround dropped to about 15 minutes per client, saving 20+ hours a month.",
    stack: ["Python", "systemd", "TradingView", "IBKR", "React", "Supabase"],
    repo: "",
    anonymous: true,
  },
  {
    slug: "family-dollar-shelf-vision",
    name: "Store shelf vision",
    award: "Family Dollar via Convergent Forge",
    year: "2026",
    problem: "Empty shelves go unnoticed between store walks.",
    built: "Gemini vision prototype on Orchid VMS store cameras, flagging empty shelves for human review.",
    result: "Running across 3+ stores.",
    stack: ["Gemini", "Vertex AI", "Google ADK", "Cloud Run", "BigQuery"],
    repo: "",
  },
];

export const inProgressProjects = decisions.showBlindspot
  ? [
      {
        slug: "blindspot",
        name: "Blindspot",
        status: "In progress",
        summary: "VS Code extension that shows which parts of your codebase you've never actually looked at.",
        repo: "https://github.com/mayank-jain632/Blindspot",
      },
    ]
  : [];

// Archive cards: only entries with a working GitHub link are rendered.
export const archiveProjects = [
  {
    name: "From-scratch ML series",
    summary: "K-Means, linear regression, and a neural network implemented from first principles.",
    repo: "https://github.com/mayank-jain632/K-Means",
  },
  {
    name: "CARAML Labs research",
    summary: "Data-efficient AI research with conditional GANs and autoencoders.",
    repo: "https://github.com/mayank-jain632/CARAML_Labs_Research_Project",
  },
  {
    name: "Oil A New website",
    summary: "Platform for a nonprofit turning used cooking oil into candles.",
    repo: "https://github.com/mayank-jain632/Oil-A-New-Website",
  },
  {
    name: "Indian paper trading app",
    summary: "Paper trading simulator for Indian markets.",
    repo: "https://github.com/mayank-jain632/indianPaperTradingApp",
  },
  {
    name: "Dorm Decor 3D planner",
    summary: "3D room planner built with React Three Fiber.",
    // TODO: add the Dorm Decor repo link. Hidden until set.
    repo: "",
  },
].filter((project) => project.repo);

// ---------------------------------------------------------------------------
// Skills (context section 6)
// ---------------------------------------------------------------------------
export const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "C/C++", "SQL"],
  "Frameworks and tools": [
    "React", "Next.js", "Node.js", "FastAPI", "Android", "NumPy", "Pandas",
    "Docker", "Git", "Linux", "Unit Testing", "Supabase", "PostgreSQL", "Tailscale",
  ],
  "Cloud and DevOps": [
    "AWS (Bedrock, EC2, CloudFront, ECR)",
    "Google Cloud (Vertex AI, Cloud Run, BigQuery)",
    "GitLab CI/CD",
  ],
  "ML and AI": [
    "PyTorch", "TensorFlow", "OpenCV", "YOLOv11", "Gemini API",
    "Google ADK", "Multi-agent systems", "cGANs",
  ],
};

// ---------------------------------------------------------------------------
// Education and credentials (context section 7)
// ---------------------------------------------------------------------------
export const education = {
  school: "The University of Texas at Austin",
  degree: decisions.showMathMajor ? "B.S. Computer Science and Mathematics" : "B.S. Computer Science",
  graduation: "May 2028",
  coursework: ["Data Structures and Algorithms", "Software Engineering", "Operating Systems (in progress)"],
};

export const certifications = [
  { name: "IBM Data Science Professional Certificate", year: "2025" },
  { name: "Microsoft Python Development", year: "2026" },
];
