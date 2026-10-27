const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-base ease-out-quart " +
  "active:scale-[0.98]";

const VARIANTS = {
  primary: "bg-accent text-accent-ink shadow-accent hover:bg-accent/90",
  ghost: "border border-hairline-strong text-fg hover:border-fg/40 hover:bg-fg/5",
};

const SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
};

/**
 * Link styled as a button. All CTAs on the site navigate (mailto, file, anchor), so this is always an <a>.
 *
 * @param {object} props
 * @param {"primary" | "ghost"} [props.variant]
 * @param {"sm" | "md"} [props.size]
 */
export function ButtonLink({ variant = "primary", size = "md", className, children, ...rest }) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}
