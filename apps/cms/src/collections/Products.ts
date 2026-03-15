import type { CollectionConfig } from 'payload'

import { isAdminOrEditor } from '@/access/is-admin-or-editor'
import { isPublicOrStaff } from '@/access/is-public-or-staff'
import { formatSlug } from '@/hooks/format-slug'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'price', 'updatedAt'],
  },
  access: {
    create: isAdminOrEditor,
    delete: isAdminOrEditor,
    read: isPublicOrStaff,
    update: isAdminOrEditor,
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'text',
      required: true,
    },
  ],
}
