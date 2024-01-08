import { FirebaseError } from '@firebase/util'
import { usePwaStore } from '../'

export function setError(error?: FirebaseError) {
  const store = usePwaStore()
  store.errorCode = error?.code || ''
  store.errorMsg = error?.message || ''
}
