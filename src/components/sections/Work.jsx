import { featuredProjects } from "../../data/projects";
import { ProjectMedia } from "../media/ProjectMedia";
import { RevealGroup, RevealItem } from "../fx/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-section">
      <div className="container-page">
        <SectionHeader index="02" eyebrow="Work" title="Selected work" headingId="work-heading" isPlaceholder />
        <RevealGroup as="ul" className="border-t border-hairline">
          {featuredProjects.map((project) => (
            <RevealItem
              as="li"
              key={project.slug}
              className="flex flex-col gap-4 border-b border-hairline py-6"
            >
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-title font-medium text-fg">{project.name}</span>
                <span className="font-mono text-sm text-fg-subtle">{project.award || project.year}</span>
              </span>
              <ProjectMedia project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
