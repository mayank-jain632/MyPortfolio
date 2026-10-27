# Open items

Running list across steps. Updated at the end of each step. Last update: redesign (Steps 3 to 6), 2026-10-27.

## Waiting on Mayank

- [ ] **Web-safe resume** at `public/Mayank_Jain_Resume.pdf`, without the phone number or desk performance figures. The Resume links 404 until it exists. `check:data` scans it with `pdftotext` once present (install with `brew install poppler`; without it the check skips with a warning).
- [ ] **Myst attribution.** Is the "about 30 live trials" result Mayank's or the team's? Same question for Android Keystore and the face recognition work. Both are attributed to the team until confirmed (`src/data/projects.js`, `src/data/stats.js`).
- [ ] **Myst "What I built" wording.** Stated role: the entire UI, live transcription, and memory features. The commit history of `harshaldhaduk/myst` supports this in part (see below), so the copy says "built the reminders UI, worked on home and enrollment" and "worked on the memory features". Confirm or correct before launch.
- [ ] **Clarity award wording.** Devpost says "Best Use of Supabase" (Hook 'Em Hacks). The resume says "1st Place, Supabase x Gemini Track". The site uses the resume wording for now.
- [ ] **Screenshots and videos** for each case study, dropped into `public/media/<slug>/`. Add them to the project's `media` field (`images: [{ src, alt }]`, `poster`, `video: { provider, id, title }`). `check:data` fails if a listed file is missing or an image has no alt text.
- [ ] **Hours saved** stays "20+" (resume says about 30). Decide later.
- [ ] **Dorm Decor** stays out until a public repo exists.
- [ ] **GitHub repo "website" field** points to `my-portfolio-eight-azure-119agdlasi.vercel.app`, which returns 404. Point it to `https://mayank-jain-portfolio.vercel.app` (GitHub repo settings, About).

## Done in the redesign

- [x] Hero, services with live demos, work tiles with case study sheets, highlights, experience, tech specs, contact.
- [x] SEO meta, JSON-LD, favicon, OG image, robots, sitemap.

## Still open after the redesign

- [ ] Verify the Relay iframe embed on the deployed site (it could not be loaded from the build sandbox).
- [ ] Run Lighthouse against the Vercel preview and fix anything under 90.
- [ ] `public/og.png` is a simple generated card. Replace it with a designed one if wanted.

## Repo housekeeping (optional, ask first)

- [ ] `node_modules` still exists in the history of `main` (untracked from `d602b60` on). Purging it needs a history rewrite and force-push.
- [ ] No unit test runner. Adding Vitest needs approval under the dependency rule.
- [ ] `hub/` and `assets/` are untracked. `assets/` holds the old resume PDF with private details. Do not commit it.

## Reference: verification notes (2026-10-27)

**Myst commit history.** `harshaldhaduk/myst` (created 2026-10-24, 61 commits) is where the team worked. `mayank-jain632/Myst` (created 2026-10-27, 60 commits) has the same history up to one commit. Not for publication:

- Commits: Mayank 26, RJ Paidi 18, bruhlol108 12, Harshal Dhaduk 5.
- Code files Mayank wrote all of: `ui/RemindersPart.kt` (551 lines), `features/conversation/LiveConversationRecorder.kt`, `muse/MuseRealtimeClient.kt`, `core/secrets/MuseKeyStore.kt` (the Android Keystore code), `glasses/Earcon.kt`, `scripts/provision-muse-key.sh`.
- Large shares: `ui/EnrollViewModel.kt` (364 of 1056 lines), `ui/HomeScreen.kt` (166 of 503), `features/faces/FamiliarFaces.kt` (95 of 229), `core/records/HouseholdStore.kt` (89 of 257), `features/meds/DoseReminders.kt` (139 of 371), `glasses/GlassesTapTrigger.kt` (150 of 306).
- Led by teammates: `ui/SetupScreen.kt`, `ui/HomeScreen.kt`, `ui/MystApp.kt`, `ui/Components.kt`, and `ui/theme/` (bruhlol108); `core/records/VisitMemory.kt` (bruhlol108, Mayank 19 of 99 lines); `features/faces/IdentityProvider.kt`, `glasses/DatGlassesGateway.kt`, and the records schema (RJ Paidi).

**Clarity.** The Devpost repo `bruhlol108/SimpleClarity` returns 404 (private or deleted). `rjp123456/SimpleClarity` ("Clarity Lite, HookEm Hacks 2026") is public and includes Mayank's commits, so it is linked.

**Live URLs.**

- AWS hackathon: the README's `dgvmahl7u2clq.cloudfront.net` no longer resolves (DNS fails). No live link, no embed.
- Relay: the repo homepage `relay-six-indol.vercel.app` redirects (307) to `relay-space.vercel.app`. That page returns 200 with no X-Frame-Options or CSP `frame-ancestors`. It is a public landing page with sample data, so it is embedded.
- Relay Marketplace: `Relay.relay-tasks` v1.0.3, confirmed through the Marketplace API.

**Canonical (D7).** `mayank-jain-portfolio.vercel.app` returns 200 and serves production. `my-portfolio-eight-azure-119agdlasi.vercel.app` returns 404.
