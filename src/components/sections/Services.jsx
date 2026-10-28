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
import { Button, TextLink } from "../ui/Button";
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

const TOGGLE_LABEL = {
  "trading-automation": "signal-to-order demo",
  "workflow-automation": "invoice demo",
  "applied-ai": "vision and agent demos",
  "full-stack": "live Relay embed",
};

function Service({ service }) {
  const [open, setOpen] = useState(false);
  const stats = service.statIds.map(getStat).filter(Boolean);
  const firstProject = featuredProjects.find((project) => service.projectSlugs.includes(project.slug));
  const panelId = `demo-${service.id}`;

  return (
    <article aria-labelledby={`service-${service.id}`} className="border-t border-hairline py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal as="h3" id={`service-${service.id}`} className="text-title font-semibold text-fg">
            {service.name}
          </Reveal>
          <Reveal as="p" delay={0.08} className="mt-3 text-lead text-fg-muted">
            {service.promise}
          </Reveal>
          <Reveal as="dl" delay={0.14} className="mt-7 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <dt className="order-2 mt-1.5 text-micro text-fg-subtle">{stat.label}</dt>
                <dd className="order-1 whitespace-nowrap text-title font-semibold text-fg">
                  <StatValue stat={stat} />
                </dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div>
          <Reveal as="ul" delay={0.12} className="space-y-3 text-base text-fg-muted">
            {service.proof.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-pill bg-fg-subtle" />
                {line}
              </li>
            ))}
          </Reveal>
          <Reveal delay={0.18} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button
              variant="ghost"
              size="sm"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Hide" : "Try the"} {TOGGLE_LABEL[service.id]}
            </Button>
            {firstProject && (
              <TextLink href={caseStudyHref(firstProject.slug)}>Read the case study</TextLink>
            )}
          </Reveal>
        </div>
      </div>

      {open && (
        <div id={panelId} className="mx-auto mt-10 max-w-3xl">
          <ServiceVisual service={service} />
        </div>
      )}
    </article>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-section">
      <div className="container-page">
        <SectionHeader
          headingId="services-title"
          title="Where I go deep."
          rest="Open a demo to see how it works."
        />
        <div className="border-b border-hairline">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
