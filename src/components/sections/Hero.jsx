import { featuredStats } from "../../data/stats";
import { hasResume, hero, site } from "../../data/site.config";
import { StatValue } from "../../lib/stats";
import { Magnetic } from "../fx/Magnetic";
import { Reveal, RevealGroup, RevealItem } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";
import { Chip } from "../hero/Chip";
import { ButtonLink, TextLink } from "../ui/Button";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      <div className="container-page flex flex-col items-center text-center">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
          <span className="text-fg-subtle">{hero.eyebrow}</span>
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline px-3 py-1 text-fg-muted">
            <span aria-hidden="true" className="size-1.5 rounded-pill bg-accent" />
            {site.availability}
          </span>
        </Reveal>

        <p id="hero-title" className="mt-6 text-lead font-semibold text-fg">
          {site.name}
        </p>
        <h1 className="mt-3 max-w-[18ch] text-hero font-semibold text-fg">
          <SplitText text={hero.headline} trigger="mount" delay={0.15} stagger={0.07} />
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

      <Chip className="-mb-10 mt-14 sm:-mb-16 sm:mt-16" />

      <div className="relative bg-gradient-to-b from-transparent to-black">
        <RevealGroup as="dl" stagger={0.1} className="container-page grid grid-cols-2 gap-x-6 gap-y-10 pb-6 pt-16 sm:pb-10 sm:pt-24 lg:grid-cols-4">
          {featuredStats.map((stat) => (
            <RevealItem key={stat.id} className="flex flex-col border-t border-hairline pt-5">
              <dt className="order-2 mt-2 max-w-[22ch] text-sm text-fg-subtle">{stat.label}</dt>
              <dd className="order-1 text-title font-semibold text-fg">
                <StatValue stat={stat} />
              </dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
