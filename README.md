# HE Capital Markets

The HE Capital Markets website, rebuilt with the Next.js App Router, TypeScript
and Tailwind CSS.

All content, imagery, contact details and client logos were taken from the
company's own site, `https://www.hecapitalmarkets.com`. Nothing on the site is
invented — see [Content provenance](#content-provenance).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (also runs the TypeScript check)
npm run start    # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type-check on its own
```

Node 20 or newer is required.

## Environment variables

Copy `.env.example` to `.env.local` and fill it in. On Vercel, set the same
keys under **Project Settings → Environment Variables**.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key for [Resend](https://resend.com), used to deliver contact form enquiries. |
| `CONTACT_TO_EMAIL` | yes | Mailbox that receives enquiries. |
| `CONTACT_FROM_EMAIL` | yes | Sender address. Its domain must be verified in Resend. |

**The contact form is not connected to an email service until these are set.**
Until then `POST /api/contact/` returns HTTP 503 and the form tells the visitor
to email or call instead. It never shows a success message for a message that
was not delivered. To use a provider other than Resend, replace the single
`fetch` call in [`app/api/contact/route.ts`](app/api/contact/route.ts); the
validation, sanitisation, honeypot and rate limiting around it stay as they are.

No database is used, and enquiries are not stored.

## Project structure

```
app/
  layout.tsx              root layout: fonts, metadata, Organization JSON-LD
  page.tsx                homepage
  [slug]/page.tsx         services, sectors and offices (see below)
  about/, clients/, contact-us/
  insights/, insights/[slug]/
  api/contact/route.ts    enquiry endpoint
  robots.ts, sitemap.ts, not-found.tsx
components/
  layout/                 Navbar, MobileMenu, Footer
  home/                   homepage sections
  shared/                 Button, Logo, PageHero, DetailPage, ContactForm, …
data/                     all site content, separated from presentation
lib/                      site constants and form validation
public/
  brand/                  the supplied logo, unmodified
  images/                 imagery from the company's media library
```

### One dynamic route for fifteen pages

The original site published services, sectors and offices as top-level slugs
(`/mining/`, `/investor-relations/`, `/investor-relations-london/`). Those URLs
are preserved by resolving a single root segment, `app/[slug]/page.tsx`,
against the `services`, `sectors` and `locations` collections in `data/`.

`dynamicParams = false` means only the slugs returned by `generateStaticParams`
exist; anything else renders the 404 page. Adding a service or sector is a
matter of adding an entry to the relevant file in `data/` — the page, the
navigation, the footer and the sitemap all follow from it.

Every page is statically prerendered. Only `/api/contact/` runs at request time.

## Content provenance

| Item | Source |
| --- | --- |
| Body copy | The company's own pages, re-typeset from all-caps to sentence case without changing meaning. |
| Logo | `wp-content/themes/hecapital/images/largelogo.png`, copied byte-for-byte. |
| Photography | The company's WordPress media library, with one documented exception — see [Homepage portrait photograph](#homepage-portrait-photograph). |
| Client logos | The 28 named logos from its "Clients We Have Worked With" page. |
| Contact details, team, offices | Its contact page. |
| Press releases | The only two articles it publishes, both dated 28 February 2022. |

Deliberate omissions, so that nothing is fabricated:

- **No testimonials.** The source site publishes none, so the homepage shows
  the company's own "Our Vision" pillars where a testimonial carousel would go.
- **No team photographs.** None exist, so the team is shown as text.
- **No invented statistics.** The only figures shown are the published
  40-years-in-capital-markets claim and counts of real offices, services and
  sectors.
- **Unidentifiable client logos excluded.** Several logos on the source page
  have no company name attached; they were left out rather than guessed at.
- **Press releases are labelled as archive content** and dated accurately.

Two edits were made to the source copy, both to avoid repeating a claim the
site contradicts elsewhere:

- The sector and office pages mention a **Toronto** office in passing, but
  Toronto appears in no office list, has no page and has no phone number
  anywhere on the site. It is left out rather than presented as a fifth office.
- The about page refers to "six key sectors" while the site publishes **seven**.
  That is written as "key sectors" so the count cannot be wrong.

Two things worth raising with the client:

1. The site publishes the **Frankfurt office number with a `+1` country code**
   (`+1 270-7769-191`). It is reproduced verbatim in `data/locations.ts` rather
   than corrected, since the intended number cannot be known.
2. The **supplied logo only works on dark backgrounds** — "HE" and "MARKETS"
   are white, and only "CAPITAL" is blue. The header is light glass, so a
   light-background variant is generated from it; see
   [Logo variants](#logo-variants). An official light version from the brand
   owner would replace it with no code change.

## Homepage portrait photograph

The "Who We Are" section needs a tall portrait image. **Every one of the 125
assets in the company's media library is a wide banner, and the tallest is
680px** — a 4:5 crop from the best of them maxes out at 544×680, which is
roughly half the pixels the layout needs and looked visibly soft.

`public/images/about/london-skyline.webp` is therefore a licensed stock
photograph rather than company imagery: the City of London at sunset by Samuel
Quek, [free under the Unsplash
License](https://unsplash.com/photos/a-view-of-a-city-skyline-at-sunset-S9kinUyO744)
(commercial use, no attribution required). It is cropped to 4:5 at 1760×2200,
which covers every breakpoint at 2× device pixel ratio.

It is a photograph of the city the firm is headquartered in, not of its offices
or people, so it asserts nothing. Every other photograph on the site is the
company's own. If the client supplies a high-resolution portrait image, drop it
in at the same path and nothing else changes.

## Logo variants

`public/brand/` holds two versions of the same mark:

| File | Ink | Used by |
| --- | --- | --- |
| `he-capital-markets-logo.png` | "HE" and "MARKETS" white, "CAPITAL" blue | The navy footer. Byte-for-byte the supplied file. |
| `he-capital-markets-logo-on-light.png` | white ink swapped for brand navy `#17345F` | The light glass header. |

The supplied artwork is a reversed (white-on-dark) logo, so on the light header
two of its three words would be invisible. The second file is the positive
version of the same mark, generated by
[`scripts/make-light-logo.mjs`](scripts/make-light-logo.mjs) (`npm run
logo:light`). It swaps only the white ink: the blue keeps its exact colour and
every alpha value is copied through, so the letterforms, spacing, globe and
antialiasing are identical to the original. It is a colour variant, not a
redraw.

If the brand owner supplies an official light-background logo, overwrite
`he-capital-markets-logo-on-light.png` with it and delete the script — nothing
else changes.

Both files are served with `unoptimized` on `next/image`: they are small, and
re-encoding a wordmark to lossy AVIF softens the lettering.

## Client logo marquee

The "Companies we have worked with" band runs two rows of client logos in
opposite directions. It is pure CSS, so
[`LogoMarquee`](components/shared/LogoMarquee.tsx) stays a Server Component —
no client bundle, no timers, no per-frame React state.

Two details make it work:

- **The loop is seamless because of how the track is spaced.** Each track
  holds the same sequence twice and animates by exactly `-50%`. Spacing comes
  from a right margin on every item, *not* a flex `gap`: with a gap, N items
  have N−1 gaps, so half the track width would not equal one whole sequence
  and the loop would jump on every repeat. A test asserts the two sequences
  are identical to within half a pixel.
- **The duplicate pass loads eagerly.** It sits outside the clipped container,
  so lazy loading would never fire for it and the row would scroll in with
  gaps. It is also `aria-hidden`, and its images carry empty alt text, so
  screen readers hear each client once.

Under `prefers-reduced-motion` the tracks stop and the edge fade is removed,
leaving a static row that starts flush with the left edge.

### Logo assets

The logos came from the company's media library, where each file is a 270×155
canvas with the mark centred inside — on average **~55% of each file was
padding**, which made the marks render at roughly a third of their intended
size in a fixed-height row.
[`scripts/trim-client-logos.mjs`](scripts/trim-client-logos.mjs) trims each one
to its ink and writes the resulting dimensions to
`data/client-logo-sizes.generated.ts`, which `data/clients.ts` reads so
`next/image` reserves the right space. It is idempotent, and logos that
genuinely fill their canvas (those with a solid coloured background) are left
alone. A missing entry throws at module load, so a renamed asset fails the
build rather than shipping a broken image.

## Design system

Everything visual is defined as Tailwind v4 theme tokens in
[`app/globals.css`](app/globals.css); components reference the tokens rather
than ad-hoc values.

- **Colour.** Brand blue `#385da8`, sampled from the logo artwork. Body text is
  `#5f6d84`, chosen so running copy clears WCAG AA (4.5:1) on white *and* on
  both pale-blue section backgrounds — not only on white.
- **Type.** Source Serif 4 for display (normal and italic), Inter for UI and
  body, both via `next/font`. One scale covers the site: `display`, `h1`–`h4`,
  `lead`, `body` and `card`. Nothing uses an off-scale size, and card copy
  never drops below 15px.
- **Rhythm.** Every full-width section uses the `.section-y` utility
  (5rem, 7rem from `lg`), so vertical spacing is consistent rather than decided
  per section. `.measure` / `.measure-sm` cap line length for readability.

### The floating glass header

The header is a centred floating pill (`max-width: 1320px`, 32px side margins)
fixed over the hero rather than sitting in the page flow. Its frosted surface,
dropdown panels and mobile panel all share the `.glass-surface` /
`.glass-panel` classes in [`app/globals.css`](app/globals.css) — the styling is
defined once.

Three things are worth knowing before editing it:

- **`backdrop-filter` makes the bar a containing block for `position: fixed`
  descendants.** The mobile overlay is therefore rendered as a *sibling* of the
  bar, not inside it; nested, its full-screen scrim collapsed to the bar's own
  358×72 box. `MobileMenuToggle` and `MobileMenuPanel` are split for this
  reason and the open state lives in `Navbar`.
- **The CSS compiler emitted only `-webkit-backdrop-filter`** under the default
  browser targets, which would have left Firefox with no blur. The
  `browserslist` field in `package.json` (Tailwind v4's own baseline) makes it
  emit the standard property too.
- **`@supports not (A or B)` makes the compiler drop the whole rule.** The
  no-backdrop-filter fallback is written as a single condition.

Because the header no longer occupies layout space, `HeroSection`, `PageHero`
and the 404 page carry the top padding that keeps their content clear of it,
and `<main>` has `scroll-mt` so the skip link lands below the bar.

Two deliberate differences from the supplied design reference:

- **No search icon.** The reference shows one, but the site has no search
  function, and the brief conditioned the icon on there being one. Adding a
  non-functional control would have been worse than leaving it out.
- **The logo is the generated light variant.** See
  [Logo variants](#logo-variants); the supplied artwork is white-on-dark and
  would be half-invisible sitting bare on a light glass bar.

### The dev-tools badge

The small dark circular icons that appear down the left edge of local
screenshots are the **Next.js dev-tools indicator** — a `next dev` overlay
rendered inside a `<nextjs-portal>` shadow root. It is not part of this
codebase and never appeared in a production build. `devIndicators: false` in
[`next.config.ts`](next.config.ts) now switches it off locally too, so design
reviews are not cluttered by it.

## URLs and SEO

`trailingSlash` is on, matching the original site, so indexed URLs resolve
unchanged. Pages that moved are redirected permanently in
[`next.config.ts`](next.config.ts):

| Old | New |
| --- | --- |
| `/blog/` | `/insights/` |
| `/opawica-intercepts-visible-gold/` | `/insights/opawica-intercepts-visible-gold/` |
| `/boosh-revenues-surge/` | `/insights/boosh-revenues-surge/` |
| `/some-of-our-clients/` | `/clients/` |
| `/blockchain/` | `/block-chain/` |

Each page sets its own title, description, canonical URL and Open Graph data.
`robots.ts` and `sitemap.ts` generate `/robots.txt` and `/sitemap.xml`.
Organization JSON-LD in the root layout asserts only verifiable facts — no
ratings, awards or founding dates.

## Accessibility and motion

- Semantic landmarks, a skip link, one `<h1>` per page, and a visible focus
  ring on every interactive element.
- Dropdowns and the mobile menu work from the keyboard and close on `Escape`.
- Form fields have real labels, `aria-invalid` on error, and a single polite
  live region for status.
- Scroll reveals start hidden and are shown by script. Two CSS guarantees stop
  that from hiding content: a `<noscript>` rule in the root layout, and a
  `prefers-reduced-motion` rule in `globals.css`. Both force `[data-reveal]`
  elements visible.

## Deploying

The project targets Vercel with no extra configuration. Import the repository,
add the three environment variables above, and deploy. Any Node host works:
`npm run build` followed by `npm run start`.
