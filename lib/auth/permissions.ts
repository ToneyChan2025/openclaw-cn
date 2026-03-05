export type UserRole = 'admin' | 'editor' | 'student' | 'guest'

const roleRank: Record<UserRole, number> = {
  guest: 0,
  student: 1,
  editor: 2,
  admin: 3,
}

export function hasAccess(role: UserRole, minimumRole: UserRole) {
  return roleRank[role] >= roleRank[minimumRole]
}
