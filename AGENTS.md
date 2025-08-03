# AGENTS.md

## Commands
- `bun dev` - dev server
- `bun build` - production build  
- `bun check` - lint + typecheck
- `bun lint` - ESLint
- `bun typecheck` - TypeScript
- `bun format:write` - Prettier
- No test runner configured

## Style
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- Import alias: `~/*` → `src/*`
- Use `~` prefix for all imports
- Follow existing component patterns
- No semicolons, single quotes
- 2 space indentation
- Use `cn()` utility for className merging
- Error handling: try/catch with console.error
- Naming: camelCase for vars, PascalCase for components