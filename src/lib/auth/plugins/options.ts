import type { IOptionsDefaults } from '../types'
import { EProvider } from '../types'
import type { App } from 'vue'

export const globals: { app?: App } = {}

export const options: IOptionsDefaults = {
  firebaseAuth: null,
  guestsRootPath: '/login',
  usersRootPath: '/',
  MFA: false, // TODO: implement MFA
  providers: {
    [EProvider.FACEBOOK]: false,
    [EProvider.GITHUB]: false, // TODO: implement GitHub
    [EProvider.GOOGLE]: true,
    [EProvider.TWITTER]: false, // TODO: implement Twitter
    [EProvider.APPLE]: false, // TODO: implement Apple
    [EProvider.MICROSOFT]: false, // TODO: implement Microsoft
    [EProvider.YAHOO]: false, // TODO: implement Yahoo
    [EProvider.PHONE]: false, // TODO: implement Phone
    [EProvider.ANONYMOUS]: false, // TODO: implement Anonymous
    [EProvider.EMAIL_LINK]: false, // TODO: implement Email Link
    [EProvider.EMAIL_PASSWORD]: true
  }
}
