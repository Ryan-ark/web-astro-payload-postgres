import { z } from 'zod'

export const categoryDocumentSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable().optional(),
})

export const categoryListResponseSchema = z.object({
  docs: z.array(categoryDocumentSchema),
})
