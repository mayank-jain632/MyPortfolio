import { hasResume, site } from "../../data/site.config";

const LINKS = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  ...(hasResume ? [{ label: "Resume", href: site.links.resume }] : []),
  { label: "Email", href: `mailto:${site.email}` },
];

const FOOTNOTES = [
  "Figures come from my resume. A ~ marks an approximate figure.",
  "Demos are illustrative and use sample data. They are not market data or financial advice.",
  "Client names and employer code are withheld.",
];

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10 text-sm text-fg-subtle">
      <div className="container-page">
        <ul className="max-w-prose space-y-1.5 text-micro">
          {FOOTNOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {site.name}. {site.location}.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="transition-colors duration-fast hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
