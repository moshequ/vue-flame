import type { RouteRecordRaw } from 'vue-router'

export function getRoutesDictionary(
  routes: readonly RouteRecordRaw[],
  acc: Record<string, RouteRecordRaw>
) {
  return routes.reduce((acc, route) => {
    if (route.name) {
      acc[route.name as string] = route
    }

    if (route.children) {
      getRoutesDictionary(route.children, acc)
    }

    return acc
  }, acc)
}
