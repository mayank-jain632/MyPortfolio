# Design System

Direction: an Apple-style product page where the product is the engineer. Jet black canvas, neutral greys, one signal green, big two-tone headlines, rounded tiles, one light "Tech specs" section for rhythm. No grain or light leaks.

Tokens live in `src/index.css` (`:root`) and are mapped in `tailwind.config.js`. Never hardcode a color, radius, shadow, or easing in a component.

## Palette (OKLCH)

| Token | Value | Use |
|---|---|---|
| `canvas` | `0% 0 0` | Page background, true black |
| `surface` | `17.5% 0.002 286` | Tiles |
| `raised` | `23% 0.003 286` | Hover tiles, pills, inputs |
| `fg` | `97.2% 0.002 286` | Primary text |
| `fg-muted` | `76% 0.004 286` | Body copy |
| `fg-subtle` | `64% 0.006 286` | Labels, meta, grey half of headlines |
| `hairline` | white at 10% | Default 1px border |
| `hairline-strong` | white at 18% | Hover and focus borders |
| `accent` | `80% 0.2 150` | Signal green: links, the primary button, the hero glow |
| `accent-fill` | `80% 0.2 150` | Button backgrounds (dark `accent-ink` text on top) |
| `paper` / `ink` | `97.2% 0.002 286` / `23% 0.003 286` | Light section only (`.surface-light`) |

Accent rules: green marks links, the primary button, and the focus ring. No decorative fills.

## Typography

- One family: the system face on Apple devices (`-apple-system`, SF Pro), **Inter Tight Variable** everywhere else, loaded through `@fontsource-variable`.
- Headlines are semibold with tight tracking, set in two tones (white claim, grey continuation) via `SectionHeader`.
- Numbers use tabular figures. No monospace face.

| Token | Size |
|---|---|
| `text-micro` | 0.75rem |
| `text-sm` | 0.875rem |
| `text-base` | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) |
| `text-lead` | clamp(1.1875rem, 1.05rem + 0.6vw, 1.5rem) |
| `text-title` | clamp(1.5rem, 1.2rem + 1.4vw, 2.5rem) |
| `text-headline` | clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem) |
| `text-display` | clamp(2.75rem, 1.4rem + 6vw, 6.5rem) |
| `text-hero` | clamp(2.5rem, 1rem + 6.4vw, 5.75rem) |

## Spacing

- Base 4px (Tailwind default scale).
- Gutter `--space-gutter`: clamp(1rem, 0.5rem + 2.5vw, 2.5rem). 16px at phone width.
- Section rhythm `--space-section`: clamp(5rem, 3rem + 7vw, 10rem). Alternate full and half rhythm, never uniform.
- Nav height 48px. Content width 1200px (`max-w-content`), prose 62ch.

## Radii

Deliberately unequal: `sm` 8px, `md` 14px, `lg` 24px (tiles), `xl` 32px (feature panels), `pill` 999px (buttons, badges).

## Borders and shadows

- Borders are always 1px `hairline`. Hover moves to `hairline-strong`. No colored borders except the focus ring.
- `shadow-card`: inner top highlight (white 4%) plus a long soft drop. Gives surfaces a lit top edge.
- `shadow-float`: nav pill and popovers.
- `shadow-accent`: primary CTA only.

## Motion

| Token | Value | Use |
|---|---|---|
| `ease-out-expo` | cubic-bezier(0.16, 1, 0.3, 1) | Reveals, entrances |
| `ease-out-quart` | cubic-bezier(0.25, 1, 0.5, 1) | Hover, state changes |
| `ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Movement between two states |
| `duration-fast` | 150ms | Color, border |
| `duration-base` | 250ms | Hover lift, nav condense |
| `duration-slow` | 500ms | Panels |
| `duration-reveal` | 800ms | On-view reveals |

Principles:
1. Motion explains: reveals follow reading order, numbers count to show they are measured, the nav indicator slides to show position.
2. Only `transform`, `opacity`, `clip-path`, and occasionally `filter` animate.
3. Entrances happen once. Nothing loops.
4. Under `prefers-reduced-motion`: no transforms, no counting, no magnetic pull, no smooth scroll. Content is shown in its final state, with at most a short opacity fade.
5. Cursor effects (magnetic, chip tilt) only run on fine pointers.

## Layout notes

- Nav is a 48px bar with a blurred layer on a separate absolutely positioned element. Do not put `backdrop-filter` on the header itself: it becomes the containing block for the fixed mobile menu.
- Services use a sticky demo beside the copy. Work is a bento grid with a full-screen case study sheet.

## Focus and states

- Focus ring: 2px accent outline, 3px offset, on `:focus-visible` only.
- Every interactive element has distinct hover, focus, and active (pressed: scale 0.98) states.
