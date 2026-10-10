<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Architecture & Folder Structure Guidelines

Keep the architecture as simple and clean as possible. Follow this structure when adding new code:

```text
src/
├── app/                  # Next.js App Router (pages, layouts, route handlers)
├── components/
│   ├── ui/               # shadcn UI primitives (button, input, dialog, etc.) - keep as-is
│   └── shared/           # Reusable shared components across features (headers, footers, loaders, etc.)
├── features/             # Feature-driven modules (domain-specific code)
│   └── [feature-name]/   # E.g., auth, profile, dashboard, projects, etc.
│       ├── components/   # Components specific only to this feature
│       ├── actions/      # Server actions for this feature
│       ├── services/     # Business logic, API calls, or database operations
│       └── types/        # Feature-specific TypeScript interfaces & types (optional/as needed)
└── lib/                  # Shared utilities, configs, third-party clients (e.g. utils.ts, db.ts)
```

## Conventions

1. **Reusable UI vs Shared Components**:
   - `src/components/ui/`: Base design system / shadcn UI components (buttons, inputs, cards).
   - `src/components/shared/`: Reusable application-level components used across multiple pages/features (e.g., `Navbar`, `Footer`, `ConfirmDialog`).

2. **Feature-Based Organization (`src/features/*`)**:
   - Everything that is not globally reusable should belong to a feature module (e.g., `auth`, `user`, `billing`).
   - Each feature encapsulates its own:
     - `components/`: UI components exclusive to this feature (e.g., `LoginForm`, `SignupCard`).
     - `actions/`: Server actions (`"use server"`) specific to this feature.
     - `services/`: Business logic, queries, external integrations, or API service helpers.
   - Keep features lean: only create subdirectories (`components`, `actions`, `services`) when actually needed.
