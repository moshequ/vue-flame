import type { Locale } from '@intlify/core-base'
import type { FallbackLocale } from 'vue-i18n'

export enum ELocales {
  en = 'en',
  he = 'he'
}

export interface IOptionsDefaults {
  locale: Locale
  fallbackLocale: FallbackLocale
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type IOptions = DeepPartial<IOptionsDefaults>
