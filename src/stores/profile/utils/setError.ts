import { FirebaseError } from '@firebase/util'
import { useProfileStore } from '../'

export function setError(error?: FirebaseError) {
  const store = useProfileStore()
  store.errorCode = error?.code || ''
  store.errorMsg = error?.message || ''
}
