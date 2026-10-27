import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { featuredProjects } from "../../data/projects";
import { caseStudyHref } from "../../lib/router";
import { DURATION, EASE } from "../../lib/motion";
import { Demo } from "../demos/Demo";
import { ProjectMedia } from "../media/ProjectMedia";
import { ButtonLink } from "../ui/Button";

const STATUS_LABEL = {
  hackathon: "Hackathon",
  shipped: "Shipped",
  "in-progress": "In progress",
  "client-work": "Client work",
};

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])';

function Block({ title, children }) {
  return (
    <section className="grid gap-3 border-t border-hairline py-8 md:grid-cols-[11rem_1fr] md:gap-10">
      <h2 className="text-base font-semibold text-fg">{title}</h2>
      <div className="text-base text-fg-muted">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-pill bg-fg-subtle" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function NeighborLink({ project, direction }) {
  if (!project) return <span />;
  return (
    <a
      href={caseStudyHref(project.slug)}
      className={`group flex flex-col gap-1 rounded-md border border-hairline p-5 transition-colors duration-fast hover:border-hairline-strong ${
        direction === "next" ? "items-end text-right" : ""
      }`}
    >
      <span className="text-sm text-fg-subtle">{direction === "next" ? "Next" : "Previous"}</span>
      <span className="text-lead font-semibold text-fg">{project.name}</span>
    </a>
  );
}

/**
 * Full-screen case study sheet. Esc or the close button returns to the work section.
 * @param {{ project: import("../../data/projects").Project, onClose: () => void }} props
 */
export function CaseStudy({ project, onClose }) {
  const sheetRef = useRef(null);
  const closeRef = useRef(null);
  const index = featuredProjects.findIndex((item) => item.slug === project.slug);
  const previous = featuredProjects[index - 1];
  const next = featuredProjects[index + 1];
  const { links = {} } = project;
  const hasDemo = project.demoType && project.demoType !== "none";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = sheetRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    sheetRef.current?.scrollTo({ top: 0 });
  }, [project.slug]);

  const credits = project.builtWith?.length ? project.builtWith.join(", ") : null;

  return (
    <motion.div
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black"
    >
      <div className="sticky top-0 z-10 border-b border-hairline bg-black/80 backdrop-blur-xl">
        <div className="container-page flex h-12 max-w-4xl items-center justify-between">
          <span className="text-sm font-semibold text-fg">Work</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="-mr-3 flex h-9 items-center gap-2 rounded-pill px-3 text-sm text-fg-muted transition-colors duration-fast hover:text-fg"
          >
            Close
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>
      </div>

      <article className="container-page max-w-4xl pb-section pt-16 sm:pt-24">
        <p className="text-base text-accent">{project.award || STATUS_LABEL[project.status]}</p>
        <h1 id="case-title" className="mt-4 text-display font-semibold text-fg">
          {project.name}
        </h1>
        <p className="mt-6 max-w-[34ch] text-title font-medium text-fg-muted">{project.tagline}</p>

        <dl className="mt-12 grid gap-x-8 gap-y-5 text-base sm:grid-cols-3">
          <div>
            <dt className="text-sm text-fg-subtle">Role</dt>
            <dd className="mt-1 text-fg">{project.role}</dd>
          </div>
          <div>
            <dt className="text-sm text-fg-subtle">Year</dt>
            <dd className="mt-1 text-fg">
              {project.year}, {STATUS_LABEL[project.status].toLowerCase()}
            </dd>
          </div>
          {credits && (
            <div>
              <dt className="text-sm text-fg-subtle">Built with</dt>
              <dd className="mt-1 text-fg">{credits}</dd>
            </div>
          )}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {links.github && (
            <ButtonLink size="md" href={links.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </ButtonLink>
          )}
          {links.devpost && (
            <ButtonLink variant="ghost" href={links.devpost} target="_blank" rel="noopener noreferrer">
              Devpost
            </ButtonLink>
          )}
          {links.marketplace && (
            <ButtonLink variant="ghost" href={links.marketplace} target="_blank" rel="noopener noreferrer">
              VS Code Marketplace
            </ButtonLink>
          )}
          {links.live && !project.media?.liveEmbed && (
            <ButtonLink variant="ghost" href={links.live} target="_blank" rel="noopener noreferrer">
              Open live site
            </ButtonLink>
          )}
          {links.githubMirror && (
            <ButtonLink variant="ghost" href={links.githubMirror} target="_blank" rel="noopener noreferrer">
              Mirror repo
            </ButtonLink>
          )}
          {project.noRepo && <p className="text-sm text-fg-subtle">{project.noRepo}</p>}
        </div>

        {project.media && (
          <div className="mt-14">
            <ProjectMedia project={project} />
          </div>
        )}

        <div className="mt-16">
          {project.problem && <Block title="The problem">{project.problem}</Block>}
          {project.build.length > 0 && <Block title="What I built"><List items={project.build} /></Block>}
          {project.teamBuild?.length > 0 && <Block title="Built with the team"><List items={project.teamBuild} /></Block>}
          {project.result.length > 0 && <Block title="Result"><List items={project.result} /></Block>}
          {project.stack.length > 0 && (
            <Block title="Stack">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-pill bg-raised px-3 py-1 text-sm text-fg">
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {hasDemo && (
            <Block title="Try it">
              <Demo type={project.demoType} />
            </Block>
          )}
        </div>

        <nav aria-label="More case studies" className="mt-12 grid grid-cols-2 gap-4 border-t border-hairline pt-12">
          <NeighborLink project={previous} direction="previous" />
          <NeighborLink project={next} direction="next" />
        </nav>
      </article>
    </motion.div>
  );
}
