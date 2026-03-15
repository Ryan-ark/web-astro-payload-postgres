import type { ProductDetail, ProductSummary } from '@acme/shared/product/product.types'

import type { z } from 'zod'

import type { productDocumentSchema } from '@/features/products/validators/product-response.schema'

type ProductDocument = z.infer<typeof productDocumentSchema>

const getCategory = (value: ProductDocument['category']) => {
  if (typeof value === 'string') {
    return {
      name: 'Uncategorized',
      slug: 'uncategorized',
    }
  }

  return value
}

export const mapProductSummary = (product: ProductDocument): ProductSummary => {
  const category = getCategory(product.category)

  return {
    id: String(product.id),
    title: product.title,
    slug: product.slug,
    summary: product.summary,
    price: product.price,
    imageUrl: product.imageUrl,
    categoryName: category.name,
    categorySlug: category.slug,
  }
}

export const mapProductDetail = (product: ProductDocument): ProductDetail => ({
  ...mapProductSummary(product),
  description: product.description,
})
