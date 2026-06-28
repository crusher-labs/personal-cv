# AGENTS.md - personal-cv

`personal-cv` is a one-off site experiment in the crusher-labs org: a single-page CV / resume site.

Workspace rules: `x:\crusher-labs\AGENTS.md`. Global rules: `~/.claude/CLAUDE.md`. This file adds only what is specific to this repo.

## What it is

- **Stack:** Vite 4 + React 18 SPA, Tailwind CSS 3 (shadcn-style HSL CSS-var tokens), Radix UI primitives, Framer Motion, lucide-react icons. JSX, no TypeScript. `@` aliases `./src`.
- **Purpose:** A static one-page resume/CV. Content is still the scaffold template (subject "Laurent Caesar", a Market Research / IT Business Analyst); copy, contact links, and the hero portrait are placeholders to be replaced.
- **Origin:** Scaffolded by Hostinger Horizons (`index.html` carries its generator meta + default title). `package.json` name is the generic `web-app`.
- **Hosting:** No deploy config in the repo (no Vercel/Netlify/GitHub Pages workflow, no `.github/`). It is a plain static Vite build: `npm run build` emits `dist/`, which is served as static files wherever it is deployed. `jspdf` + `html2canvas` are bundled (the `#resume-content` element is the intended print/PDF target) but no export button is currently wired up.

## Commands

| Task | Command |
| --- | --- |
| Install | `npm install` |
| Dev server | `npm run dev` (Vite, host `::`, port 3000) |
| Build | `npm run build` (outputs `dist/`) |
| Preview build | `npm run preview` (host `::`, port 3000) |

No test or lint script is defined (`eslint` is installed but unconfigured).

## Conventions

- Each resume section is its own component under `src/components/` (`Hero`, `Experience`, `Education`, `Skills`, `Contact`); `App.jsx` composes them. Add new sections the same way.
- Tailwind theme colors are HSL CSS vars (`hsl(var(--primary))` etc.); use the token classes, not raw hex.
- Page `<title>` / SEO meta live in `App.jsx` via `react-helmet`, not `index.html`.

## What NOT to do

- **Single-branch repo: `main` only, no `dev` branch.** Don't commit to `main` without an explicit go-ahead; if substantive work starts, branch first. Docs-only changes on `main` are fine.
- **No `Co-Authored-By` / AI-attribution trailers** in commits (user identity only).
- **No secrets in tracked files.** `.env*` is gitignored; keep it that way.
- Don't commit `dist/` or `node_modules/` (already gitignored).
- Don't treat the template copy as real data; replace placeholders rather than building features around them.
