import { cmsFetch } from '@/lib/http/cms-client'

import { mapCategoryDocument } from '@/features/categories/mappers/category.mapper'
import { categoryListResponseSchema } from '@/features/categories/validators/category-response.schema'

export async function getCategories() {
  const response = await cmsFetch('/api/categories', {
    depth: 0,
    limit: 100,
    sort: 'name',
  })

  return categoryListResponseSchema.parse(response).docs.map(mapCategoryDocument)
}

export async function getCategoryBySlug(slug: string) {
  const response = await cmsFetch('/api/categories', {
    limit: 1,
    where: JSON.stringify({
      slug: {
        equals: slug,
      },
    }),
  })

  const parsed = categoryListResponseSchema.parse(response)
  const category = parsed.docs[0]

  return category ? mapCategoryDocument(category) : null
}
