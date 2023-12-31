import { FirebaseError } from '@firebase/util'
import { usePwaStore } from '../'

export function setError(error?: FirebaseError) {
  const authStore = usePwaStore()
  authStore.errorCode = error?.code || ''
  authStore.errorMsg = error?.message || ''
}
