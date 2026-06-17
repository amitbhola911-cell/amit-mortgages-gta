## Goal

Convert this project from TanStack Start (SSR on Cloudflare Workers, file-based routing) to a plain Vite + React Single Page Application that can be deployed as a static site on Netlify.

> ⚠️ Heads-up: this stack is officially supported by Lovable as TanStack Start. After this migration the Lovable platform conventions (server functions, the lovable vite preset, generated route tree, SSR error wrappers) no longer apply — Lovable's preview will still work, but future AI guidance that assumes TanStack Start won't fit. If you ever want to redeploy on Lovable Cloud / a Lovable URL, the easier path is to keep TanStack Start and just publish. You explicitly asked for Netlify static, so I'll proceed.

## What changes

### Routing
- Remove file-based routing (`src/routes/*`, `routeTree.gen.ts`, `router.tsx`, `start.ts`, `server.ts`, `lib/error-*`, `lib/config.server.ts`, `lib/api/`).
- Add `react-router-dom` with a `BrowserRouter` and a `<Routes>` table mapping `/`, `/about`, `/services`, `/calculators`, `/contact`, `/apply` plus a 404.
- Replace every `@tanstack/react-router` import (`Link`, `createFileRoute`, `useRouter`, `HeadContent`, etc.) with React Router equivalents (`Link`, `NavLink`, `useNavigate`).
- Move per-route `head()` metadata into a tiny `<SEO>` component that sets `document.title` and meta tags via `useEffect` on each page.
- Drop `sitemap[.]xml.ts` server route → ship a static `public/sitemap.xml` instead.

### App shell
- New `src/main.tsx` mounts `<App />` into `#root`.
- New `src/App.tsx` wires `BrowserRouter`, `QueryClientProvider`, `SiteHeader`, `<Routes>`, `SiteFooter`, `<Toaster />`.
- New `index.html` at project root with `<div id="root">`, viewport, base title, Google Fonts `<link>` for Fraunces + Inter (currently injected via TanStack head config), and a single root `<link rel="stylesheet">` is no longer needed — Vite will inject `src/styles.css` via the `main.tsx` import.

### Vite config
- Replace `@lovable.dev/vite-tanstack-config` with the standard `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths` setup. Remove nitro / tanstack plugins.
- Standard `vite.config.ts` with `base: "/"`, `build.outDir: "dist"`.

### Netlify
- Add `netlify.toml` (`build = "vite build"`, `publish = "dist"`).
- Add `public/_redirects` with `/* /index.html 200` so SPA deep links work.

### Dependencies
- Remove: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@lovable.dev/vite-tanstack-config`, `nitro`.
- Add: `react-router-dom`.
- Keep: React 19, Tailwind v4, shadcn UI, React Query, Sonner, all radix packages, Lucide, the calculators, NewsTicker, SiteHeader/Footer components.

### Files preserved (content untouched, only imports rewritten)
- All `src/components/ui/*`
- `src/components/SiteHeader.tsx`, `SiteFooter.tsx`, `NewsTicker.tsx` (rewrite `<Link>` import only)
- `src/styles.css`, assets in `src/assets/`
- Calculator logic and form fields inside `apply.tsx`, `calculators.tsx`, `contact.tsx`

### Files removed
- `src/routes/` directory (after extracting page bodies into `src/pages/`)
- `src/routeTree.gen.ts`, `src/router.tsx`, `src/start.ts`, `src/server.ts`
- `src/lib/error-capture.ts`, `error-page.ts`, `lovable-error-reporting.ts`, `config.server.ts`, `api/`
- `vite.config.ts` rewritten

## New file layout

```text
index.html
netlify.toml
public/_redirects
public/robots.txt          (kept)
public/sitemap.xml         (new, static)
src/
  main.tsx                 (entry)
  App.tsx                  (router + providers + layout)
  components/SEO.tsx       (per-page <title>/meta)
  components/SiteHeader.tsx  (Link → react-router-dom)
  components/SiteFooter.tsx  (Link → react-router-dom)
  components/NewsTicker.tsx
  components/ui/*          (unchanged)
  pages/
    Index.tsx
    About.tsx
    Services.tsx
    Calculators.tsx
    Contact.tsx
    Apply.tsx
    NotFound.tsx
  styles.css
  assets/*                 (unchanged)
```

## Build / verify
- `bun add react-router-dom`, `bun remove` the TanStack/Lovable/nitro packages.
- The Lovable harness automatically typechecks & builds after edits land — I'll watch for errors and patch.
- Smoke test: load `/`, click through nav, verify calculators tab tooltips and Apply form still render.

## Deploying to Netlify (after migration)
1. Push the repo to GitHub.
2. Netlify → "Add new site" → "Import from Git" → pick the repo.
3. Netlify auto-detects Vite (build = `vite build`, publish = `dist`). `netlify.toml` makes this explicit.
4. The `_redirects` file ensures `/calculators`, `/apply`, etc. work on refresh.
5. Set custom domain (`amitmortgages.com`) in Netlify → Domain management when ready.

Ready to execute when you approve.