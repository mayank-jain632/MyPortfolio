import React from "react";

export function Education() {
  return (
    <section id="education" className="border-b border-slate-800/70 py-14 sm:py-16">
      <div className="section-shell fade-in">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-1 text-xs text-slate-400 sm:text-[0.8rem]">
            Formal training and certifications
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 stagger-animation">
          <div className="glass-panel rounded-2xl p-5 float-animation hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-slate-50 bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">University of Texas at Austin</h3>
            <p className="mt-1 text-sm text-slate-200">B.S. Computer Science</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">Expected Graduation: May 2028</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">Relevant coursework: Algorithms, Systems, Machine Learning</p>
            <p className="mt-2 text-[0.85rem] text-slate-500">Austin, TX</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 float-animation hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-sm font-semibold text-slate-50 bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">Kaggle Certification</h3>
            <p className="mt-1 text-sm text-slate-200">Intermediate Machine Learning</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">Completed practical projects and competition challenges on Kaggle.</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">
              <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer" className="group text-sky-300 hover:text-sky-200 transition-all duration-300"><span className="group-hover:underline">View on Kaggle</span> <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></a>
            </p>
          </div>

          <div
            className="glass-panel rounded-2xl p-5 float-animation hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            style={{ animationDelay: '0.7s' }}
          >
            <h3 className="text-sm font-semibold text-slate-50 bg-gradient-to-r from-slate-50 to-sky-200 bg-clip-text text-transparent">
              IBM Certifications
            </h3>

            <p className="mt-1 text-sm text-slate-200">
              Data Science Professional Certificate
            </p>

            <p className="mt-2 text-[0.85rem] text-slate-300">
              Completed an end-to-end data science curriculum covering Python, statistical
              analysis, visualization, SQL, machine learning fundamentals, and applied projects.
            </p>

            <p className="mt-2 text-[0.85rem] text-slate-400">
              <a
                href="https://coursera.org/share/aa10bd6e44770dcc55e23e6ccb5c765d" 
                target="_blank"
                rel="noreferrer"
                className="group text-sky-300 hover:text-sky-200 transition-all duration-300"
              >
                <span className="group-hover:underline">View Certificate</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
