import { RouterView } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const getLocaleRoutes = (children: RouteRecordRaw[]): RouteRecordRaw[] => {
  const localePath = '/:locale'
  return [
    {
      path: '',
      component: RouterView
    },
    {
      path: localePath,
      component: RouterView,
      children: children.map((route) => {
        return {
          ...route,
          path: localePath + (route.path || '')
        }
      })
    }
  ]
}
