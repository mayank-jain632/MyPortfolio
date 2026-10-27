import { experience } from "../../data/experience";
import { RevealGroup, RevealItem } from "../fx/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-section">
      <div className="container-page">
        <SectionHeader index="04" eyebrow="Changelog" title="Experience" headingId="experience-heading" isPlaceholder />
        <RevealGroup as="ol" className="border-t border-hairline">
          {experience.map((role) => (
            <RevealItem
              as="li"
              key={role.id}
              className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-sm text-fg-subtle">
                {role.period}
              </span>
              <span>
                <span className="block text-lead font-medium text-fg">{role.company}</span>
                <span className="block text-fg-muted">{role.role}</span>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
