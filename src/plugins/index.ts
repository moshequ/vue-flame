/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import { pinia } from '@/plugins/pinia'
import i18n from '@/plugins/i18n'
import auth from '@/plugins/auth'
import { router } from '@/router'
import { vuetify } from '@/plugins/vuetify'
import type { App } from 'vue'
import { createDatepicker } from '@/plugins/datepicker'

export function registerPlugins(app: App) {
  app.config.globalProperties.$vuetify = vuetify as any
  app.use(router).use(vuetify).use(pinia).use(i18n).use(auth)

  // TODO: Remove once datepicker is available in vuetify 3
  createDatepicker(app)
}
