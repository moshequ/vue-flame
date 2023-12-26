import { globals } from '@/lib/i18n'
import type { WritableComputedRef, Ref, ComputedRef } from 'vue'
import { localeKey } from '@/lib/i18n/plugins/options'
import type { LocaleMessages } from 'vuetify'
import i18n from '@/plugins/i18n'
import type { TMessagesByLocal } from '@/lib/i18n/store/i18n/locales/types'
import type { ELocales } from '@/lib/i18n/types'
export function setI18nLanguage(locale: ELocales) {
  if (globals.i18n) {
    if (globals.i18n.mode === 'legacy') {
      globals.i18n.global.locale = locale
    } else {
      ;(globals.i18n.global.locale as WritableComputedRef<ELocales>).value = locale
    }
  }

  ;(
    globals.app!.config.globalProperties.$vuetify.locale.current as unknown as Ref<ELocales>
  ).value = locale
  ;(globals.app!.config.globalProperties.$vuetify.locale.messages.value as LocaleMessages)[locale] =
    (i18n.global.messages as ComputedRef<TMessagesByLocal>).value[locale as ELocales].$vuetify

  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.documentElement.lang = locale
  localStorage.setItem(localeKey, locale)
  // document.querySelector('html')?.setAttribute('lang', locale)
}
