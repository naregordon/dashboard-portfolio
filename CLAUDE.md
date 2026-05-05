# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio site for Nareg, a front-end developer. The site is presented as an interactive **dashboard** made up of widgets — each widget covers a section: presentation, experiences, skills, contact form, social links, etc.

Secondary goal: learning React, Next.js, Vercel deployments, CI/CD, and AI-powered content generation.

## Stack

- **Framework**: Next.js (App Router)
- **UI**: React
- **Styling**: SCSS + design system (see below)
- **Deployment**: Vercel (with CI/CD via GitHub → Vercel integration)
- **AI**: Vercel AI SDK (content generation features on the site)

## Commands

> To be updated once the project is scaffolded.

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # ESLint
```

## Architecture

```
app/
  layout.tsx          # root layout, loads global styles + fonts
  page.tsx            # dashboard home page (widget grid)
  api/                # Next.js API routes (contact form, AI endpoints)
components/
  widgets/            # one component per dashboard widget
  ui/                 # shared primitives (Button, Input, Card…)
styles/
  _variables.scss     # design tokens (colors, spacing, typography)
  _reset.scss
  globals.scss        # imports all partials
  components/         # per-component SCSS modules
public/
  assets/
```

## CSS / Design system

SCSS with CSS custom properties as the source of truth. Tokens defined in `_variables.scss` and exported as CSS variables at `:root`.

| Token category | Example variable   |
| -------------- | ------------------ |
| Colors         | `--color-primary`  |
| Typography     | `--font-size-base` |
| Spacing        | `--spacing-md`     |
| Radius         | `--radius-card`    |
| Shadow         | `--shadow-widget`  |

Each widget/component has its own `.module.scss` file. No global class overrides — all styling scoped via CSS Modules.

## Widgets

Planned dashboard widgets:

- **Hero / Presentation** — name, title, short bio
- **Skills** — tech stack with visual indicators
- **Experiences** — timeline of past roles
- **Projects** — featured work with links
- **Contact** — form with API route backend
- **Social** — links to GitHub, LinkedIn, etc.
- **AI content** — widget powered by Vercel AI SDK (bio generation, etc.)

## Deployment & CI/CD

- GitHub repo: `naregordon/dashboard-portfolio`
- Vercel project linked to the `main` branch → auto-deploy on push
- Preview deployments on every PR
- Environment variables managed via `vercel env` (never committed)
