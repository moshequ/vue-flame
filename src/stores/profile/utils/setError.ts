import { FirebaseError } from '@firebase/util'
import { useProfileStore } from '../'

export function setError(error?: FirebaseError) {
  const authStore = useProfileStore()
  authStore.errorCode = error?.code || ''
  authStore.errorMsg = error?.message || ''
}
