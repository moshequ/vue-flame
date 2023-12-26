import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { getLocaleRoutes } from '@/lib/i18n'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: getLocaleRoutes(routes)
})
