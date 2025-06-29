# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun dev` - Start development server with turbo mode
- `bun build` - Build for production
- `bun start` - Start production server
- `bun preview` - Build and start production server
- `bun check` - Run linting and type checking together
- `bun lint` - Run ESLint
- `bun lint:fix` - Run ESLint with auto-fix
- `bun typecheck` - Run TypeScript type checking
- `bun format:write` - Format code with Prettier
- `bun format:check` - Check code formatting

Note: This project uses Bun as the package manager despite having a `packageManager` field pointing to pnpm in package.json.

## Architecture Overview

This is a personal portfolio/blog site built with Next.js 15 (App Router) featuring:

### Core Stack
- **Next.js 15** with App Router and experimental features (`useCache`, view transitions)
- **TypeScript** with strict configuration
- **Tailwind CSS** with shadcn/ui components
- **MDX** for blog content with `next-mdx-remote` and `@next/mdx`
- **PostHog** for analytics
- **T3 Env** for environment variable validation

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `articles/[name]/` - Dynamic article pages with MDX rendering
  - `projects/` - Projects showcase page
- `src/components/` - React components including shadcn/ui components in `ui/`
- `src/lib/` - Utility functions and MDX processing logic
- `content/` - MDX blog articles with frontmatter
- `public/` - Static assets (favicon, SVG icons)

### Content Management
- Articles are stored as MDX files in `content/` directory
- Frontmatter schema defined in `src/types/types.ts` with Zod validation
- Article processing handled by `src/lib/mdx.ts` using gray-matter and next-mdx-remote
- Articles require: `name`, `tags`, `title`, `excerpt`, `date` in frontmatter

### Styling & UI
- Tailwind CSS with CSS variables for theming
- shadcn/ui components configured with `components.json`
- Geist Sans font family
- CSS Grid background patterns for visual appeal
- Dark mode support configured in Tailwind

### Development Configuration
- Path alias `~/*` maps to `src/*`
- TypeScript with strict mode and `noUncheckedIndexedAccess`
- ESLint and Prettier configured with Tailwind plugin
- Build ignores TypeScript and ESLint errors (configured in `next.config.js`)

### Environment Variables
Environment variables are validated using T3 Env in `src/env.js`:
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics key  
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host URL
- Use `SKIP_ENV_VALIDATION=true` to skip validation during builds

### Key Implementation Details
- Uses Next.js `"use cache"` directive for article data fetching
- MDX components defined in `src/mdx-components.tsx`
- PostHog provider wraps the app in `src/providers.tsx`
- Article routing uses `getArticleBySlug()` with file system reads
- TypeScript errors and ESLint warnings are ignored during builds for faster deployment