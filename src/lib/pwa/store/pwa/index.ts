import type { StoreDefinition } from 'pinia'
import { defineStore } from 'pinia'
// import { setError } from './utils/setError'
import type { Actions, IState, Getters } from './types'
const storeName = 'pwa'

const useStore: StoreDefinition<typeof storeName, IState, Getters, Actions> = defineStore(
  storeName,
  {
    state() {
      return {
        loading: true,
        installPromptEvent: undefined,
        choiceOutcome: undefined,
        appInstalled: true, // if the app is not install the beforeinstallprompt event will fire and set it to false
        standaloneQueryString: false,
        standaloneMediaQuery: false,
        fullscreenMediaQuery: false,
        errorCode: '',
        errorMsg: ''
      } as IState
    },
    getters: {},
    actions: {
      async installApp() {
        const store = useStore()
        if (store.installPromptEvent) {
          await store.installPromptEvent.prompt()
          // Adjust the type as per your requirement
          const userChoice = await store.installPromptEvent.userChoice

          // Adjust the type as per your requirement
          store.choiceOutcome = userChoice.outcome
          store.installPromptEvent = null
        }
      }
    }
  }
)

export const usePwaStore = useStore
