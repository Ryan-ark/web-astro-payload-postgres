import type { AccessArgs } from 'payload'

type UserWithRole = {
  role?: 'admin' | 'editor'
}

export const isAdminOrEditor = ({ req }: AccessArgs): boolean => {
  const user = req.user as UserWithRole | null

  return user?.role === 'admin' || user?.role === 'editor'
}
