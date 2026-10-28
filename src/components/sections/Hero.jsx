import { education } from "../../data/education";
import { hasResume, hero, site } from "../../data/site.config";
import { Magnetic } from "../fx/Magnetic";
import { Reveal, RevealGroup, RevealItem } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";
import { ButtonLink, TextLink } from "../ui/Button";

// At a glance: the basics a recruiter looks for first.
const glance = [
  { value: "UT Austin", label: "School" },
  { value: "CS and Math", label: "B.S. degree" },
  { value: "Class of 2028", label: education.standing },
  { value: education.gpa, label: "GPA" },
];

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-40">
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

        <p id="hero-title" className="mt-6 text-lead font-semibold text-fg">
          {site.name}
        </p>
        <h1 className="mt-3 text-balance text-hero font-semibold text-fg">
          {hero.headline.split(/(?<=\.) /).map((sentence, index) => (
            <span key={sentence} className="block">
              <SplitText text={sentence} trigger="mount" delay={0.15 + index * 0.3} stagger={0.06} />
            </span>
          ))}
        </h1>

        <Reveal delay={0.7}>
          <p className="mt-7 max-w-[34rem] text-balance text-lead text-fg-muted">{hero.subhead}</p>
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
