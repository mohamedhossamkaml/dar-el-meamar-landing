<!-- Auto-generated guidance for AI coding agents working on this repo -->
# Copilot / AI Agent Instructions — dar-el-meamar-landing

Short, actionable guidance to get productive in this codebase.

- Tech stack: React (18.x) + TypeScript + Vite + TailwindCSS. Animations use Framer Motion, GSAP, three.js and Vanta. Routing via react-router-dom.
- Key scripts (see `package.json`):
  - `npm install` — install dependencies
  - `npm run dev` — start dev server (Vite)
  - `npm run build` — production build (Vite)
  - `npm run preview` — preview production build
  - `npm run lint` — run ESLint over the repo
  - `npm run typecheck` — `tsc --noEmit -p tsconfig.app.json`
  - `npm run deploy` — deploy `dist` to GitHub Pages (uses `gh-pages`)

Important repo facts and conventions
- Project root layout: UI-only single page app under `src/`. Main entry is `src/main.tsx` and top-level router lives in `src/App.tsx`.
- BrowserRouter uses a fixed `basename` (`BASE_PATH = "/dar-el-meamar-landing/"`) in `src/main.tsx`. Respect this for links, static asset paths, and new routes.
- Localization: `src/context/LanguageContext.tsx` provides `LanguageProvider` and `useLanguage()`; translations are in `src/locales/translations.ts`.
  - `LanguageContext` persists chosen language in `localStorage`, sets `document.documentElement.lang`, `dir`, and toggles an `rtl` class for Arabic. When adding UI for Arabic, ensure styles respond to `dir="rtl"` and `.rtl` where necessary.
  - `translations.ts` exports `translations` object and `Language`/`TranslationKey` types. Access translations like: `const { t } = useLanguage();` then `t.nav.home`, `t.hero.title`, etc.
- Components: organized under `src/components/` with subfolders (`about`, `gallery`, `works`, `Tools`, `servicesComponents`). Component files use PascalCase and `.tsx` extensions. Keep components presentational where possible and place animation/3D logic inside `Tools/`.
- Animations & heavy client code: files under `src/components/Tools/` (three.js, Vanta, ogl) use browser-only APIs. Avoid running this code during SSR or tests. Prefer lazy-loading these modules or guarding them behind `typeof window !== 'undefined'`.
- Styling: Tailwind utility classes are used throughout. Dark mode is implemented via the `dark` class on the root element; follow existing patterns in `Navbar`, `Footer`, and pages for theme support.

Patterns and examples
- Add routes in `src/App.tsx` using the existing `Routes`/`Route` pattern. Example:
  - Route to a new page: `<Route path="/new" element={<NewPage />} />` (remember the `basename` in `main.tsx`).
- To add an internationalized string:
  1. Add the new key to both `translations.en` and `translations.ar` in `src/locales/translations.ts`.
  2. Use it from components via `const { t } = useLanguage();` and reference `t.section.key`.
- To add an animated/3D component: place it under `src/components/Tools/`, import heavy libs inside useEffect or lazy-load to avoid SSR issues.

Integration and external dependencies
- The repo includes several large client-side libs: `three`, `vanta`, `ogl`, `framer-motion`, `gsap`. Expect heavier bundles — use dynamic imports where appropriate.
- `@supabase/supabase-js` is included in dependencies; if you add backend integration, follow existing conventions (none present in src for Supabase by default).

Developer workflows and gotchas
- Local dev: `npm install` then `npm run dev`. Vite serves with HMR.
- Base path: Many routes and any GH Pages deployment assume `BASE_PATH = "/dar-el-meamar-landing/"`. If you change deployment path, update `main.tsx` and `vite.config.ts` accordingly.
- Linting/typecheck: Run `npm run lint` and `npm run typecheck` before opening PRs.
- Deploy: `npm run deploy` uses `gh-pages`. It builds to `dist` and publishes that directory.

Files to inspect when changing behavior
- `src/main.tsx` — router basename and providers
- `src/App.tsx` — top-level routes/layout
- `src/context/LanguageContext.tsx` — localization provider, RTL handling
- `src/locales/translations.ts` — English & Arabic strings and types
- `src/components/Tools/` — animation & 3D helpers (guard for browser-only APIs)
- `tailwind.config.js`, `postcss.config.js` — styling setup
- `eslint.config.js` — linting rules

If you update this file
- If you find project-specific rules not covered here (custom lint rules, deploy nuances, environment variables), update this file and call out where you found the rule (file + brief rationale).

If anything is unclear or you want more examples (e.g., how translations are consumed inside a component or how to lazy-load a Vanta background), tell me which area to expand and I will add a short, copy-pasteable code example.
