import type { CollectionConfig } from 'payload'

import { isAdminOrEditor } from '@/access/is-admin-or-editor'
import { formatSlug } from '@/hooks/format-slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    create: isAdminOrEditor,
    delete: isAdminOrEditor,
    read: () => true,
    update: isAdminOrEditor,
  },
  timestamps: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
