# Design System

Direction: product launch page, not a dev portfolio. Near-black canvas, grain, hairlines, one accent used sparingly, big confident type, bento cards, soft light leaks behind key moments. One light section allowed later for rhythm.

Tokens live in `src/index.css` (`:root`) and are mapped in `tailwind.config.js`. Never hardcode a color, radius, shadow, or easing in a component.

## Palette (OKLCH)

| Token | Value | Use |
|---|---|---|
| `canvas` | `13% 0.006 265` | Page background |
| `surface` | `16.5% 0.006 265` | Cards |
| `raised` | `20% 0.007 265` | Hover cards, pills, inputs |
| `fg` | `97% 0.003 265` | Primary text |
| `fg-muted` | `76% 0.008 265` | Body copy |
| `fg-subtle` | `62% 0.01 265` | Labels, meta (5:1+ on canvas) |
| `hairline` | white at 8% | Default 1px border |
| `hairline-strong` | white at 14% | Hover and focus borders |
| `accent` | `91% 0.2 124` ("signal lime") | The one accent |
| `accent-ink` | `13% 0.006 265` | Text on accent fills |
| `paper` / `ink` | `97% 0.004 100` / `17% 0.006 265` | Light section only |
| `accent-deep` | `52% 0.16 132` | Accent on the light section |

Accent rules: it marks **live or actionable** things (primary CTA, availability dot, active nav state, focus ring, key numbers). Never decorative fills or large areas. Max one accent element per viewport is the target.

## Typography

- Display and text: **Instrument Sans Variable** (400 to 700, width axis unused). Tight tracking at large sizes.
- Mono: **JetBrains Mono Variable** for specs, numbers, dates, stack tags, eyebrows.
- Loaded via `@fontsource-variable`, which ships `font-display: swap`. Latin subset only.

| Token | Size | Line height | Tracking |
|---|---|---|---|
| `text-micro` | 0.75rem | 1.4 | 0.08em (mono, uppercase) |
| `text-sm` | 0.875rem | 1.5 | 0 |
| `text-base` | clamp(1rem, 0.95rem + 0.25vw, 1.0625rem) | 1.6 | 0 |
| `text-lead` | clamp(1.125rem, 1rem + 0.6vw, 1.375rem) | 1.5 | -0.01em |
| `text-title` | clamp(1.5rem, 1.2rem + 1.4vw, 2.25rem) | 1.15 | -0.02em |
| `text-headline` | clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem) | 1.02 | -0.035em |
| `text-display` | clamp(3rem, 1.6rem + 6vw, 7rem) | 0.95 | -0.045em |
| `text-hero` | clamp(3.5rem, 1rem + 11vw, 11rem) | 0.88 | -0.055em |

## Spacing

- Base 4px (Tailwind default scale).
- Gutter `--space-gutter`: clamp(1rem, 0.5rem + 2.5vw, 2.5rem). 16px at phone width.
- Section rhythm `--space-section`: clamp(5rem, 3rem + 7vw, 10rem). Alternate full and half rhythm, never uniform.
- Content width 1200px (`max-w-content`), prose 62ch.

## Radii

Deliberately unequal: `sm` 6px (tags), `md` 12px (buttons, inputs), `lg` 20px (cards), `xl` 32px (feature panels), `pill` 999px (nav, badges).

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
3. Entrances happen once. Nothing loops except the marquee, which pauses on hover, focus, and with a visible button.
4. Under `prefers-reduced-motion`: no transforms, no counting, no marquee, no magnetic pull, no smooth scroll. Content is shown in its final state, with at most a short opacity fade.
5. Cursor effects (magnetic, spotlight) only run on fine pointers.

## Atmosphere

- Grain: fixed SVG turbulence overlay at 4% opacity, `pointer-events: none`.
- Light leaks: blurred radial gradients (accent and a cool white) behind the hero and one or two key moments. Never behind body text blocks.

## Focus and states

- Focus ring: 2px accent outline, 3px offset, on `:focus-visible` only.
- Every interactive element has distinct hover, focus, and active (pressed: scale 0.98) states.
