import { EProtection } from '../../../types'
import { options, useAuthStore } from '../../../'

export async function getLocation(protection: EProtection) {
  const authStore = useAuthStore()

  if (protection === EProtection.ADMIN_ONLY && !authStore.isAdmin) {
    return { path: `${options.usersRootPath}` }
  }

  if (protection === EProtection.USERS_ONLY && !authStore.auth) {
    return { path: `${options.guestsRootPath}` }
  }

  if (protection === EProtection.GUESTS_ONLY && authStore.auth) {
    return { path: `${options.usersRootPath}` }
  }
}
