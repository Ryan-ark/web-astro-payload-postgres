import type { AccessArgs } from 'payload'

type UserWithRole = {
  role?: 'admin' | 'editor'
}

export const isAdmin = ({ req }: AccessArgs): boolean => {
  const user = req.user as UserWithRole | null

  return user?.role === 'admin'
}
