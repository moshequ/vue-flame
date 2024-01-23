import type { TLocaleString } from '@/stores/types'
import { ELocales } from '@/lib/i18n/types'

export const initLocaleFields = (): TLocaleString => {
  const locales: ELocales[] = Object.values(ELocales)
  return locales.reduce((acc, locale) => ({ ...acc, [locale]: '' }), {} as TLocaleString)
}
