import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { earlierExperience, experience } from "../../data/experience";
import { DURATION, EASE } from "../../lib/motion";
import { Reveal } from "../fx/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function Entry({ item }) {
  return (
    <Reveal as="li" className="grid gap-4 border-t border-hairline py-10 md:grid-cols-[15rem_1fr] md:gap-12">
      <div className="md:sticky md:top-24 md:self-start">
        <p className="text-base text-fg">{item.period}</p>
        <p className="mt-1 text-sm text-fg-subtle">{item.location}</p>
        {item.current && (
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-accent">
            <span aria-hidden="true" className="size-1.5 rounded-pill bg-accent" />
            Current
          </p>
        )}
      </div>
      <div>
        <h3 className="text-title font-semibold text-fg">{item.company}</h3>
        <p className="mt-1 text-lead text-fg-muted">
          {item.role}
          {item.via ? `, through ${item.via}` : ""}
        </p>
        <ul className="mt-6 max-w-prose space-y-3 text-base text-fg-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-pill bg-fg-subtle" />
              {bullet}
            </li>
          ))}
        </ul>
        {item.stack.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
            {item.stack.map((tech) => (
              <li key={tech} className="rounded-pill bg-raised px-3 py-1 text-sm text-fg">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-section">
      <div className="container-page">
        <SectionHeader headingId="experience-title" title="What's new." rest="Roles, newest first." />
        <ol>
          {experience.map((item) => (
            <Entry key={item.id} item={item} />
          ))}
        </ol>

        <div className="border-t border-hairline pt-8">
          <button
            type="button"
            aria-expanded={showEarlier}
            aria-controls="earlier-work"
            onClick={() => setShowEarlier((open) => !open)}
            className="inline-flex items-center gap-3 text-lead text-accent hover:underline"
          >
            Earlier work
            <svg aria-hidden="true" viewBox="0 0 12 8" className={`h-2.5 w-auto transition-transform duration-base ease-out-quart ${showEarlier ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 1.5L6 6l4.5-4.5" />
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {showEarlier && (
              <motion.ol
                id="earlier-work"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
                className="overflow-hidden"
              >
                {earlierExperience.map((item) => (
                  <li key={item.id} className="grid gap-4 border-t border-hairline py-10 first:mt-8 md:grid-cols-[15rem_1fr] md:gap-12">
                    <div>
                      <p className="text-base text-fg">{item.period}</p>
                      <p className="mt-1 text-sm text-fg-subtle">{item.location}</p>
                    </div>
                    <div>
                      <h3 className="text-title font-semibold text-fg">{item.company}</h3>
                      <p className="mt-1 text-lead text-fg-muted">{item.role}</p>
                      <ul className="mt-6 max-w-prose space-y-3 text-base text-fg-muted">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </motion.ol>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
