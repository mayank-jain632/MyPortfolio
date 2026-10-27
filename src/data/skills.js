// Skills, from hub/PORTFOLIO_CONTEXT.md section 6.
// Kept from the old site because current projects back them: Supabase, PostgreSQL, Tailscale.
// Dropped: Polygon.io, Firebase.

/** @type {{ id: string, label: string, items: string[] }[]} */
export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "C/C++", "SQL"],
  },
  {
    id: "frameworks",
    label: "Frameworks and tools",
    items: [
      "React", "Next.js", "Node.js", "FastAPI", "Android", "NumPy", "Pandas", "Docker",
      "Git", "Linux", "Unit Testing", "Supabase", "PostgreSQL", "Tailscale",
    ],
  },
  {
    id: "cloud",
    label: "Cloud and DevOps",
    items: [
      "AWS (Bedrock, EC2, CloudFront, ECR)",
      "Google Cloud (Vertex AI, Cloud Run, BigQuery)",
      "GitLab CI/CD",
    ],
  },
  {
    id: "ml",
    label: "ML and AI",
    items: [
      "PyTorch", "TensorFlow", "OpenCV", "YOLOv11", "Gemini API", "Google ADK",
      "Multi-agent systems", "cGANs",
    ],
  },
];

/** Flat list, for marquees. */
export const allSkills = skillGroups.flatMap((group) => group.items);
