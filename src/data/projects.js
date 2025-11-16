export const projects = [
  {
    name: "Indian Paper Trading App",
    slug: "indian-paper-trading-app",
    highlight: "A live‑data stock & futures simulator for Indian markets.",
    description:
      "A full‑stack paper trading platform that connects to real‑time NSE data, displays TradingView‑like charts, and tracks a virtual portfolio so strategies can be tested without real capital.",
    impact:
      "Gives new traders a realistic sandbox to validate ideas and understand risk, while enabling rapid iteration on my own systematic strategies.",
    tech: ["TypeScript", "React", "Node.js", "WebSockets"],
    links: {
      github: "https://github.com/mayank-jain632/indianPaperTradingApp"
    },
    category: "Fintech & Quant"
  },
  {
    name: "CARAML Labs — Data‑Efficient AI Framework",
    slug: "caraml-labs",
    highlight: "Research framework for deep learning with minimal labeled data.",
    description:
      "A research codebase exploring how conditional GANs and LSTM‑based convolutional autoencoders can be combined with active learning to train robust models when labeled data is scarce.",
    impact:
      "Clarified best‑practices for synthetic data generation and anomaly detection while giving me hands‑on experience with research‑grade experimentation.",
    tech: ["Python", "PyTorch", "GANs", "Autoencoders"],
    links: {
      github: "https://github.com/mayank-jain632/CARAML_Labs_Research_Project"
    },
    category: "AI & ML"
  },
  {
    name: "Oil A New Web Platform",
    slug: "oil-a-new",
    highlight: "Full‑stack platform for a sustainability‑focused nonprofit.",
    description:
      "A responsive web experience for a 501(c)(3) that turns waste cooking oil into handcrafted candles. Includes donor‑facing storytelling pages, internal operations views, and basic analytics.",
    impact:
      "Enabled our small team to coordinate collections, production, and sales digitally, scaling impact far beyond what manual tracking could support.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/mayank-jain632/Oil-A-New-Website"
    },
    category: "Web & Product"
  },
  {
    name: "Pooled — Group Payments App",
    slug: "pooled",
    highlight: "A mobile‑first app to pool money with friends for shared goals.",
    description:
      "A React Native + Firebase app where users can create 'pools' for trips, dinners, or shared subscriptions, invite friends, and transparently track contributions.",
    impact:
      "Turned the pain point of splitting costs into a clean product, while forcing careful thinking around authentication, security, and payment flows.",
    tech: ["React Native", "Firebase", "Figma"],
    links: {
      github: "",
      external: ""
    },
    category: "Product & UX"
  },
  {
    name: "Swift Bot Internal Tools",
    slug: "swift-bot",
    highlight: "Automation tools for a niche recruiting agency.",
    description:
      "Internal dashboards and scripts to streamline sourcing, ranking, and contacting strong Java developer candidates for partner companies.",
    impact:
      "Reduced manual work and response time, letting a small team punch above its weight while keeping process quality high.",
    tech: ["Python", "APIs", "Automation"],
    links: {},
    category: "Automation"
  },
  {
    name: "From‑Scratch ML Series",
    slug: "from-scratch-ml",
    highlight: "Core ML algorithms implemented from first principles.",
    description:
      "A series of Colab notebooks implementing K‑Means, Linear Regression, and a basic Neural Network from scratch — including gradient descent and backpropagation — to demystify how models actually learn.",
    impact:
      "Deepened my intuition for optimization, loss landscapes, and the trade‑offs between expressiveness and stability in simple models.",
    tech: ["Python", "NumPy", "Jupyter"],
    links: {
      github: "https://github.com/mayank-jain632/K-Means"
    },
    category: "Foundations"
  },
  {
    name: "Quant Research Notebooks",
    slug: "quant-notebooks",
    highlight: "Explorations in options, micro‑futures, and systematic trading.",
    description:
      "Experimental notebooks that pull historical data, compute greeks and risk metrics, and prototype rules for intraday and swing strategies.",
    impact:
      "Provide a playground for testing ideas before promoting them into production‑grade backtesting code.",
    tech: ["Python", "Pandas", "Matplotlib"],
    links: {},
    category: "Fintech & Quant"
  },
  {
    name: "Dorm Decor 3D Planner (Concept)",
    slug: "dorm-decor",
    highlight: "Interactive 3D dorm designer connected to real products.",
    description:
      "A web app concept built with Three.js where students can lay out furniture in a 3D model of their dorm room, then buy the exact items via affiliate links.",
    impact:
      "Combines 3D experience design, commerce, and real‑world constraints — a sandbox for experimenting with product sense and technical execution.",
    tech: ["Three.js", "React", "Supabase"],
    links: {},
    category: "Product & UX"
  }
];

export const projectCategories = [
  "All",
  "AI & ML",
  "Fintech & Quant",
  "Web & Product",
  "Product & UX",
  "Automation",
  "Foundations"
];
