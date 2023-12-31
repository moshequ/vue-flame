import { onAuthStateChanged } from 'firebase/auth'
import { globals, useAuthStore } from '../../../'
import { getAuthOrThrow } from './getAuthOrThrow'
import { EProtection } from '../../../types'
import { getLocation } from './getLocation'

const onAuthStateChangedPromise = () =>
  new Promise((resolve, reject) => {
    const firebaseAuth = getAuthOrThrow()
    const authStore = useAuthStore()

    onAuthStateChanged(
      firebaseAuth,
      async (auth) => {
        // TODO: reset state on logout and clear user cache (SW)
        const { $route, $router } = globals.app!.config.globalProperties
        const { meta } = $route
        const { protection } = meta as { protection: EProtection }
        const oldAuth = authStore.auth
        authStore.auth = auth
        authStore.isAdmin = (await auth?.getIdTokenResult())?.claims.role === 'admin'
        authStore.loading = false

        // this handles the sign in/sign out (not the first load)
        if (oldAuth !== auth && protection) {
          // TODO: add intended url

          const location = await getLocation(protection)
          if (location) {
            return $router.push(location)
          }
        }
        resolve(auth)
      },
      (err) => {
        reject(err)
      }
    )
  })

export default (function handleAuthStateChanged() {
  let called = false

  return () => {
    if (!called) {
      const router = globals.app!.config.globalProperties.$router
      const authStore = useAuthStore()

      router.beforeEach(async (to, from, next) => {
        const { protection } = to.meta as { protection: EProtection }

        if (authStore.auth === undefined) {
          // init first load
          await onAuthStateChangedPromise()
        }

        const location = await getLocation(protection)

        return location ? next(location) : next()
      })

      console.debug('[ useAuthStore: init() ]: Expected to be called once')
      called = true
    }
  }
})()
