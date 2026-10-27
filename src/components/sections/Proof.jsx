import { proofStats, skills } from "../../data/site.config";
import { CountUp } from "../fx/CountUp";
import { Marquee } from "../fx/Marquee";
import { RevealGroup, RevealItem } from "../fx/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const MARQUEE_SKILLS = [...skills["Frameworks and tools"], ...skills["ML and AI"]];

function StatValue({ stat }) {
  if (stat.count === undefined) return stat.display;
  return <CountUp to={stat.count} suffix={stat.suffix ?? ""} />;
}

export function Proof() {
  return (
    <section id="proof" aria-labelledby="proof-heading" className="py-section">
      <div className="container-page">
        <SectionHeader index="03" eyebrow="Proof" title="Numbers, not adjectives" headingId="proof-heading" isPlaceholder />
        <RevealGroup as="dl" className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline lg:grid-cols-4">
          {proofStats.map((stat) => (
            <RevealItem key={stat.label} className="flex flex-col gap-6 bg-canvas p-6 sm:p-8">
              <dt className="order-last mt-auto text-sm text-fg-subtle">{stat.label}</dt>
              <dd className="font-mono text-display font-medium text-fg">
                <StatValue stat={stat} />
              </dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <Marquee
        label="Tools I work with"
        items={MARQUEE_SKILLS}
        className="mt-16 px-gutter"
        renderItem={(skill) => (
          <span className="block rounded-pill border border-hairline px-4 py-2 font-mono text-sm text-fg-muted">{skill}</span>
        )}
      />
    </section>
  );
}
