# Mayank Jain, portfolio

A product-launch style site where the product is me. React 18, Vite 5, Tailwind 3, and `motion` (imported from `motion/react`).

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # runs check:data, then builds into dist/
npm run preview  # serve the build
```

## Where things live

- `src/data/`: all site content (`site.config.js`, `projects.js`, `services.js`, `stats.js`, and so on). Edit data, not components.
- `docs/DESIGN.md`: palette, type, spacing, motion tokens. Implemented in `src/index.css` and mapped in `tailwind.config.js`.
- `docs/AUDIT.md`: what was wrong with the previous version. `docs/TODO.md`: open items.
- `src/components/sections/`: Hero, Services, Work, Proof (highlights), Experience, Specs, Contact.
- `src/components/demos/`: interactive demos (signal pipeline, invoice, agent tree, shelf vision), collapsed by default and loaded when opened.
- `src/components/work/`: case study sheet, opened by hash route `#work/<slug>`.
- `src/components/fx/`: motion helpers. All respect `prefers-reduced-motion`.
- `scripts/check-data.mjs`: build-time content rules (private data, copy rules, media validation).

## Resume and media

- Add a web-safe resume at `public/Mayank_Jain_Resume.pdf`. The Resume links stay hidden until the file exists.
- Case study screenshots and videos go in `public/media/<slug>/` and are listed in the project's `media` field.
- Contact is a mailto link. There is no form and no backend.
