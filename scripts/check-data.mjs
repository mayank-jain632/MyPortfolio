#!/usr/bin/env node
// Fails the build if site content breaks the copy and publishing rules in hub/PORTFOLIO_CONTEXT.md.
// Runs as `npm run check:data` and before every `npm run build`.
import { execFile } from "node:child_process";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_DIRS = ["src"];
const SCAN_FILES = ["index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx", ".css", ".html", ".json", ".md", ".svg"]);
const DEMO_TYPES = new Set(["signal-pipeline", "invoice", "agent-tree", "shelf-vision", "none"]);
const VIDEO_ID = { youtube: /^[\w-]{11}$/, vimeo: /^\d+$/ };
const RESUME_PDF = "public/Mayank_Jain_Resume.pdf";

// Private data that must never ship, in source or in the public resume.
const PRIVATE_RULES = [
  { name: "phone number", pattern: /(?:\+?1[\s.-]?)?\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/ },
  { name: "desk performance figure (Sharpe/Calmar/CAGR/PNL)", pattern: /\b(?:sharpe|calmar|cagr|pnl)\b/i },
];

const CONTENT_RULES = [
  { name: "em dash", pattern: /—/ },
  { name: "non-breaking hyphen (U+2011)", pattern: /‑/ },
  { name: '"Summer 2026" (stale)', pattern: /Summer 2026/i },
  { name: '"200 subscribers" (use 50 clients)', pattern: /200 subscribers/i },
  { name: '"particles" (removed)', pattern: /particles/i },
  ...PRIVATE_RULES,
  { name: "tel: link", pattern: /\btel:/i },
];

async function exists(file) {
  return access(file).then(
    () => true,
    () => false
  );
}

function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

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

function checkLinks(project, where) {
  const { links } = project;
  if (!links || typeof links.github !== "string") return [`${where}: missing links.github`];
  const problems = Object.entries(links)
    .filter(([, value]) => value && !isHttpsUrl(value))
    .map(([key]) => `${where}: links.${key} is not an https URL`);
  const hasReason = Boolean(project.noRepo) || String(project.todo ?? "").includes("TODO");
  if (project.featured && !links.github && !hasReason) {
    problems.push(`${where}: featured project has no github link, no noRepo reason, and no TODO marker`);
  }
  return problems;
}

async function checkMedia(project, where) {
  if (!project.media) return [];
  const { video, poster, images = [], liveEmbed } = project.media;
  const problems = [];
  if (video && !VIDEO_ID[video.provider]?.test(video.id ?? "")) {
    problems.push(`${where}: media.video needs provider youtube or vimeo and a valid id`);
  }
  if (video && !video.title) problems.push(`${where}: media.video needs a title for the iframe`);
  if (liveEmbed && !isHttpsUrl(liveEmbed)) problems.push(`${where}: media.liveEmbed is not an https URL`);

  const files = [poster, ...images.map((image) => image.src)].filter(Boolean);
  for (const src of files) {
    if (!src.startsWith(`/media/${project.slug}/`)) problems.push(`${where}: ${src} must live under /media/${project.slug}/`);
    else if (!(await exists(path.join(ROOT, "public", src)))) problems.push(`${where}: ${src} not found in public/`);
  }
  for (const image of images) {
    if (!image.alt) problems.push(`${where}: image ${image.src} needs alt text`);
  }
  return problems;
}

async function checkProjects() {
  const problems = [];
  const { projects } = await import(pathToFileURL(path.join(ROOT, "src/data/projects.js")).href);
  const seen = new Set();

  for (const project of projects) {
    const where = `src/data/projects.js  ${project.slug}`;
    if (seen.has(project.slug)) problems.push(`${where}: duplicate slug`);
    seen.add(project.slug);
    if (!DEMO_TYPES.has(project.demoType)) problems.push(`${where}: invalid demoType "${project.demoType}"`);
    problems.push(...checkLinks(project, where), ...(await checkMedia(project, where)));
  }
  return problems;
}

// The public resume must carry the same redactions as the site.
async function checkResume() {
  const file = path.join(ROOT, RESUME_PDF);
  if (!(await exists(file))) return [];
  let text;
  try {
    ({ stdout: text } = await promisify(execFile)("pdftotext", ["-layout", file, "-"]));
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn(`check:data warning: pdftotext is not installed, skipped ${RESUME_PDF}`);
      return [];
    }
    return [`${RESUME_PDF}: pdftotext failed (${error.message.split("\n")[0]})`];
  }
  return PRIVATE_RULES.filter((rule) => rule.pattern.test(text)).map((rule) => `${RESUME_PDF}  ${rule.name}`);
}

const problems = [...(await checkContent()), ...(await checkProjects()), ...(await checkResume())];

if (problems.length > 0) {
  console.error(`check:data failed with ${problems.length} problem(s):`);
  problems.forEach((problem) => console.error(`  ${problem}`));
  process.exit(1);
}
console.log("check:data passed");
