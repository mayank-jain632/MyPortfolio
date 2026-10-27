import { hero, site } from "../../data/site.config";
import { Magnetic } from "../fx/Magnetic";
import { Reveal } from "../fx/Reveal";
import { ButtonLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden py-section">
      <div aria-hidden="true" className="light-leak bottom-[-12rem] left-1/2 -z-10 h-[30rem] w-[min(48rem,130vw)] -translate-x-1/2" />
      <div className="container-page">
        <SectionHeader index="05" eyebrow="Contact" title="Have something that should run itself?" headingId="contact-heading" isPlaceholder />
        <Reveal className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          </Magnetic>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-sm text-fg-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-fast hover:text-fg hover:decoration-accent"
          >
            {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
