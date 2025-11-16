import React, { useState } from "react";
import { experiences } from "../data/experience";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="experience"
      className="border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-14 sm:py-16"
    >
      <div className="section-shell fade-in">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Experience
          </h2>
          <p className="hidden text-xs text-slate-400 sm:block">
            Tap a card to expand details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.3fr)]">
          <div className="space-y-3">
            {experiences.map((exp, idx) => {
              const active = idx === expandedIndex;
              return (
                <button
                  key={exp.company + idx}
                  onClick={() => setExpandedIndex(idx)}
                  className={`glass-panel w-full rounded-2xl px-4 py-3 text-left text-xs transition-all duration-500 sm:px-5 sm:py-4 ${
                    active
                      ? "border-sky-500/80 shadow-[0_0_30px_rgba(56,189,248,0.4)] scale-[1.02]"
                      : "hover:border-sky-500/50 hover:bg-slate-900 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                        {exp.period}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-50">
                        {exp.title}
                      </p>
                      <p className="text-xs text-slate-300">{exp.company}</p>
                    </div>
                    <div className="hidden text-right text-[0.65rem] text-slate-400 sm:block">
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[0.65rem] text-slate-200 transition-all duration-300 hover:bg-sky-500/20 hover:text-sky-200 hover:scale-110"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="glass-panel h-full rounded-2xl p-4 text-xs text-slate-200 sm:p-5 fade-in hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500">
            {experiences[expandedIndex] && (
              <div className="stagger-animation">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-3">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                      {experiences[expandedIndex].period}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                      {experiences[expandedIndex].title}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {experiences[expandedIndex].company}
                    </p>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">
                    {experiences[expandedIndex].location}
                  </p>
                </div>

                <ul className="mt-3 space-y-2.5">
                  {experiences[expandedIndex].bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 transition-all duration-300 hover:translate-x-1" style={{ animationDelay: `${i * 0.1}s` }}>
                      <span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 glow-pulse" />
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
