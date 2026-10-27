import { useRef } from "react";
import { certifications } from "../../data/education";
import { featuredProjects } from "../../data/projects";
import { stats } from "../../data/stats";
import { wins } from "../../data/wins";
import { caseStudyHref } from "../../lib/router";
import { StatValue } from "../../lib/stats";
import { Reveal, RevealGroup, RevealItem } from "../fx/Reveal";
import { TextLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

// Featured stats already sit in the hero. These are the rest worth showing.
const NUMBER_IDS = ["invoices-monthly", "training-images", "hackathon-hours", "mesh-latency", "live-strategies", "stores"];
const numbers = NUMBER_IDS.map((id) => stats.find((item) => item.id === id)).filter(Boolean);

const CARD =
  "flex min-h-[26rem] w-[min(82vw,24rem)] shrink-0 snap-start flex-col rounded-xl bg-surface p-8 sm:w-[26rem]";

function WinCard({ win }) {
  const hasStudy = win.projectSlug && featuredProjects.some((project) => project.slug === win.projectSlug);
  return (
    <li className={CARD}>
      <p className="text-base text-fg-subtle">{win.year}</p>
      <p className="mt-3 max-w-[10ch] text-headline font-semibold text-fg">{win.title}</p>
      <p className="mt-4 text-lead text-fg-muted">{win.event}</p>
      {hasStudy && (
        <TextLink href={caseStudyHref(win.projectSlug)} className="mt-auto pt-8 text-base">
          Read the case study
        </TextLink>
      )}
    </li>
  );
}

function CredentialsCard() {
  return (
    <li className={CARD}>
      <p className="text-base text-fg-subtle">Credentials</p>
      <p className="mt-3 max-w-[10ch] text-headline font-semibold text-fg">Certified.</p>
      <ul className="mt-auto space-y-4 pt-8">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <TextLink href={cert.url} external className="text-base">
              {cert.name}
            </TextLink>
            <p className="mt-0.5 text-sm text-fg-subtle">
              {cert.issuer}, {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
}

function RailButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "next" ? "Next highlights" : "Previous highlights"}
      className="flex size-11 items-center justify-center rounded-pill bg-raised text-fg transition-[background-color,transform] duration-fast hover:bg-fg/20 active:scale-95"
    >
      <svg aria-hidden="true" viewBox="0 0 8 12" className={`h-3.5 w-auto ${direction === "prev" ? "-scale-x-100" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.5 1.5L6.5 6l-5 4.5" />
      </svg>
    </button>
  );
}

export function Proof() {
  const rail = useRef(null);
  const scrollRail = (direction) => {
    const node = rail.current;
    if (!node) return;
    const step = node.firstElementChild?.getBoundingClientRect().width ?? 400;
    node.scrollBy({ left: direction * (step + 20), behavior: "smooth" });
  };

  return (
    <section id="proof" aria-labelledby="proof-title" className="py-section">
      <div className="container-page">
        <SectionHeader headingId="proof-title" title="Get the highlights." rest="Three podiums in 2026, and one program that took 58 students." />
      </div>

      <ul
        ref={rail}
        tabIndex={0}
        aria-label="Highlights, scrolls sideways"
        className="rail flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-gutter pb-2 md:px-[max(var(--space-gutter),calc((100vw-1200px)/2+var(--space-gutter)))] md:scroll-pl-[max(var(--space-gutter),calc((100vw-1200px)/2+var(--space-gutter)))]"
      >
        {wins.map((win) => (
          <WinCard key={win.id} win={win} />
        ))}
        <CredentialsCard />
      </ul>
      <div className="container-page mt-6 flex justify-end gap-3">
        <RailButton direction="prev" onClick={() => scrollRail(-1)} />
        <RailButton direction="next" onClick={() => scrollRail(1)} />
      </div>

      <div className="container-page mt-section">
        <Reveal as="h3" className="max-w-[20ch] text-title font-semibold text-fg">
          By the numbers.
        </Reveal>
        <RevealGroup as="dl" className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
          {numbers.map((stat) => (
            <RevealItem key={stat.id} className="flex flex-col border-t border-hairline pt-6">
              <dd className="order-1 text-headline font-semibold text-fg">
                <StatValue stat={stat} />
              </dd>
              <dt className="order-2 mt-3 max-w-[26ch] text-base text-fg-muted">
                {stat.label}
                <span className="mt-1 block text-sm text-fg-subtle">{stat.source}</span>
              </dt>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
