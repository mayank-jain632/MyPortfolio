#!/usr/bin/env node
// Fails the build if site content breaks the copy and publishing rules in hub/PORTFOLIO_CONTEXT.md.
// Runs as `npm run check:data` and before every `npm run build`.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_DIRS = ["src"];
const SCAN_FILES = ["index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx", ".css", ".html", ".json", ".md", ".svg"]);
const DEMO_TYPES = new Set(["signal-pipeline", "invoice", "agent-tree", "shelf-vision", "none"]);

const CONTENT_RULES = [
  { name: "em dash", pattern: /—/ },
  { name: "non-breaking hyphen (U+2011)", pattern: /‑/ },
  { name: '"Summer 2026" (stale)', pattern: /Summer 2026/i },
  { name: '"200 subscribers" (use 50 clients)', pattern: /200 subscribers/i },
  { name: '"particles" (removed)', pattern: /particles/i },
  { name: "phone number", pattern: /(?:\+?1[\s.-]?)?\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/ },
  { name: "tel: link", pattern: /\btel:/i },
  { name: "desk performance figure (Sharpe/Calmar/CAGR/PNL)", pattern: /\b(?:sharpe|calmar|cagr|pnl)\b/i },
];

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(full) : [full];
    })
  );
  return nested.flat();
}

async function collectTextFiles() {
  const fromDirs = await Promise.all(SCAN_DIRS.map((dir) => listFiles(path.join(ROOT, dir))));
  const files = [...fromDirs.flat(), ...SCAN_FILES.map((file) => path.join(ROOT, file))];
  return files.filter((file) => TEXT_EXTENSIONS.has(path.extname(file)));
}

async function checkContent() {
  const problems = [];
  for (const file of await collectTextFiles()) {
    const lines = (await readFile(file, "utf8")).split("\n");
    lines.forEach((line, index) => {
      for (const rule of CONTENT_RULES) {
        if (rule.pattern.test(line)) {
          problems.push(`${path.relative(ROOT, file)}:${index + 1}  ${rule.name}`);
        }
      }
    });
  }
  return problems;
}

async function checkProjects() {
  const problems = [];
  const { projects, archive } = await import(pathToFileURL(path.join(ROOT, "src/data/projects.js")).href);
  const seen = new Set();

  for (const project of projects) {
    const where = `src/data/projects.js  ${project.slug}`;
    if (seen.has(project.slug)) problems.push(`${where}: duplicate slug`);
    seen.add(project.slug);
    if (!DEMO_TYPES.has(project.demoType)) problems.push(`${where}: invalid demoType "${project.demoType}"`);
    if (!project.links || typeof project.links.github !== "string") problems.push(`${where}: missing links.github`);
    if (project.featured && !project.links?.github && !String(project.todo ?? "").includes("TODO")) {
      problems.push(`${where}: featured project has no github link and no TODO marker`);
    }
  }

  for (const project of archive) {
    if (!project.links?.github) problems.push(`src/data/projects.js  archive ${project.slug}: archive entries need a github link`);
  }
  return problems;
}

const problems = [...(await checkContent()), ...(await checkProjects())];

if (problems.length > 0) {
  console.error(`check:data failed with ${problems.length} problem(s):`);
  problems.forEach((problem) => console.error(`  ${problem}`));
  process.exit(1);
}
console.log("check:data passed");
