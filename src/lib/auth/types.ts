import type { Auth } from '@firebase/auth'

export enum EProtection {
  USERS_ONLY = 'USERS_ONLY',
  ADMIN_ONLY = 'ADMIN_ONLY',
  GUESTS_ONLY = 'GUESTS_ONLY'
}
export enum EProvider {
  FACEBOOK = 'FACEBOOK',
  GITHUB = 'GITHUB',
  GOOGLE = 'GOOGLE',
  TWITTER = 'TWITTER',
  APPLE = 'APPLE',
  MICROSOFT = 'MICROSOFT',
  YAHOO = 'YAHOO',
  PHONE = 'PHONE',
  ANONYMOUS = 'ANONYMOUS',
  EMAIL_PASSWORD = 'EMAIL_PASSWORD',
  EMAIL_LINK = 'EMAIL_LINK'
}

export interface IOptionsDefaults {
  firebaseAuth: Auth | null
  guestsRootPath: string
  usersRootPath: string
  MFA: boolean
  providers: {
    [provider in EProvider]: boolean
  }
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type IOptions = DeepPartial<IOptionsDefaults>
