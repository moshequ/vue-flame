import { FirebaseError } from '@firebase/util'
import { useAuthStore } from '../'

export function setError(error?: FirebaseError) {
  const authStore = useAuthStore()
  authStore.errorCode = error?.code || ''
  authStore.errorMsg = error?.message || ''
}
