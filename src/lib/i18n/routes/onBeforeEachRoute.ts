import { globals, options } from '@/lib/i18n'
import { ELocales } from '@/lib/i18n/types'
import { useI18nStore } from '@/lib/i18n/store/i18n'
import { localeKey } from '@/lib/i18n/plugins/options'

const getCountryOrLangCode = (locale?: ELocales | null) => {
  if (!locale) return null

  if (ELocales[locale]) {
    return locale
  }

  const lang = ELocales[locale.split('-')[0] as ELocales]
  return lang ? lang : null
}

export const getLocale = (toLocale?: ELocales | string | null) => {
  const guessLocale: ELocales =
    navigator.languages?.[0] ||
    navigator.language ||
    (navigator as any).userLanguage ||
    (navigator as any).browserLanguage ||
    (navigator as any).systemLanguage ||
    options.fallbackLocale

  const i18nStore = useI18nStore()

  return (
    getCountryOrLangCode(toLocale as ELocales) ||
    getCountryOrLangCode(i18nStore.locale as ELocales) ||
    getCountryOrLangCode(localStorage.getItem(localeKey) as ELocales) ||
    getCountryOrLangCode(guessLocale) ||
    getCountryOrLangCode(options.fallbackLocale as ELocales)
  )
}

const addOrUpdateLocale = (fullPath: string, code: ELocales) => {
  const segments = fullPath.split('/').filter(Boolean)
  const firstSegment = (segments[0] || '') as ELocales

  if (!getCountryOrLangCode(firstSegment)) {
    return '/' + [code, ...segments].join('/')
  }

  return '/' + [code, ...segments.slice(1)].join('/')
}

export const onBeforeEachRoute = () => {
  const router = globals.app!.config.globalProperties.$router
  const i18nStore = useI18nStore()

  router.beforeEach(async (to, from, next) => {
    const toLocale = to.params.locale as ELocales
    const fromLocale = from.params.locale as ELocales

    const code = getLocale(toLocale)

    if (!code) {
      console.error('No lang code found', to)
      return next()
    }

    if (fromLocale !== code) {
      // consider not waiting for this, it will be done in the background and First Contentful Paint will be faster
      // but the user will see the page in the wrong language for a moment
      await i18nStore.switchLocale(code)
    }

    const fullPath = addOrUpdateLocale(to.fullPath, code)

    return fullPath === to.fullPath ? next() : next({ path: fullPath })
  })
}
