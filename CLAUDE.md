# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio site for Lucas Haladjian, a front-end developer. The site is presented as an interactive **dashboard** made up of widgets — each widget covers a section: presentation, experiences, skills, contact form, social links, etc.

Secondary goal: learning React, Next.js, Vercel deployments, CI/CD, and AI-powered content generation.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19
- **Language**: TypeScript
- **Styling**: SCSS + CSS Modules + CSS custom properties design system
- **Deployment**: Vercel (CI/CD via GitHub → Vercel integration)
- **AI**: Vercel AI SDK (content generation features)

## Commands

```bash
npm run dev       # start dev server (Turbopack)
npm run build     # production build
npm run lint      # ESLint
```

## Architecture

```
app/
  layout.tsx               # root layout — imports globals.scss, sets metadata
  page.tsx                 # home page — composes dashboard widgets
  api/                     # Next.js API routes (contact form, AI endpoints)

components/
  widgets/                 # one folder per dashboard widget
    SplashScreen/
      SplashScreen.tsx
      SplashScreen.module.scss
  ui/                      # shared primitives (Button, Input, Card…)

styles/
  _variables.scss          # all design tokens as CSS custom properties on :root
  _reset.scss              # base reset
  globals.scss             # @use "variables"; @use "reset";

public/
  assets/
```

## CSS / Design system

All tokens live in `styles/_variables.scss` as CSS custom properties on `:root`. Components consume them directly — no SCSS variables passed around.

| Token category | Examples                                          |
|----------------|---------------------------------------------------|
| Colors         | `--color-bg`, `--color-accent`, `--color-surface` |
| Typography     | `--font-size-base`, `--font-weight-bold`          |
| Spacing        | `--spacing-md`, `--spacing-xl`                   |
| Radius         | `--radius-card`                                   |
| Shadow         | `--shadow-widget`                                 |
| Transition     | `--transition-base`, `--transition-slow`          |

Each component has its own `.module.scss` — scoped CSS Modules only, no global class overrides.

## Widgets

Planned dashboard widgets:
- **SplashScreen** — name + subtitle with fade/slide-up animation ✓
- **Hero / Presentation** — name, title, short bio
- **Skills** — tech stack with visual indicators
- **Experiences** — timeline of past roles
- **Projects** — featured work with links
- **Contact** — form with API route backend
- **Social** — links to GitHub, LinkedIn, etc.
- **AI content** — widget powered by Vercel AI SDK

## Deployment & CI/CD

- GitHub repo: `naregordon/dashboard-portfolio`
- Vercel project linked to the `main` branch → auto-deploy on push
- Preview deployments on every PR
- Environment variables managed via `vercel env` (never committed)
