# Astro + Payload + PostgreSQL Monorepo

Sample CRUD application built as a monorepo with:

- `apps/web`: Astro + Tailwind frontend
- `apps/cms`: Payload CMS + PostgreSQL backend
- `packages/config`: shared TypeScript configuration
- `packages/shared`: small shared contracts and constants

## Architecture

- Public pages are rendered by Astro.
- Content is authored in Payload CMS.
- Astro reads published content from Payload's REST API.
- PostgreSQL is used locally and in production.
- Production deploys as two Vercel projects backed by Neon.

## Local setup

1. Copy `.env.example` to `.env`.
2. Start Docker Desktop so the local PostgreSQL container can run.
3. Install dependencies with `pnpm install`.
4. Start PostgreSQL with `pnpm db:up`.
5. In `apps/cms`, run `pnpm migrate`.
6. In `apps/cms`, run `pnpm seed`.
7. In one terminal, run `pnpm dev` inside `apps/cms`.
8. In another terminal, run `pnpm dev` inside `apps/web`.

If `pnpm migrate` fails with local Postgres authentication errors on first setup:

1. Run `pnpm db:reset` from the repo root.
2. Run `pnpm db:up` from the repo root.
3. Retry `pnpm migrate` in `apps/cms`.

Local URLs:

- Frontend: `http://localhost:4321`
- CMS: `http://localhost:3001`
- CMS admin: `http://localhost:3001/admin`
- Docker Postgres for this project: `localhost:5433`

Use `127.0.0.1` for app-to-app local URLs in env vars:

- `CMS_BASE_URL=http://127.0.0.1:3001`
- `PUBLIC_CMS_URL=http://127.0.0.1:3001`

## Common commands

- Root: `pnpm db:up`
- Root: `pnpm db:down`
- `apps/cms`: `pnpm dev`
- `apps/cms`: `pnpm migrate`
- `apps/cms`: `pnpm seed`
- `apps/cms`: `pnpm build`
- `apps/web`: `pnpm dev`
- `apps/web`: `pnpm build`

## Production deployment

Deploy two separate Vercel projects from this repository:

### CMS project

- Root directory: `apps/cms`
- Build command: `pnpm vercel-build`
- Output: standard Next.js output
- Required env vars:
  - `DATABASE_URL`
  - `PAYLOAD_SECRET`
  - `CMS_BASE_URL`
  - `PUBLIC_SITE_URL`

### Web project

- Root directory: `apps/web`
- Build command: `pnpm vercel-build`
- Output: handled by Astro Vercel adapter
- Required env vars:
  - `PUBLIC_CMS_URL`
  - `PUBLIC_SITE_URL`

### Database

- Use Neon free tier for production PostgreSQL.
- Point `DATABASE_URL` to the Neon connection string in the CMS project.
