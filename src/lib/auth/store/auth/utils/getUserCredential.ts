import { EProvider } from '../../../types'
import { getAuthOrThrow } from './getAuthOrThrow'
import { FirebaseError } from '@firebase/util'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth'
import type { TPayload } from '../types'
import { AuthErrorCodes } from '@firebase/auth'

export async function getUserCredential(provider: EProvider, payload: TPayload) {
  const { email, password } = payload

  const firebaseAuth = getAuthOrThrow()

  switch (provider) {
    case EProvider.FACEBOOK:
      return signInWithRedirect(firebaseAuth, new FacebookAuthProvider())
    case EProvider.GITHUB:
      break
    case EProvider.GOOGLE:
      return signInWithRedirect(firebaseAuth, new GoogleAuthProvider())
    case EProvider.TWITTER:
      break
    case EProvider.APPLE:
      break
    case EProvider.MICROSOFT:
      break
    case EProvider.YAHOO:
      break
    case EProvider.PHONE:
      break
    case EProvider.ANONYMOUS:
      break
    case EProvider.EMAIL_LINK:
      break
    case EProvider.EMAIL_PASSWORD:
      if (!email || !password) {
        throw new FirebaseError('missing-credentials', 'Missing credentials')
      }

      try {
        return await createUserWithEmailAndPassword(firebaseAuth, email, password)
      } catch (error: unknown) {
        const codes: string[] = [
          // TODO: add status for Enable create (sign-up) = off
          // AuthErrorCodes.OPERATION_NOT_ALLOWED,
          AuthErrorCodes.EMAIL_EXISTS
        ]
        const code = (error as FirebaseError)?.code

        if (codes.includes(code)) {
          return signInWithEmailAndPassword(firebaseAuth, email, password)
        }

        throw error
      }

    default:
      throw new FirebaseError('invalid-provider', 'Invalid provider')
  }
}
