import type { App, Plugin } from 'vue'
import { reactive } from 'vue'
import { routes } from './router/routes'
import { globals, options } from './plugins/options'
import { useAuthStore } from './store/auth'
import handleAuthStateChanged from './store/auth/utils/init'

function createAuth(overwrites: any): Plugin {
  Object.assign(options, overwrites)

  return {
    install(app: App) {
      globals.app = app

      handleAuthStateChanged()

      app.mixin({
        computed: {
          // TODO: add ts definition
          $auth() {
            return reactive({
              options
            })
          }
        }
      })
    }
  }
}

export { globals, routes, options, useAuthStore, createAuth }
