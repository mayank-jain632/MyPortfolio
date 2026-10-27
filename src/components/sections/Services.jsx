import { useState } from "react";
import { featuredProjects, projects } from "../../data/projects";
import { services } from "../../data/services";
import { getStat } from "../../data/stats";
import { caseStudyHref } from "../../lib/router";
import { StatValue } from "../../lib/stats";
import { Demo } from "../demos/Demo";
import { Segmented } from "../demos/DemoFrame";
import { Reveal } from "../fx/Reveal";
import { ProjectMedia } from "../media/ProjectMedia";
import { TextLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

const relay = projects.find((project) => project.slug === "relay");

function AppliedAiDemo() {
  const [type, setType] = useState("shelf-vision");
  return (
    <div className="space-y-4">
      <Segmented
        label="Applied AI demo"
        value={type}
        onChange={setType}
        options={[
          { value: "shelf-vision", label: "Computer vision" },
          { value: "agent-tree", label: "Multi-agent" },
        ]}
      />
      <Demo type={type} />
    </div>
  );
}

function ServiceVisual({ service }) {
  switch (service.id) {
    case "trading-automation":
      return <Demo type="signal-pipeline" />;
    case "workflow-automation":
      return <Demo type="invoice" />;
    case "applied-ai":
      return <AppliedAiDemo />;
    case "full-stack":
      return relay ? <ProjectMedia project={relay} /> : null;
    default:
      return null;
  }
}

function Service({ service }) {
  const stats = service.statIds.map(getStat).filter(Boolean);
  const firstProject = featuredProjects.find((project) => service.projectSlugs.includes(project.slug));

  return (
    <article aria-labelledby={`service-${service.id}`} className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <Reveal as="h3" id={`service-${service.id}`} className="text-title font-semibold text-fg">
          {service.name}
        </Reveal>
        <Reveal as="p" delay={0.08} className="mt-4 text-lead text-fg-muted">
          {service.promise}
        </Reveal>

        <Reveal as="dl" delay={0.14} className="mt-9 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <dt className="order-2 mt-1.5 text-micro text-fg-subtle">{stat.label}</dt>
              <dd className="order-1 whitespace-nowrap text-title font-semibold text-fg">
                <StatValue stat={stat} />
              </dd>
            </div>
          ))}
        </Reveal>

        <Reveal as="ul" delay={0.2} className="mt-8 space-y-3 text-base text-fg-muted">
          {service.proof.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-pill bg-fg-subtle" />
              {line}
            </li>
          ))}
        </Reveal>

        {firstProject && (
          <Reveal delay={0.26} className="mt-8">
            <TextLink href={caseStudyHref(firstProject.slug)} className="text-lead">
              Read the case study
            </TextLink>
          </Reveal>
        )}
      </div>

      <Reveal delay={0.1} className="lg:sticky lg:top-24">
        <ServiceVisual service={service} />
      </Reveal>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-section">
      <div className="container-page">
        <SectionHeader
          headingId="services-title"
          title="Four things I build."
          rest="Each one has a demo you can try."
        />
        <div className="space-y-section">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
