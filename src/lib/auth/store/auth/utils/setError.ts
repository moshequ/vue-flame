import { FirebaseError } from '@firebase/util'
import { useAuthStore } from '../'

export function setError(error?: FirebaseError) {
  const store = useAuthStore()
  store.errorCode = error?.code || ''
  store.errorMsg = error?.message || ''
}
