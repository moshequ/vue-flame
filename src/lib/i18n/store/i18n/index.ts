import type { StoreDefinition } from 'pinia'
import { defineStore } from 'pinia'
import { resetError } from './utils/resetError'
import type { Actions, IState, Getters } from './types'
import { loadGlobalMessages } from '@/lib/i18n/store/i18n/utils/loadGlobalMessages'
import { setI18nLanguage } from '@/lib/i18n/store/i18n/utils/setGlobalMessages'
import { options, globals } from '@/lib/i18n'
import type { TMessagesByLocal } from '@/lib/i18n/store/i18n/locales/types'
const storeName = 'i18n'

const useStore: StoreDefinition<typeof storeName, IState, Getters, Actions> = defineStore(
  storeName,
  {
    state() {
      return {
        loading: true,
        locale: options.locale,
        fallbackLocale: options.fallbackLocale,
        errorCode: '',
        errorMsg: ''
      } as IState
    },
    getters: {
      locales: () => {
        const initVal = {} as TMessagesByLocal
        return (
          globals.i18n?.global.availableLocales.reduce(
            (acc, locale) => ({ ...acc, [locale]: true }),
            initVal
          ) || initVal
        )
      }
    },
    actions: {
      async switchLocale(locale) {
        const store = useStore()
        store.loading = true
        store.locale = locale
        resetError()

        try {
          if (!this.locales[locale]) {
            await loadGlobalMessages(locale)
          }

          setI18nLanguage(locale)
        } catch (error: unknown) {
          resetError(error)
          console.error(error)
        } finally {
          store.loading = false
        }
      }
    }
  }
)

export const useI18nStore = useStore
