import React from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <button
          onClick={() => handleScroll("hero")}
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-50 transition-all duration-300 md:hover:scale-105"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 text-base font-bold shadow-glow transition-all duration-300 md:group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] md:group-hover:rotate-12">
            MJ
          </span>
          <span className="text-xl font-bold sm:text-2xl bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">Mayank Jain</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-300">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="rounded-full px-3 py-1 transition-all duration-300 hover:bg-slate-800/80 hover:text-slate-50 hover:scale-110 hover:-translate-y-0.5"
              >
                {link.label}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/mayank-jain632"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] md:shadow-[0_0_15px_rgba(56,189,248,0.4),0_0_30px_rgba(6,182,212,0.2)] md:hover:shadow-[0_0_30px_rgba(56,189,248,0.8),0_0_60px_rgba(6,182,212,0.5)] md:hover:scale-110 md:hover:-translate-y-0.5 md:glow-pulse"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-jain-016066293"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] md:shadow-[0_0_15px_rgba(56,189,248,0.4),0_0_30px_rgba(6,182,212,0.2)] md:hover:shadow-[0_0_30px_rgba(56,189,248,0.8),0_0_60px_rgba(6,182,212,0.5)] md:hover:scale-110 md:hover:-translate-y-0.5 md:glow-pulse"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
