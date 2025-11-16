import React from "react";

export function Footer() {
  return (
    <footer className="py-6 text-[0.7rem] text-slate-500">
      <div className="section-shell flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>{new Date().getFullYear()} Mayank Jain</p>
        <p className="text-[0.7rem]">
          Built with React, Vite, TailwindCSS{" "}
          <span aria-hidden="true" className="mx-1">
            ·
          </span>
          Hosted on Vercel.
        </p>
      </div>
    </footer>
  );
}
