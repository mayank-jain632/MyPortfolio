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

        <div className="grid gap-6 sm:grid-cols-2 stagger-animation">
          <div className="glass-panel hover-lift rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">University of Texas at Austin</h3>
            <p className="mt-1 text-sm text-slate-200">B.S. Computer Science, Minor in Finance</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">GPA: 3.73 · Expected Graduation: May 2028</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">Relevant coursework: Data Structures & Algorithms, Computer Architecture, Operating Systems (in progress), Statistics, Linear Algebra</p>
            <p className="mt-2 text-[0.85rem] text-slate-500">Austin, TX</p>
          </div>

          <div className="glass-panel hover-lift rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">Kaggle Certification</h3>
            <p className="mt-1 text-sm text-slate-200">Intermediate Machine Learning</p>
            <p className="mt-2 text-[0.85rem] text-slate-300">Completed practical projects and competition challenges on Kaggle.</p>
            <p className="mt-2 text-[0.85rem] text-slate-400">
              <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer" className="group text-accent-400 hover:text-accent-300 transition-colors duration-150"><span className="group-hover:underline">View on Kaggle</span> <span aria-hidden="true">↗</span></a>
            </p>
          </div>

          <div className="glass-panel hover-lift rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              IBM Certifications
            </h3>

            <p className="mt-1 text-sm text-slate-200">
              Data Science Professional Certificate (2025)
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
                className="group text-accent-400 hover:text-accent-300 transition-colors duration-150"
              >
                <span className="group-hover:underline">View Certificate</span>{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>

          <div className="glass-panel hover-lift rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Microsoft Python Development
            </h3>

            <p className="mt-1 text-sm text-slate-200">Microsoft (2026)</p>

            <p className="mt-2 text-[0.85rem] text-slate-300">
              Focused on Python fundamentals, data handling, automation, and building practical
              applications.
            </p>

            <p className="mt-2 text-[0.85rem] text-slate-300">
              Issued Jan 2026 · Credential ID M1L7GEG8QAKO
            </p>

            <p className="mt-2 text-[0.85rem] text-slate-400">
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/M1L7GEG8QAKO"
                target="_blank"
                rel="noreferrer"
                className="group text-accent-400 hover:text-accent-300 transition-colors duration-150"
              >
                <span className="group-hover:underline">View Certificate</span>{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
