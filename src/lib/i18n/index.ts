import { globals, options } from './plugins/options'
import type { TMessagesByLocal } from '@/lib/i18n/store/i18n/locales/types'
import defaultLocale from '@/lib/i18n/store/i18n/locales/en'
import { createI18n as createVueI18n } from 'vue-i18n'
import { getLocaleRoutes } from '@/lib/i18n/routes/getLocaleRoutes'
import { onBeforeEachRoute } from '@/lib/i18n/routes/onBeforeEachRoute'

const messages: Partial<TMessagesByLocal> = {
  [options.fallbackLocale as string]: defaultLocale
}

function createI18n(overwrites: any) {
  Object.assign(options, overwrites)

  globals.i18n = createVueI18n({
    legacy: false,
    // locale: options.locale,
    // fallbackLocale: options.fallbackLocale,
    messages: messages as {}
  })

  const { install } = globals.i18n
  globals.i18n.install = (app, ...rest) => {
    globals.app = app

    onBeforeEachRoute()

    return install(app, ...rest)
  }

  return globals.i18n
}

export { globals, options, createI18n, getLocaleRoutes }
