import type { User } from '@firebase/auth'
import { EProvider } from '../../types'

export type TAuth = User | null | undefined

export interface IState {
  loading: boolean
  auth?: TAuth
  errorCode: string
  errorMsg: string
}

export interface Getters {
  isAuthenticated: (state: IState) => Promise<boolean>
  isAdmin: (state: IState) => Promise<boolean>
}

export type TPayload = Partial<{ email: string; password: string }>

export interface Actions {
  signIn(provider: EProvider, payload?: TPayload): Promise<void>

  signOut(): Promise<void>
}
