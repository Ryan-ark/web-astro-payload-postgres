import config from '@payload-config'
import { getPayload } from 'payload'

const adminEmail = 'admin@example.com'
const adminPassword = 'changeme123'

async function seed() {
  const payload = await getPayload({
    config,
  })

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
      },
    })
  }

  const existingCategory = await payload.find({
    collection: 'categories',
    limit: 1,
    where: {
      slug: {
        equals: 'productivity',
      },
    },
  })

  const category =
    existingCategory.docs[0] ??
    (await payload.create({
      collection: 'categories',
      data: {
        name: 'Productivity',
        slug: 'productivity',
        description: 'Tools and templates for faster teams.',
      },
    }))

  const existingProduct = await payload.find({
    collection: 'products',
    limit: 1,
    where: {
      slug: {
        equals: 'team-knowledge-hub',
      },
    },
  })

  if (existingProduct.docs.length === 0) {
    await payload.create({
      collection: 'products',
      data: {
        title: 'Team Knowledge Hub',
        slug: 'team-knowledge-hub',
        summary: 'A sample product for demonstrating public Astro pages and Payload CRUD.',
        description:
          'This seeded record shows the expected shape for frontend rendering. Replace it with your real content from the Payload admin panel.',
        price: 49,
        status: 'published',
        category: category.id,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      },
    })
  }

  console.log('Seed complete')
  console.log(`Admin email: ${adminEmail}`)
  console.log(`Admin password: ${adminPassword}`)

  if (typeof payload.db.destroy === 'function') {
    await payload.db.destroy()
  }
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
