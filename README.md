# Mayank Jain, portfolio

React 18, Vite 5, Tailwind 3, and `motion` (imported from `motion/react`).

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the build
```

## Where things live

- `src/data/site.config.js`: all site content and the open decisions (availability, dates, flags). Edit this, not the components.
- `docs/DESIGN.md`: palette, type, spacing, motion tokens. Implemented in `src/index.css` and mapped in `tailwind.config.js`.
- `docs/AUDIT.md`: what was wrong with the previous version.
- `src/components/fx/`: reusable motion pieces (Reveal, SplitText, CountUp, Magnetic, Spotlight, Marquee, ScrollProgress). All respect `prefers-reduced-motion`.
- `src/components/sections/`: page sections. `src/components/shell/`: navbar and footer.
- `public/Mayank_Jain_Resume.pdf`: the downloadable resume (add it here).
