import { options } from '../../../'
import { FirebaseError } from '@firebase/util'

export function getAuthOrThrow() {
  if (!options.firebaseAuth) {
    throw new FirebaseError('missing-firebase-auth', 'Missing firebaseAuth')
  }

  return options.firebaseAuth
}
