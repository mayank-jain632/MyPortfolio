import React from "react";
import pfp from "../../assets/pfp.jpeg";

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
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-50"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-base font-bold overflow-hidden">
            <img
              src={pfp}
              alt="MJ"
              className="h-10 w-10 rounded-full object-cover"
              onError={(e) => {
                // Fallback: show initials if image fails on production
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector(".pfp-fallback")) {
                  e.currentTarget.style.display = "none";
                  const fb = document.createElement("span");
                  fb.textContent = "MJ";
                  fb.className = "pfp-fallback text-slate-900 font-bold";
                  parent.appendChild(fb);
                }
              }}
            />
          </span>
          <span className="text-xl font-bold sm:text-2xl text-slate-50">Mayank Jain</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-300">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="rounded-full px-3 py-1 transition-colors duration-150 hover:bg-slate-800/80 hover:text-slate-50"
              >
                {link.label}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/mayank-jain632"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-100 transition-colors duration-150 hover:border-accent-500/60 hover:text-accent-300"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-jain-016066293"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-colors duration-150 hover:bg-accent-400"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
