# whoami: Roshan Desai's personal site

**Register:** brand. This is a portfolio; the design *is* the product.

## What it is

A personal site: a hero, writings, saved content, technical docs, and a `/work` page
that shows what I've actually shipped, role by role, with numbers pulled from the
GitHub API rather than rounded up by hand.

## Audience & scene

An engineer or a hiring manager opens this on a laptop, mid-afternoon, skimming for
one answer: *what has this person actually built, and at what volume?* They're
suspicious of portfolios that assert seniority without evidence. The page has to
answer with data before it answers with adjectives.

That scene forces a light, high-legibility, data-forward surface. Not a dark
terminal. The "developer portfolio therefore dark mode with a mono stack" move is costume,
and it's the reflex one tier past the obvious. The work is the instrument; the page
is the readout.

## Voice

Lowercase, first-person, unpolished on purpose. "yo! i'm roshan" / "i build things" /
"numbers are pulled straight from github, not rounded up." Confident about the work,
casual about the framing. Never corporate, never a résumé voice.

## Aesthetic lane

**Instrument.** Precision measurement on white: tabular numerals, a real data
visualisation as the hero image, hairline rules, generous whitespace. Closer to a
well-made telemetry readout or a spec sheet than to a magazine spread or a terminal.

Explicitly not: editorial-typographic (display serif + italic + rules), terminal-native
dark mode, SaaS hero-metric template.

## Color strategy

Restrained, tipping to Committed inside the data. White ground, near-black ink, and a
single saturated blue that carries *all* the quantitative meaning: the contribution
heatmap, links, focus rings. Colour appears where there's a number behind it; nowhere
decorative. Blue is inherited from the existing site (links, selection), so this is
identity-preservation, not a fresh pick.

## Type

- **Figtree** for display and body. Already vendored in `app/fonts/`; humanist, warm
  enough to carry the lowercase voice without looking like a startup deck.
- **Geist Mono** for numerals and repo slugs only. Tabular alignment is load-bearing on a
  page that is mostly counts; mono here is functional, not technical cosplay.

## Constraints

- Next 14 App Router, React 18, Tailwind v3, Bun. Dev server is pinned to **port 4000**.
- Content lives in `_writings/` and `_docs/` as frontmatter markdown; the loaders in
  `utils/` are stable and out of scope for design work.
- `/work` numbers live in `app/data/work.ts` and are refreshed from the GitHub API +
  each repo's Insights → Contributors graph. Restate them only from a real query.
