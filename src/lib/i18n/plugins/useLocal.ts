import { useI18n } from 'vue-i18n'
import type { Locale } from '@intlify/core-base'
import { useI18nStore } from '@/lib/i18n/store/i18n'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'
import { options } from '@/lib/i18n'
import type { TMessagesByLocal } from '@/lib/i18n/store/i18n/locales/types'
import { ELocales } from '@/lib/i18n/types'

// on first entry pages (home/login) we need to load the user language (only single language)
// in a separate request/file
// todo: add the lang to the url
// todo: typescript to lang
// todo: autodetect lang from browser/os or from the last choice
// todo: save the lang in the user profile (firebase auth)
// todo: add the lang to the localstorage

type TLoadMessages = (locale: Locale) => Promise<{ default: {} }>

export function useLocal<T>(defaultLocale: T, loadMessages: TLoadMessages) {
  // example usage: const { t } = useLocal<IMessages>(en, (locale) => import(`./locales/lazy-${locale}.ts`))
  const I18nStore = useI18nStore()
  const { locale: localeStore } = storeToRefs(I18nStore)

  const i18nComposer = useI18n({
    useScope: 'local',
    locale: options.fallbackLocale as Locale,
    inheritLocale: false,
    messages: { [options.fallbackLocale as Locale]: defaultLocale as {} }
  })

  const { locale, setLocaleMessage, availableLocales } = i18nComposer

  const locales = computed(() => {
    const initVal = {} as TMessagesByLocal
    return (
      availableLocales.reduce((acc, locale) => ({ ...acc, [locale]: true }), initVal) || initVal
    )
  })

  const onChangeLocale = async (selectedLocale: ELocales) => {
    if (!locales.value[selectedLocale]) {
      const messages = await loadMessages(selectedLocale)
      setLocaleMessage(selectedLocale, messages.default)
    }

    locale.value = selectedLocale
  }

  watch(localeStore, (value) => onChangeLocale(value as ELocales), { immediate: true })

  return i18nComposer
}
