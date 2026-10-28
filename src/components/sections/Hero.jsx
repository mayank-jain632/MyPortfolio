import { useRef } from "react";
import { education } from "../../data/education";
import { hasResume, hero, site } from "../../data/site.config";
import { Magnetic } from "../fx/Magnetic";
import { Reveal, RevealGroup, RevealItem } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";
import { DotGrid } from "../hero/DotGrid";
import { RoleRotator } from "../hero/RoleRotator";
import { Terminal } from "../hero/Terminal";
import { ButtonLink, TextLink } from "../ui/Button";

// At a glance: the basics a recruiter looks for first.
const glance = [
  { value: "UT Austin", label: "School" },
  { value: "CS and Math", label: "B.S. degree" },
  { value: "Class of 2028", label: education.standing },
  { value: education.gpa, label: "GPA" },
];

export function Hero() {
  const section = useRef(null);
  return (
    <section ref={section} id="hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-40">
      <DotGrid parentRef={section} />
      {/* One soft splash of green behind the headline. The canvas stays black. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]"
        style={{ background: "radial-gradient(55% 60% at 50% 0%, oklch(80% 0.2 150 / 0.16), transparent)" }}
      />
      <div className="container-page flex flex-col items-center text-center">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
          <span className="font-medium text-accent">{hero.eyebrow}</span>
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline px-3 py-1 text-fg-muted">
            <span aria-hidden="true" className="size-1.5 rounded-pill bg-accent" />
            {site.availability}
          </span>
        </Reveal>

        <h1 id="hero-title" className="mt-6 text-balance text-hero font-semibold text-fg">
          <span className="block">
            <SplitText text={`Hello, I'm ${site.name.split(" ")[0]}.`} trigger="mount" delay={0.15} stagger={0.07} />
          </span>
          <Reveal as="span" delay={0.55} className="block">
            <RoleRotator />
          </Reveal>
        </h1>

        <Reveal delay={0.7}>
          <p className="mt-7 max-w-[34rem] text-balance text-lead text-fg-muted">
            <span className="font-semibold text-fg">Learns fast. Ships faster.</span> {hero.subhead}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Magnetic>
              <ButtonLink href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </ButtonLink>
            </Magnetic>
            {hasResume ? (
              <TextLink className="text-lead" href={hero.secondaryCta.href} download>
                {hero.secondaryCta.label}
              </TextLink>
            ) : (
              <TextLink className="text-lead" href="#work">
                See the work
              </TextLink>
            )}
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-14">
        <Terminal />
      </div>

      <RevealGroup as="dl" stagger={0.1} className="container-page grid grid-cols-2 gap-x-6 gap-y-10 pb-6 pt-20 sm:pt-28 lg:grid-cols-4">
        {glance.map((item) => (
          <RevealItem key={item.label} className="flex flex-col items-center border-t border-hairline pt-5 text-center">
            <dt className="order-2 mt-2 text-sm text-fg-subtle">{item.label}</dt>
            <dd className="order-1 whitespace-nowrap text-lead font-semibold text-fg sm:text-title">{item.value}</dd>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
