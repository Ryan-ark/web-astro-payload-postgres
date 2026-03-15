import { z } from 'zod'

const categorySchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  slug: z.string(),
})

export const productDocumentSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.url(),
  status: z.enum(['draft', 'published']),
  category: z.union([z.string(), categorySchema]),
})

export const productListResponseSchema = z.object({
  docs: z.array(productDocumentSchema),
})

export const productDetailResponseSchema = z.object({
  docs: z.array(productDocumentSchema).length(1),
})
