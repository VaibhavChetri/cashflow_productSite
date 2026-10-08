# Radlabs product website

Static multi-page site built with [Astro 5](https://astro.build). No client framework. JavaScript is limited to the Products mega menu, scroll-triggered animations, the tab switchers, the leakage slider and calculator, the product chapter bar and the form pre-fill.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # outputs static files to dist/
npm run preview   # serves dist/ locally
```

Needs Node 18.20+ or 20.3+ (Astro 6 would need Node 22).

If styles look out of date after a lot of edits, stop the dev server, delete `node_modules/.vite`, start it again and hard-refresh the browser. Production builds are not affected.

## Where things live

| What | Where |
|---|---|
| Product name, email, domain, menus, connector statuses | `src/data/site.ts` |
| Pages (one file per URL) | `src/pages/` |
| Glass navigation, Products mega menu, footer | `src/layouts/Layout.astro` |
| Hero film and its synced chapter bar (video files in `public/video/`) | `src/components/HeroVideo.astro` |
| Homepage and shared moments: agent log, context graph, role tabs, audit steps, compare switch, integrations hub, leakage slider, client switcher | `AgentLog`, `ContextGraph`, `RoleTabs`, `AuditSteps`, `CompareToggle`, `IntegrationHub`, `LeakSlider`, `ClientPortfolio` in `src/components/` |
| Dark page headers | `src/layouts/Layout.astro`, `.page-head` in `src/styles/global.css` |
| Design rules for the homepage moments | `DESIGN.md` |
| Integration logo grid | `src/components/LogoGrid.astro` |
| Module cards, leaders section | `src/components/ModuleCards.astro`, `LeadersSection.astro` |
| Product-screen replicas (demo data) | `src/components/` |
| Colours, type, buttons, panels | `src/styles/global.css` |
| Product-screen styling | `src/styles/ui.css` |
| Images (generated with Vertex AI, `gemini-3-pro-image`) | `src/assets/img/` |
| Brand logos (from Simple Icons) | `src/assets/logos/` |
| Nav logo (red flame), favicon, iPhone icon | `public/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png` (made from `logo.png`); the footer uses it too; diagrams use `public/logo-green.png` |

Product screens are HTML rebuilds of the real dashboard filled with demo data. Never paste real screenshots: they contain customer names, bank account numbers and GSTINs.

**Font:** Stampli uses Aeonik, a paid font. This site uses General Sans (free for commercial use, from Fontshare), the closest free match. With an Aeonik licence, self-host it and change `--font` in `global.css`.

**Logos:** Tally, ApprovalMax, Reflex and RBL Bank show text marks because no official file is on hand. Drop their official SVGs into `src/assets/logos/` and add `logo: '<file name>'` to the entry in `site.ts`.

## Deploying

Deploy `dist/` to any static host. The founding-programme form uses **Netlify Forms** with no setup. On any other host, set `formEndpoint` in `src/data/site.ts` to a form service URL (for example Formspree), or submissions will fail.

## Before going live

Search the code for `CONFIRM`. Each one is a fact that must be true before publishing:

- Final product name, domain and enquiry email (`src/data/site.ts`, `astro.config.mjs`)
- Every connector status (only "Available now" may be called live)
- Trust page: Gemini tier and data terms, hosting region, retention and deletion, and "never posts, pays or changes source data"
- Integrations page: read-only access model and ledger write-back policy
- India page: MSME prioritisation and receipt matching
- Founding programme: audit length and access model
- Privacy notice: legal review, form provider, retention period
