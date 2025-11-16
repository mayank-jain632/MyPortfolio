import React from "react";

export function About() {
  return (
    <section id="about" className="border-b border-slate-800/70 py-14 sm:py-16">
      <div className="section-shell fade-in">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            About
          </h2>
          <span className="hidden rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium text-slate-300 sm:inline-flex">
            building in public
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
            <p>
              I enjoy designing systems that stay elegant even when the inputs are
              messy: noisy sensor data, inconsistent options chains, or the chaos of
              coordinating humans. Most of my work sits at the intersection of{" "}
              <span className="text-sky-300">AI/ML</span>,{" "}
              <span className="text-sky-300">quantitative finance</span>, and{" "}
              <span className="text-sky-300">product engineering</span>.
            </p>
            <p>
              I like understanding things from first principles — from implementing
              K‑Means and neural nets from scratch, to studying how model
              assumptions break in the wild. That mindset carries into the products
              I build: every feature should exist for a reason, and every chart or
              animation should communicate something real.
            </p>
            <p>
              Outside of coursework, I spend a lot of time iterating on{" "}
              <span className="text-sky-300">options strategies</span>, working on{" "}
              <span className="text-sky-300">ML research</span>, and pushing
              forward student‑run projects and nonprofits. I&apos;m happiest when
              I&apos;m learning fast with people who care deeply about what
              they&apos;re shipping.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-4 text-xs text-slate-200">
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
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

            <div className="glass-panel rounded-2xl p-4 text-xs text-slate-200">
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                What I&apos;m optimizing for
              </h3>
              <ul className="space-y-2 list-disc pl-4">
                <li>Learning curves that feel steep but sustainable.</li>
                <li>Teams that bias toward shipping and honest feedback.</li>
                <li>Problems where great engineering meaningfully moves the needle.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
