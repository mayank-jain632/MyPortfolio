const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform] duration-base ease-out-quart " +
  "active:scale-[0.98]";

const VARIANTS = {
  primary: "bg-accent-fill text-accent-ink hover:bg-[oklch(50%_0.19_256)]",
  light: "bg-fg text-ink hover:bg-fg/85",
  ghost: "border border-hairline-strong text-fg hover:bg-fg/10",
};

const SIZES = {
  sm: "h-8 px-3.5 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lead",
};

/**
 * Link styled as a pill button. CTAs here navigate (mailto, file, anchor), so this is an <a>.
 *
 * @param {object} props
 * @param {"primary" | "light" | "ghost"} [props.variant]
 * @param {"sm" | "md" | "lg"} [props.size]
 */
export function ButtonLink({ variant = "primary", size = "md", className, children, ...rest }) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}

/** Same pill, for actions that do not navigate. */
export function Button({ variant = "primary", size = "md", className, children, ...rest }) {
  return (
    <button type="button" className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}

/** Apple-style "Learn more >" text link. */
export function TextLink({ className, children, external = false, ...rest }) {
  return (
    <a
      className={`group/link text-accent transition-colors duration-fast hover:underline ${className ?? ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 8 12"
        className="ml-1.5 inline-block h-[0.7em] w-auto transition-transform duration-base ease-out-quart group-hover/link:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 1.5L6.5 6l-5 4.5" />
      </svg>
    </a>
  );
}
