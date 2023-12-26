import type { Locale } from '@intlify/core-base'
import type { FallbackLocale } from 'vue-i18n'

import { ELocales } from '@/lib/i18n/types'

export interface IState {
  loading: boolean
  locale: Locale
  fallbackLocale: FallbackLocale
  errorCode: string
  errorMsg: string
}

export interface Getters {
  locales: (state: IState) => Record<Locale, boolean>
}

export interface Actions {
  switchLocale(locale: ELocales): Promise<void>
}
