import { services } from "../../data/services";
import { RevealGroup, RevealItem } from "../fx/Reveal";
import { Spotlight } from "../fx/Spotlight";
import { SectionHeader } from "../ui/SectionHeader";

// Bento spans for the 4 services on large screens: two wide, two narrow, alternating.
const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-section">
      <div className="container-page">
        <SectionHeader index="01" eyebrow="Services" title="What I build" headingId="services-heading" isPlaceholder />
        <RevealGroup className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <RevealItem key={service.id} className={SPANS[index % SPANS.length]}>
              <Spotlight className="h-full rounded-lg border border-hairline bg-surface p-6 shadow-card transition-colors duration-base hover:border-hairline-strong sm:p-8">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-10 text-title font-semibold text-fg">{service.name}</h3>
                <p className="mt-3 max-w-prose text-fg-muted">{service.promise}</p>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
