import { certifications, education } from "../../data/education";
import { site } from "../../data/site.config";
import { skillGroups } from "../../data/skills";
import { Reveal } from "../fx/Reveal";
import { TextLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

function Row({ label, children }) {
  return (
    <Reveal as="div" className="border-t border-hairline py-6 md:grid md:grid-cols-[16rem_1fr] md:gap-12 md:py-8">
      <dt className="text-base font-semibold text-fg">{label}</dt>
      <dd className="mt-2 text-base text-fg-muted md:mt-0">{children}</dd>
    </Reveal>
  );
}

function Items({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** The one light section, laid out like a product spec sheet. */
export function Specs() {
  return (
    <section id="specs" aria-labelledby="specs-title" className="surface-light py-section">
      <div className="container-page">
        <SectionHeader headingId="specs-title" title="Tech specs." rest="What I work with, and where I studied." />
        <dl className="border-b border-hairline">
          <Row label="Education">
            <p className="text-fg">{education.degree}</p>
            <p>
              {education.school}, {education.location}. {education.standing}, graduating {education.graduation}. GPA {education.gpa}.
            </p>
            <p className="mt-2">Coursework: {education.coursework.join(", ")}.</p>
          </Row>
          <Row label="Credentials">
            <ul className="space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <TextLink href={cert.url} external>
                    {cert.name}
                  </TextLink>
                  <span className="text-fg-subtle">, {cert.year}</span>
                </li>
              ))}
            </ul>
          </Row>
          {skillGroups.map((group) => (
            <Row key={group.id} label={group.label}>
              <Items items={group.items} />
            </Row>
          ))}
          <Row label="Location">
            {site.location}. {site.relocation}.
          </Row>
          <Row label="Availability">{site.availability}.</Row>
        </dl>
      </div>
    </section>
  );
}
