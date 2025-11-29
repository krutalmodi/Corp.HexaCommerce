<!-- Copilot instructions for working with the Corp.HexaCommerce repo -->
# Repo snapshot

- Framework: Angular 21 (standalone-component style)
- Package manager: `npm` (project records `npm@10.9.2`)
- TS: TypeScript ~5.9; build/test use Angular CLI builders

# Quick start commands

- Install dependencies: `npm install`
- Dev server (hot reload): `npm run start` or `ng serve` (defaults to `development` configuration)
- Build (production): `npm run build` or `ng build`
- Watch-mode build: `npm run watch`
- Unit tests: `npm run test` or `ng test` (project uses Vitest under Angular builders)

# Big-picture architecture (what to know)

- This is a minimal Angular application using the modern, standalone bootstrap pattern.
  - Entry: `src/main.ts` — calls `bootstrapApplication(App, appConfig)`.
  - Root component: `src/app/app.ts` (standalone-style component with `imports`, `templateUrl`, and `styleUrl`).
  - Application configuration: `src/app/app.config.ts` — registers global providers (for example `provideRouter(routes)` and global error listeners).
  - Routes: `src/app/app.routes.ts` — exports a `Routes` array used by `provideRouter()`.

- Styles: project uses LESS. Default style file: `src/styles.less`. Components are scaffolded to use `.less` by default (see `angular.json` schematics).
- Assets: static assets are served from the `public/` directory (configured in `angular.json`).
- Source maps are enabled for the `development` configuration (useful for debugging).

# Project-specific conventions and patterns

- Standalone bootstrap + app-level `ApplicationConfig` is the canonical pattern. When adding providers, update `src/app/app.config.ts` rather than mutating `main.ts`.
- Routing: keep all route definitions in `src/app/app.routes.ts` and export the array named `routes` (the file currently exports an empty `Routes` array).
- Components: follow the existing files:
  - `src/app/app.ts` — root component uses `imports: [RouterOutlet]`, `templateUrl: './app.html'`, `styleUrl: './app.less'`.
  - Note: this repo uses `styleUrl` (singular) in `app.ts` — preserve this pattern when adding similar files unless you intentionally migrate to `styleUrls` across the repo.
- Styling: use `.less` files for components and `src/styles.less` for global styles; the CLI schematics are configured to scaffold `.less`.
- Formatting: Prettier settings are recorded in `package.json` (HTML parser set to `angular`, `printWidth: 100`, `singleQuote: true`). Prefer those settings when formatting templates.

# Where to make common changes (examples)

- Add a new route: edit `src/app/app.routes.ts` and add an entry to the exported `routes` array; then restart dev server if routes are loaded at startup.
- Add global providers (e.g., state, interceptors): add to `providers` inside `src/app/app.config.ts`.
- Create a new component: use `ng generate component <name>` or manually add a standalone component file next to `src/app/` following the `app.ts` patterns (import other standalone directives by name in `imports`).

# Testing and debugging notes

- Run `npm run test` (invokes `ng test`) — the builder delegates to Vitest. Use `--watch` or the CLI flags supported by Angular CLI for test runs.
- Development build uses `sourceMap: true` (see `angular.json` development configuration) — use Chrome/V8 sourcemaps to debug TS.

# Integration points & external dependencies

- No backend or third-party integrations are present in the repository itself. If you add HTTP services, register them via Angular DI and keep service implementations inside `src/app/` or a feature folder.
- Node packages defined in `package.json`. Dev tooling includes `@angular/cli`, `@angular/build`, `less`, `vitest`.

# Guidance for AI edits (do this, not that)

- Do:
  - Preserve bootstrap pattern: `bootstrapApplication(App, appConfig)` and keep `appConfig.providers` as the central place for app-wide providers.
  - Edit `src/app/app.routes.ts` for routing; edit `src/app/app.config.ts` for providers.
  - Use `.less` for styles and follow the Prettier settings from `package.json`.
  - Reference `src/main.ts`, `src/app/app.ts`, `src/app/app.config.ts`, and `src/app/app.routes.ts` when making structural changes.

- Don't:
  - Introduce a different global bootstrap method (for example, reverting to `platformBrowserDynamic().bootstrapModule(...)`) unless you migrate the whole app intentionally.
  - Move assets out of `public/` without updating `angular.json`.

# Example snippets (copy-paste safe)

- Root bootstrap (already present):
  - `src/main.ts` — `bootstrapApplication(App, appConfig)`
- App config (providers):
  - `src/app/app.config.ts` — `providers: [ provideBrowserGlobalErrorListeners(), provideRouter(routes) ]`

# What I couldn't infer (ask the maintainers)

- Whether singular `styleUrl` was intentional or a typo (Angular commonly uses `styleUrls`). Confirm if components should be migrated.
- Any CI pipelines or external environment variables needed for production builds or deployments.

If you'd like, I can:
- Convert this into a slightly more strict agent template (with commit message and testing steps), or
- Update existing source files to align patterns (for example, normalize `styleUrl` → `styleUrls`) — ask before making breaking changes.

Please review and tell me which areas you'd like expanded (CI, linting, component conventions, or examples for a new feature).
