export type ProductStatus = 'draft' | 'published'

export interface ProductSummary {
  id: string
  title: string
  slug: string
  summary: string
  price: number
  imageUrl: string
  categoryName: string
  categorySlug: string
}

export interface ProductDetail extends ProductSummary {
  description: string
}
