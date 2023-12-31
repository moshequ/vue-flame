import HomePage from '@/pages/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'
import { EProtection } from '@/lib/auth/types'
import { routes as authRoutes, options } from '@/lib/auth'

export const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: options.usersRootPath,
    name: 'home',
    component: HomePage,
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]
