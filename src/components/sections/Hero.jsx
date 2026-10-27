import { hero, site } from "../../data/site.config";
import { Magnetic } from "../fx/Magnetic";
import { Reveal } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";
import { ButtonLink } from "../ui/Button";

// Shell version: establishes scale and the opening moment. Final hero is built in a later step.
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pb-section pt-36 sm:pt-44">
      <div aria-hidden="true" className="light-leak -top-48 left-1/2 -z-10 h-[36rem] w-[min(56rem,140vw)] -translate-x-1/2" />
      <div aria-hidden="true" className="light-leak light-leak-cool -right-40 top-24 -z-10 h-[28rem] w-[28rem]" />

      <div className="container-page">
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="eyebrow">{hero.eyebrow}</span>
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface/60 px-3 py-1 text-sm text-fg-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-pill bg-accent shadow-[0_0_10px_2px_oklch(var(--color-accent)/0.5)]" />
            {site.availability}
          </span>
        </Reveal>

        <h1 className="mt-8 text-hero font-semibold text-fg">
          <SplitText text={site.name} trigger="mount" delay={0.1} stagger={0.08} />
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <Reveal delay={0.45}>
            <p className="max-w-[20ch] text-title font-medium text-fg">{hero.headline}</p>
          </Reveal>
          <Reveal delay={0.55} className="space-y-8">
            <p className="max-w-prose text-lead text-fg-muted">{hero.subhead}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <span aria-hidden="true">→</span>
                </ButtonLink>
              </Magnetic>
              <ButtonLink variant="ghost" href={hero.secondaryCta.href} download>
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
