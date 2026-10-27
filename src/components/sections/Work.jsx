import { AnimatePresence } from "motion/react";
import { featuredProjects } from "../../data/projects";
import { caseStudyHref, useCaseStudyRoute } from "../../lib/router";
import { Reveal } from "../fx/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { CaseStudy } from "../work/CaseStudy";
import { TileArt } from "../work/TileArt";

const WIDE_TILES = new Set([0, 5]);

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

function Tile({ project, isWide, index }) {
  const isPodium = /place/i.test(project.award ?? "");
  const label = project.award || (project.status === "in-progress" ? "In progress" : "");
  return (
    <Reveal
      as="article"
      delay={(index % 2) * 0.08}
      className={`group relative flex min-h-[26rem] flex-col overflow-hidden rounded-xl bg-surface p-7 transition-colors duration-base ease-out-quart hover:bg-raised sm:p-10 ${
        isWide ? "md:col-span-2 md:min-h-[30rem]" : ""
      }`}
    >
      {isWide && <TileArt slug={project.slug} />}
      <p className={`text-base font-medium ${isPodium ? "text-accent" : "text-fg-subtle"}`}>{label}</p>
      <h3 className={`mt-3 font-semibold text-fg ${isWide ? "text-display max-w-[14ch]" : "text-headline max-w-[14ch]"}`}>
        <a href={caseStudyHref(project.slug)} className="outline-offset-8 after:absolute after:inset-0 after:content-['']">
          {project.name}
        </a>
      </h3>
      <p className={`mt-4 text-lead text-fg-muted ${isWide ? "max-w-[34ch]" : "max-w-[28ch]"}`}>{project.tagline}</p>

      <div className="mt-auto flex items-end justify-between gap-6 pt-10">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-fg-subtle">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-fg/10 text-fg transition-[background-color,transform] duration-base ease-out-quart group-hover:rotate-90 group-hover:bg-fg group-hover:text-ink"
        >
          <PlusIcon />
        </span>
      </div>
    </Reveal>
  );
}

export function Work() {
  const { slug, close } = useCaseStudyRoute();
  const open = featuredProjects.find((project) => project.slug === slug);

  return (
    <section id="work" aria-labelledby="work-title" className="py-section">
      <div className="container-page">
        <SectionHeader headingId="work-title" title="Selected work." rest="Open any project to read how it was built." />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Tile key={project.slug} project={project} isWide={WIDE_TILES.has(index)} index={index} />
          ))}
        </div>
      </div>
      <AnimatePresence>{open && <CaseStudy key={open.slug} project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
