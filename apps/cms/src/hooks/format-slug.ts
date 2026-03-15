import type { FieldHook } from 'payload'

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const formatSlug =
  (fallbackField: string): FieldHook =>
  ({ data, value }) => {
    if (typeof value === 'string' && value.length > 0) {
      return slugify(value)
    }

    const fallbackValue = data?.[fallbackField]

    if (typeof fallbackValue === 'string' && fallbackValue.length > 0) {
      return slugify(fallbackValue)
    }

    return value
  }
