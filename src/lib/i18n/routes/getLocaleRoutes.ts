import { RouterView } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const getLocaleRoutes = (
  children: Readonly<RouteRecordRaw[]>
): Readonly<RouteRecordRaw[]> => {
  const localePath = '/:locale'
  return [
    // {
    //   path: '',
    //   redirect: localePath
    // },
    {
      path: localePath,
      component: RouterView,
      children: children.map((route) => {
        return {
          ...route,
          path: localePath + route.path
        }
      })
    }
  ]
}
