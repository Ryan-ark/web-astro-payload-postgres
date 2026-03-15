import type { CategorySummary } from '@acme/shared/category/category.types'

import type { z } from 'zod'

import type { categoryDocumentSchema } from '@/features/categories/validators/category-response.schema'

type CategoryDocument = z.infer<typeof categoryDocumentSchema>

export const mapCategoryDocument = (category: CategoryDocument): CategorySummary => ({
  id: String(category.id),
  name: category.name,
  slug: category.slug,
  description: category.description ?? null,
})
