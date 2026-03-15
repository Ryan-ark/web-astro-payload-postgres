import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Categories } from '@/collections/Categories'
import { Products } from '@/collections/Products'
import { Users } from '@/collections/Users'
import { cmsEnv } from '@/lib/env'
import { migrations } from '@/migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const collectAllowedOrigins = (): string[] => {
  const origins = new Set<string>()
  const candidates = [
    cmsEnv.CMS_BASE_URL,
    process.env.PUBLIC_SITE_URL,
    process.env.PUBLIC_CMS_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_URL,
  ]

  for (const candidate of candidates) {
    if (!candidate) continue

    const normalized = candidate.startsWith('http') ? candidate : `https://${candidate}`

    try {
      origins.add(new URL(normalized).origin)
    } catch {
      // Ignore malformed env vars so Payload can still boot with the valid ones.
    }
  }

  origins.add('http://localhost:3001')
  origins.add('http://127.0.0.1:3001')
  origins.add('http://localhost:4321')
  origins.add('http://127.0.0.1:4321')

  return [...origins]
}

const allowedOrigins = collectAllowedOrigins()

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Categories, Products],
  cors: allowedOrigins,
  csrf: allowedOrigins,
  secret: cmsEnv.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    prodMigrations: migrations,
    pool: {
      connectionString: cmsEnv.DATABASE_URL,
    },
  }),
})
