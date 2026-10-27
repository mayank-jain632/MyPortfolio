import { Reveal } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";

/**
 * Numbered section heading: mono index and eyebrow, then a large title.
 * @param {object} props
 * @param {string} props.index e.g. "01"
 * @param {string} props.eyebrow
 * @param {string} props.title
 * @param {string} props.headingId id for aria-labelledby on the section
 */
export function SectionHeader({ index, eyebrow, title, headingId, isPlaceholder = false }) {
  return (
    <header className="mb-12 sm:mb-16">
      <Reveal className="flex items-center gap-3">
        <span className="eyebrow text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-hairline-strong" />
        <span className="eyebrow">{eyebrow}</span>
        {isPlaceholder && (
          <span className="ml-auto rounded-sm border border-hairline px-2 py-0.5 font-mono text-micro uppercase text-fg-subtle">
            Placeholder
          </span>
        )}
      </Reveal>
      <h2 id={headingId} className="mt-5 max-w-[18ch] text-headline font-semibold text-fg">
        <SplitText text={title} />
      </h2>
    </header>
  );
}
