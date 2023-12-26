import { FirebaseError } from '@firebase/util'
import { useGroupStore } from '../'

export function setError(error?: FirebaseError) {
  const authStore = useGroupStore()
  authStore.errorCode = error?.code || ''
  authStore.errorMsg = error?.message || ''
}
