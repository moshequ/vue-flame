import HomePage from '@/pages/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'
import { EProtection } from '@/lib/auth/types'
import { routes as authRoutes, options } from '@/lib/auth'

export const routes: Readonly<RouteRecordRaw[]> = [
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
    path: '/group',
    name: 'create-group',
    component: () => import('@/pages/CreateGroupPage.vue'),
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/:groupId',
    name: 'groups',
    component: HomePage,
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/:groupId/group',
    name: 'group',
    component: () => import('@/pages/GroupDetailsPage.vue'),
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/:groupId/cycle',
    name: 'create-cycle',
    component: () => import('@/pages/CreateCyclePage.vue'),
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/:groupId/profile',
    name: 'current-profile',
    component: () => import('@/pages/ProfileDetailsPage.vue'),
    meta: { protection: EProtection.USERS_ONLY }
  },
  {
    path: '/:groupId/profile/:profileId',
    name: 'profile',
    component: () => import('@/pages/ProfileDetailsPage.vue'),
    meta: { protection: EProtection.ADMIN_ONLY }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]
