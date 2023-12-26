import { EProtection } from '../types'
import { options } from '@/lib/auth/plugins/options'

export const routes = [
  {
    path: options.guestsRootPath,
    name: 'login',
    meta: { protection: EProtection.GUESTS_ONLY },
    component: () => import('../pages/LoginPage.vue')
  }
]

export default routes
