import { z } from 'zod';

const publicEnvSchema = z.object({
  PUBLIC_CMS_URL: z.url(),
  PUBLIC_SITE_URL: z.url()
});
const publicEnv = publicEnvSchema.parse({
  PUBLIC_CMS_URL: "http://127.0.0.1:3001",
  PUBLIC_SITE_URL: "http://localhost:4321"
});

const buildQueryString = (params) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== void 0) {
      searchParams.set(key, String(value));
    }
  }
  const query = searchParams.toString();
  return query ? `?${query}` : "";
};
async function cmsFetch(path, params = {}) {
  const response = await fetch(`${publicEnv.PUBLIC_CMS_URL}${path}${buildQueryString(params)}`, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`CMS request failed with status ${response.status}`);
  }
  return response.json();
}

const mapCategoryDocument = (category) => ({
  id: String(category.id),
  name: category.name,
  slug: category.slug,
  description: category.description ?? null
});

const categoryDocumentSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable().optional()
});
const categoryListResponseSchema = z.object({
  docs: z.array(categoryDocumentSchema)
});

async function getCategories() {
  const response = await cmsFetch("/api/categories", {
    depth: 0,
    limit: 100,
    sort: "name"
  });
  return categoryListResponseSchema.parse(response).docs.map(mapCategoryDocument);
}
async function getCategoryBySlug(slug) {
  const response = await cmsFetch("/api/categories", {
    limit: 1,
    where: JSON.stringify({
      slug: {
        equals: slug
      }
    })
  });
  const parsed = categoryListResponseSchema.parse(response);
  const category = parsed.docs[0];
  return category ? mapCategoryDocument(category) : null;
}

const getCategory = (value) => {
  if (typeof value === "string") {
    return {
      name: "Uncategorized",
      slug: "uncategorized"
    };
  }
  return value;
};
const mapProductSummary = (product) => {
  const category = getCategory(product.category);
  return {
    id: String(product.id),
    title: product.title,
    slug: product.slug,
    summary: product.summary,
    price: product.price,
    imageUrl: product.imageUrl,
    categoryName: category.name,
    categorySlug: category.slug
  };
};
const mapProductDetail = (product) => ({
  ...mapProductSummary(product),
  description: product.description
});

const categorySchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  slug: z.string()
});
const productDocumentSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.url(),
  status: z.enum(["draft", "published"]),
  category: z.union([z.string(), categorySchema])
});
const productListResponseSchema = z.object({
  docs: z.array(productDocumentSchema)
});
const productDetailResponseSchema = z.object({
  docs: z.array(productDocumentSchema).length(1)
});

async function getPublishedProducts() {
  const response = await cmsFetch("/api/products", {
    depth: 1,
    limit: 24,
    sort: "-updatedAt",
    where: JSON.stringify({
      status: {
        equals: "published"
      }
    })
  });
  return productListResponseSchema.parse(response).docs.map(mapProductSummary);
}
async function getPublishedProductBySlug(slug) {
  const response = await cmsFetch("/api/products", {
    depth: 1,
    limit: 1,
    where: JSON.stringify({
      and: [
        {
          slug: {
            equals: slug
          }
        },
        {
          status: {
            equals: "published"
          }
        }
      ]
    })
  });
  const parsed = productDetailResponseSchema.safeParse(response);
  if (!parsed.success) {
    return null;
  }
  return mapProductDetail(parsed.data.docs[0]);
}
async function getPublishedProductsByCategory(categorySlug) {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    return [];
  }
  const response = await cmsFetch("/api/products", {
    depth: 1,
    limit: 24,
    sort: "-updatedAt",
    where: JSON.stringify({
      and: [
        {
          status: {
            equals: "published"
          }
        },
        {
          category: {
            equals: category.id
          }
        }
      ]
    })
  });
  return productListResponseSchema.parse(response).docs.map(mapProductSummary);
}

export { getPublishedProductBySlug as a, getPublishedProducts as b, getCategories as c, getPublishedProductsByCategory as g };
