import { Reveal } from "../fx/Reveal";

/**
 * Section heading in two tones, like a product page: the claim in white, the continuation in grey.
 * On the light section pass tone="light".
 *
 * @param {object} props
 * @param {string} props.title the claim
 * @param {string} [props.rest] the continuation sentence
 * @param {string} props.headingId id for aria-labelledby on the section
 * @param {string} [props.lead] one supporting sentence under the heading
 */
export function SectionHeader({ title, rest, headingId, lead, align = "left", className }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <header className={`mb-14 sm:mb-20 ${alignment} ${className ?? ""}`}>
      <Reveal as="h2" id={headingId} className={`max-w-[22ch] text-headline font-semibold text-fg ${align === "center" ? "mx-auto" : ""}`}>
        {title}
        {rest && <span className="text-fg-subtle"> {rest}</span>}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={0.1} className={`mt-6 max-w-prose text-lead text-fg-muted ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </Reveal>
      )}
    </header>
  );
}
