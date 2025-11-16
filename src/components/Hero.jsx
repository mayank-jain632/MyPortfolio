import React from "react";
// React Bits is installed; you can swap in animated components from the library here if you want even more motion.

const roles = [
  "AI & ML Engineer",
  "Quant Developer",
  "Full‑Stack Builder"
];

export function Hero() {

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/70"
    >
      {/* subtle gradient & grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-radial-dots bg-[size:18px_18px] opacity-40" />
      </div>

      <div className="section-shell relative flex min-h-[70vh] flex-col justify-center py-16 sm:py-20 lg:py-24 fade-in">
        <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium text-slate-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span>Actively looking for Summer 2026 SWE / ML / Quant internships</span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div className="space-y-6">
            <h2 className="mt-1 text-2xl font-medium text-slate-300 sm:text-2xl">
              Building thoughtful systems at the edge of{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                AI, finance, and product.
              </span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I&apos;m Mayank, a Computer Science student at UT Austin obsessed
              with data‑driven decision making, clean architecture, and turning
              messy real‑world constraints into products people actually use.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <div
                    key={r}
                    className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
                  >
                    {r}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
                <span className="tag-pill">
                  <span className="tag-dot" /> Options & micro‑futures research
                </span>
                <span className="tag-pill">
                  <span className="tag-dot" /> Data‑efficient deep learning
                </span>
                <span className="tag-pill">
                  <span className="tag-dot" /> Nonprofit & startup builder
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow hover:brightness-110"
              >
                View projects
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("experience");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-accent-500"
              >
                Experience timeline
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-6 sm:px-8 sm:py-7 shadow-xl shadow-slate-950/70">
              <div className="pointer-events-none absolute -right-16 -top-24 h-52 w-52 rounded-full bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-transparent blur-3xl" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Snapshot
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    I like shipping ambitious things with tiny teams, especially
                    when there&apos;s real risk, messy data, or hardware in the loop.
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="space-y-1">
                  <dt className="font-medium text-slate-400">Focus areas</dt>
                  <dd>AI & ML · Quant · Systems · Product</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-medium text-slate-400">Currently</dt>
                  <dd>Exploring 0DTE options, CV models, and product‑driven ML.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-medium text-slate-400">Looking for</dt>
                  <dd>Summer 2026 internships in SWE, ML, or quant research.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-medium text-slate-400">Location</dt>
                  <dd>Austin, TX · open to relocation</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
