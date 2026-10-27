import { site } from "../../data/site.config";

const FOOTER_LINKS = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Resume", href: site.links.resume },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-micro uppercase text-fg-subtle">
          {site.name}, {site.location}
        </p>
        <ul className="flex gap-6 text-sm">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="text-fg-muted transition-colors duration-fast hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
