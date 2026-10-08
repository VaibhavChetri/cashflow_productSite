# Design rules

Tokens live in `src/styles/global.css` (site) and `src/styles/ui.css` (product screens). Change them there, never per page.

## Palette

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0f3326` | Headings on light |
| `--ink-soft` | `#4f665c` | Body copy on light |
| `--brand` | `#0f7a48` | Links, primary buttons |
| `--brand-bright` | `#22b573` | Accents, progress, focus ring. Not for text on light |
| `--dark` | `#0b2a1f` | Dark surfaces |
| On dark | text `#fff` / `#c3d6cc`, accent `#5fd39a` | Headings, body, highlights on dark |

Every text colour must pass 4.5:1 on its surface. Run Lighthouse after any colour change.

## Type

General Sans for everything. Numbers in logs and tables use `font-variant-numeric: tabular-nums`, not monospace. Sentence case for every label and chip; no all-caps, no tracked-out eyebrows.

## The shared system

- **Homepage hero is light and centred (Notion-style)** so the pastel launch film sits naturally. **Inner pages open dark:** every `.page-head` sits on a dark band with a halftone dot field (`--dots`), reaching up behind the floating nav. Inner pages get this for free from `.page-head`.
- **White cards.** `.panel` is a white card with a hairline. `.panel--lead` is the one tinted, dotted panel that leads a group.
- **App windows.** Product screens sit in `.shot-frame`; add `<div class="win-bar" aria-hidden="true"><i></i><i></i><i></i></div>` as its first child to frame one as an app window.
- **Dark sections**: `.night-band` (agent log) and the closing `CtaBand`. Add `on-dark` to any dark section so quiet buttons and focus rings switch to their light versions.

## Reusable moments (src/components)

| Component | What it does | Borrowed from |
|---|---|---|
| `AgentLog` | Timestamped lines that type in on scroll. Props: `lines`, `heading`, `headingId`, `lede`, `caption`, `final` | Nanonets reconciliation |
| `ContextGraph` | Hover/tap a clause, its evidence card lights up (CSS `:has`) | Nanonets AP |
| `CompareToggle` | Manual vs Radlabs switch, flips once on scroll | Nanonets reconciliation |
| `RoleTabs` | Accessible tabs, one per role, own screen per tab | Ledge roles |
| `AuditSteps` | Self-playing four-step timeline | Razorpay AP workflow, Glean time badges |
| `IntegrationHub` | Connectors on a ring; only live ones flow | Xelix, Cashflo |
| `HeroVideo` | The launch film in a frame, with a chapter bar synced to its scenes | Notion hero |

## What this site does differently

1. **The product proves itself.** Every moment shows the engine working on one set of demo data (Pinecrest PM-1190, Kestrel, Halden; 2,640 threads, 412 payments, 31 decisions). Reuse those names and numbers.
2. **Evidence over adjectives.** Show the source system, not a claim about it.
3. **Honest status.** Only "Available now" connectors are described as live; "Rolling out" and "Next" are shown as such, including in motion (only live lines flow on the hub).

## Motion

- One orchestrated moment per section, started by the shared `IntersectionObserver` in `Layout.astro`: add `data-anim` to the wrapper and style its `.in` state.
- Hide content before it plays only under `.js`, so it is never invisible without JavaScript.
- Never dim text with opacity as a "not played yet" state. It fails contrast. Dim borders and markers instead.
- `prefers-reduced-motion` is handled globally in `global.css`; check the end state still makes sense.

## No fake numbers

No running totals, "processed so far" counters, customer counts or logos unless they are real and approved. Any estimate must show its assumptions. All product screens say they show demo data. Anything marked `CONFIRM` in the code stays as it is until confirmed.

## Dev server gotcha

Astro sometimes keeps serving a page's old `<style>` after an edit. `touch` the file (or restart `npm run dev`) and hard-refresh.
