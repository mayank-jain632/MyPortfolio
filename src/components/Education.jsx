import React from "react";

export function Education() {
  return (
    <section id="education" className="border-b border-slate-800/70 py-14 sm:py-16">
      <div className="section-shell fade-in">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Education
          </h2>
          <p className="mt-1 text-xs text-slate-400 sm:text-[0.8rem]">
            Formal training and certifications
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="glass-panel rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">University of Texas at Austin</h3>
            <p className="mt-1 text-sm text-slate-200">B.S. Computer Science</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">Relevant coursework: Algorithms, Systems, Machine Learning</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">Austin, TX</p>
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">Kaggle Certification</h3>
            <p className="mt-1 text-sm text-slate-200">Intermediate Machine Learning</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">Completed practical projects and competition challenges on Kaggle.</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">
              <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">View on Kaggle</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
