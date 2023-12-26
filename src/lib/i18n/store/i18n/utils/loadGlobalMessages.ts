import type { Locale } from '@intlify/core-base'
import { globals } from '@/lib/i18n'

export async function loadGlobalMessages(locale: Locale) {
  const messages = await import(`../locales/lazy-${locale}.ts`)
  globals.i18n?.global.setLocaleMessage(locale, messages.default)
}
