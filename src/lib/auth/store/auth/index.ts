import type { StoreDefinition } from 'pinia'
import { defineStore } from 'pinia'
import { signOut } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'
import { getAuthOrThrow } from './utils/getAuthOrThrow'
import { setError } from './utils/setError'
import type { Actions, IState, Getters } from './types'
import { getUserCredential } from './utils/getUserCredential'
const storeName = 'auth'

const useStore: StoreDefinition<typeof storeName, IState, Getters, Actions> = defineStore(
  storeName,
  {
    state() {
      return {
        loading: true,
        auth: undefined,
        isAdmin: undefined,
        errorCode: '',
        errorMsg: ''
      } as IState
    },
    getters: {
      isAuthenticated: (state: IState) => {
        return Boolean(state.auth)
      }
    },
    actions: {
      async signIn(provider, payload = {}) {
        const store = useStore()
        store.loading = true
        setError()

        try {
          await getUserCredential(provider, payload)
        } catch (error: unknown) {
          setError(error as FirebaseError)
          console.error(error)
        } finally {
          store.loading = false
        }
      },
      async signOut() {
        const store = useStore()
        store.loading = true
        setError()

        try {
          const firebaseAuth = getAuthOrThrow()
          await signOut(firebaseAuth)
        } catch (error: unknown) {
          setError(error as FirebaseError)
          console.error(error)
        } finally {
          store.loading = false
        }
      }
    }
  }
)

export const useAuthStore = useStore
