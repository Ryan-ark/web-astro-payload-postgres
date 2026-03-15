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

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Categories, Products],
  cors: [cmsEnv.CMS_BASE_URL, process.env.PUBLIC_SITE_URL ?? 'http://localhost:4321'],
  csrf: [cmsEnv.CMS_BASE_URL, process.env.PUBLIC_SITE_URL ?? 'http://localhost:4321'],
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
