import { z } from 'zod'

const publicEnvSchema = z.object({
  PUBLIC_CMS_URL: z.url(),
  PUBLIC_SITE_URL: z.url(),
})

export const publicEnv = publicEnvSchema.parse({
  PUBLIC_CMS_URL: import.meta.env.PUBLIC_CMS_URL,
  PUBLIC_SITE_URL: import.meta.env.PUBLIC_SITE_URL,
})
