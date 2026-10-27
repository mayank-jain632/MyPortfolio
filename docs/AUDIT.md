# Audit (Step 1, 2026-10-27)

Scope: every file in `src/`, `index.html`, `index.css`, `tailwind.config.js`, `vite.config.js`, `postcss.config.js`, `package.json`, `/assets`. Checked against `hub/PORTFOLIO_CONTEXT.md`.

## Broken or unsafe (fixed in this step)

| Where | Problem |
|---|---|
| `Contact.jsx` | Publishes the phone number as a `tel:` link. On the "Do not publish" list. |
| `Education.jsx` | Shows GPA 3.73 (D5 says omit) and "Minor in Finance", which the context does not list. |
| repo | `node_modules` committed (4,658 files). Untracked in `d602b60`. Still in git history. |
| `assets/Mayank_Jain_RESUME.pdf` (untracked) | **Old** resume: phone number, GPA, "roughly 200 subscribers", no Family Dollar or AWS hackathon. Not moved to `public/`. |

## Outdated content

- `Hero.jsx`: "Open to Summer 2026 SWE / ML / Quant internships", "Seeking: Internships for Summer 2026", "low-latency trading strategies", "Options & micro-futures research", "cutting-edge".
- `experience.js`: "roughly 200 subscribers" (now 50 clients), Swift Bot (dropped), trading desk "Present" (D2 says August 2026). Missing Family Dollar.
- `projects.js`: Clarity win titled "Best Use of Supabase at Hook 'Em Hacks" (now "1st Place, Supabase x Gemini Track"). Contains dropped entries (Pooled, Swift Bot tools, Quant Research Notebooks). Missing AWS hackathon, Myst, Blindspot.
- `Education.jsx`: Kaggle certification is not in the context. Coursework list differs from the context.
- `About.jsx`: "building in public" (banned filler), "aerospace" interest, Polygon.io and Firebase (dropped).
- `Contact.jsx`: pitches internships; lists the UT email, which is not in the context.
- `README.md`: describes 80+ particles and a contact form, neither of which exists.
- Copy: em dashes and U+2011 non-breaking hyphens in `index.css`, `About.jsx`, `Hero.jsx`, `Contact.jsx`, `experience.js`, `projects.js`, `README.md`.

## Unused

- `react-bits` (an unrelated MIT utility library, not the React Bits effects collection) and `react-router-dom`: never imported. Removed.
- `projects.js` exports `projectCategories` filter chips over categories most entries no longer fit.
- Tailwind `radial-dots` background and `shadow-glow`: one use each, both in the old hero.
- `src/.DS_Store`.

## Old visual system

- Particles and the `float-animation`, `animate-gradient`, `glow-pulse`, `shimmer` keyframes were already removed in `813cccf`.
- Remaining: `fadeInUp` keyframe, `.fade-in`, `.stagger-animation`, `.hover-lift`, `.glass-panel`, `.tag-pill`, `.tag-dot`, gold `accent` palette, `animate-pulse` dot. All removed with the old components.

## Other

- `index.html`: `scroll-smooth` on `<html>` ignores reduced motion. No meta description, canonical, or OG tags.
- Fonts: `SF Pro Display` and `Inter` are referenced but never loaded, so the site rendered in the system fallback.
- `Navbar.jsx`: avatar `onError` mutates the DOM directly. Buttons used for in-page links (no `href`, no anchor semantics).
- `Experience.jsx`: tab-like list without `aria-selected` or roles.
- `pfp.jpeg` is 400x400 and rendered at 40px. Replaced by a 96px `src/assets/avatar.jpg`.
- No tests and no test runner in the repo.
