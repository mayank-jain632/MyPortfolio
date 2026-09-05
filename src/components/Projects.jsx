import React, { useState, useMemo } from "react";
import { projects, projectCategories } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-4 text-xs text-slate-200 shadow-sm shadow-slate-950/50 transition-all duration-150 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:px-5 sm:py-5"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              {project.name}
            </h3>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
              {project.category}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[0.8rem] text-slate-200">{project.highlight}</p>
        <p className="mt-2 text-[0.78rem] text-slate-400">{project.description}</p>
        <p className="mt-2 text-[0.78rem] text-slate-300">{project.impact}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[0.68rem] text-slate-200 transition-colors duration-150 hover:bg-accent-500/20 hover:text-accent-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-[0.75rem]">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 transition-colors duration-150"
            >
              <span className="group-hover:underline">GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.external && (
            <a
              href={project.links.external}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 transition-colors duration-150"
            >
              <span className="group-hover:underline">Live demo</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="border-b border-slate-800/70 py-14 sm:py-16">
      <div className="section-shell fade-in">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Projects
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-[0.8rem]">
              A mix of research, products, and experiments I&apos;ve enjoyed building.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[0.7rem]">
            {projectCategories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-3 py-1 transition-colors duration-150 ${
                    active
                      ? "border-accent-500 bg-accent-500/10 text-accent-300"
                      : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-accent-500/50 hover:bg-accent-500/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 fade-in">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
