import type { IOptionsDefaults } from '../types'
import type { I18n } from 'vue-i18n'
import type { App } from 'vue'

export const globals: { i18n?: I18n; app?: App } = {}

export const localeKey = 'locale'

export const options: IOptionsDefaults = {
  locale: '',
  fallbackLocale: 'en'
}
