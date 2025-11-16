import React from "react";

export function About() {
  return (
    <section id="about" className="border-b border-slate-800/70 py-14 sm:py-16">
      <div className="section-shell fade-in">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">
            About
          </h2>
          <span className="hidden rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium text-slate-300 sm:inline-flex hover:border-sky-500/60 hover:bg-sky-500/10 transition-all duration-300 glow-pulse">
            building in public
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem] stagger-animation">
            <p className="transition-all duration-300 hover:translate-x-1">
              I enjoy designing systems that stay elegant even when the inputs are
              messy: noisy sensor data, inconsistent options chains, or the chaos of
              coordinating humans. Most of my work sits at the intersection of{" "}
              <span className="text-sky-300 transition-all duration-300 hover:text-sky-200 cursor-default">AI/ML</span>,{" "}
              <span className="text-sky-300 transition-all duration-300 hover:text-sky-200 cursor-default">quantitative finance</span>, and{" "}
              <span className="text-sky-300 transition-all duration-300 hover:text-sky-200 cursor-default">product engineering</span>.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1">
              I like understanding things from first principles — from implementing
              K‑Means and neural nets from scratch, to studying how model
              assumptions break in the wild. That mindset carries into the products
              I build: every feature should exist for a reason, and every chart or
              animation should communicate something real.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1">
              Outside of coursework, I spend a lot of time iterating on{" "}
              <span className="text-sky-300 transition-all duration-300 hover:text-sky-200 cursor-default">options strategies</span>, working on{" "}
              <span className="text-sky-300 transition-all duration-300 hover:text-sky-200 cursor-default">ML research</span>, and pushing
              forward student‑run projects and nonprofits. I&apos;m happiest when
              I&apos;m learning fast with people who care deeply about what
              they&apos;re shipping.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-4 text-xs text-slate-200 float-animation hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500">
              <h3 className="mb-2 text-sm font-semibold text-slate-50 bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">
                Quick stack snapshot
              </h3>
              <dl className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    Daily drivers
                  </dt>
                  <dd className="mt-1">
                    Python · TypeScript · React · Node.js · Git · Linux
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    ML / data
                  </dt>
                  <dd className="mt-1">PyTorch · NumPy · pandas · Jupyter</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    Infra & tools
                  </dt>
                  <dd className="mt-1">Firebase · Supabase · Polygon.io · Figma</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    Interests
                  </dt>
                  <dd className="mt-1">
                    Data‑efficient learning, systematic trading, aerospace.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="glass-panel rounded-2xl p-4 text-xs text-slate-200 float-animation hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500" style={{ animationDelay: '1s' }}>
              <h3 className="mb-2 text-sm font-semibold text-slate-50 bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">
                What I&apos;m optimizing for
              </h3>
              <ul className="space-y-2 list-disc pl-4">
                <li className="transition-all duration-300 hover:translate-x-1 hover:text-sky-200">Learning curves that feel steep but sustainable.</li>
                <li className="transition-all duration-300 hover:translate-x-1 hover:text-sky-200">Teams that bias toward shipping and honest feedback.</li>
                <li className="transition-all duration-300 hover:translate-x-1 hover:text-sky-200">Problems where great engineering meaningfully moves the needle.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
