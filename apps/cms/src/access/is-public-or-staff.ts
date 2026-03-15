import type { Access } from 'payload'

type UserWithRole = {
  role?: 'admin' | 'editor'
}

export const isPublicOrStaff: Access = ({ req }) => {
  const user = req.user as UserWithRole | null

  if (user?.role === 'admin' || user?.role === 'editor') {
    return true
  }

  return {
    status: {
      equals: 'published',
    },
  }
}
