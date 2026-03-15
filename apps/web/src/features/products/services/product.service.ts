import { cmsFetch } from '@/lib/http/cms-client'

import { getCategoryBySlug } from '@/features/categories/services/category.service'
import { mapProductDetail, mapProductSummary } from '@/features/products/mappers/product.mapper'
import {
  productDetailResponseSchema,
  productListResponseSchema,
} from '@/features/products/validators/product-response.schema'

export async function getPublishedProducts() {
  const response = await cmsFetch('/api/products', {
    depth: 1,
    limit: 24,
    sort: '-updatedAt',
    where: JSON.stringify({
      status: {
        equals: 'published',
      },
    }),
  })

  return productListResponseSchema.parse(response).docs.map(mapProductSummary)
}

export async function getPublishedProductBySlug(slug: string) {
  const response = await cmsFetch('/api/products', {
    depth: 1,
    limit: 1,
    where: JSON.stringify({
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    }),
  })

  const parsed = productDetailResponseSchema.safeParse(response)
  if (!parsed.success) {
    return null
  }

  return mapProductDetail(parsed.data.docs[0])
}

export async function getPublishedProductsByCategory(categorySlug: string) {
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return []
  }

  const response = await cmsFetch('/api/products', {
    depth: 1,
    limit: 24,
    sort: '-updatedAt',
    where: JSON.stringify({
      and: [
        {
          status: {
            equals: 'published',
          },
        },
        {
          category: {
            equals: category.id,
          },
        },
      ],
    }),
  })

  return productListResponseSchema.parse(response).docs.map(mapProductSummary)
}
