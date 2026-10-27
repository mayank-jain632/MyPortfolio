/** Shared chrome for every demo. Always labelled illustrative so nothing reads as live data. */
export function DemoFrame({ title, children, className }) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-hairline bg-surface ${className ?? ""}`}>
      <figcaption className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-3.5 text-sm">
        <span className="font-medium text-fg">{title}</span>
        <span className="text-micro text-fg-subtle">Illustrative, sample data</span>
      </figcaption>
      <div className="p-5 sm:p-7">{children}</div>
    </figure>
  );
}

/** Segmented control used by the demos. */
export function Segmented({ label, options, value, onChange }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-pill bg-raised p-1">
      {options.map((option) => {
        const isOn = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isOn}
            onClick={() => onChange(option.value)}
            className={`rounded-pill px-4 py-1.5 text-sm font-medium transition-colors duration-fast ${
              isOn ? "bg-fg text-ink" : "text-fg-muted hover:text-fg"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
