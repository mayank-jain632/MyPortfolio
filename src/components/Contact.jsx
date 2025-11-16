import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-14 sm:py-16"
    >
      <div className="section-shell fade-in">
        <div className="glass-panel mx-auto max-w-2xl rounded-2xl p-6 text-sm text-slate-200 sm:p-7 float-animation hover:shadow-[0_0_50px_rgba(56,189,248,0.3)] transition-all duration-500">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl bg-gradient-to-r from-slate-50 via-sky-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
            Contact Me!
          </h2>
          <p className="mt-2 text-[0.9rem] text-slate-300">
            I&apos;m especially excited about internships and collaborations where
            I can combine{" "}
            <span className="text-sky-300">ML, systems, and product thinking</span>{" "}
            — whether that&apos;s on trading infrastructure, applied AI, or early‑stage
            products.
          </p>

          <ul className="mt-5 grid gap-4 text-xs sm:grid-cols-2">
            <li className="space-y-1.5">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mayank.jain%40utexas.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sky-400 hover:text-sky-300 transition-all duration-300 inline-flex items-center gap-1"
                  >
                    <span className="group-hover:underline">mayank.jain@utexas.edu</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=07mayankjain%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sky-400 hover:text-sky-300 transition-all duration-300 inline-flex items-center gap-1"
                  >
                    <span className="group-hover:underline">07mayankjain@gmail.com</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+14697684088"
                    className="group text-sky-400 hover:text-sky-300 transition-all duration-300 inline-flex items-center gap-1"
                    aria-label="Call Mayank Jain"
                  >
                    <span className="group-hover:underline">(469) 768-4088</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="space-y-1.5">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Profiles
              </p>
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                <li>
                  <a
                    href="https://github.com/mayank-jain632"
                    target="_blank"
                    rel="noreferrer"
                    className="group text-sky-400 hover:text-sky-300 transition-all duration-300 inline-flex items-center gap-1"
                  >
                    <span className="group-hover:underline">GitHub</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mayank-jain-016066293"
                    target="_blank"
                    rel="noreferrer"
                    className="group text-sky-400 hover:text-sky-300 transition-all duration-300 inline-flex items-center gap-1"
                  >
                    <span className="group-hover:underline">LinkedIn</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <p className="mt-5 text-[0.78rem] text-slate-400">
            If you&apos;re working on problems in AI, trading, or aerospace and think
            I could be a good fit, I&apos;d love to chat — even if you&apos;re not
            hiring yet.
          </p>
        </div>
      </div>
    </section>
  );
}
