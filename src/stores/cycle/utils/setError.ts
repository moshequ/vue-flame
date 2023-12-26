import { FirebaseError } from '@firebase/util'
import { useCycleStore } from '../'

export function setError(error?: FirebaseError) {
  const authStore = useCycleStore()
  authStore.errorCode = error?.code || ''
  authStore.errorMsg = error?.message || ''
}
