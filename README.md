# Skycodes — portfolio v5

Editorial single-page portfolio for Vaishnavi Kurmi (Skycodes). Next.js 14 App
Router, TypeScript, plain CSS. No Tailwind, no UI libraries, no runtime
dependencies beyond React and Next.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploys to Vercel as-is — push the folder to a repo and import it.

There's also `preview.html` at the project root: open it directly in a browser
to see the design with no install step. It's a static mirror of the same
stylesheet, handy for quick tweaks, and is not part of the build.

## Where things live

```
app/
  layout.tsx      fonts, metadata, <body class="boot">
  page.tsx        section order
  globals.css     the entire design system — tokens at the top
components/       one file per section, plus Reveal / CountUp / Rail helpers
lib/data.ts       all copy, links, stats, projects, services
public/           images
```

**Change text, links or stats in `lib/data.ts`.** Nothing is hardcoded in the
components.

## Design tokens

Edit the `:root` block at the top of `app/globals.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--paper` | `#F1F1EF` | page background |
| `--paper-2` | `#E8E8E4` | marquee strip, hover fills |
| `--ink` | `#0E0E0E` | body text and display type |
| `--ink-2` / `--ink-3` | greys | secondary and tertiary text |
| `--rule` | `#D2D2CD` | every hairline |
| `--accent` | `#D81E2C` | the single accent, pulled from the logo |
| `--rail` | `88px` | width of the fixed left rail |

Type is Archivo (100–500) for everything visible and JetBrains Mono for the
small engineering labels, both loaded through `next/font`.

## Motion

One orchestrated load sequence, then restraint:

- **On load** (`Boot.tsx` swaps `body.boot` → `body.ready`) the rail fades in,
  the figures rise, "Hello" clip-reveals from below its mask, the portrait
  unveils upward and the baseline rule draws across.
- **On scroll** `Reveal.tsx` fades each block in once, `CountUp.tsx` runs the
  content figures, and `Rail.tsx` drives the progress hairline.
- **Continuous** only the tech marquee, which pauses on hover.

`prefers-reduced-motion: reduce` disables all of it and shows the final state.

## Images

`public/profile-alt.png` (hero) and `public/profile.png` (about) are transparent
cutouts — no frame, no background. If you swap in new ones, keep them as PNGs
with a real alpha channel and update the `width`/`height` props in `Hero.tsx`
and `About.tsx` to the new pixel dimensions.

`public/logo.png` is the circular brand mark, also transparent. It is referenced
in exactly one place (`components/Nav.tsx`), so replacing the file is enough.

## Accessibility

Keyboard focus is visible everywhere, the mobile sheet closes on Escape and
traps page scroll while open, decorative elements are `aria-hidden`, and the
layout reflows to a single column below 880px.
