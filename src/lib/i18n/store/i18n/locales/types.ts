import { en } from 'vuetify/locale'

import { ELocales } from '@/lib/i18n/types'

export interface IMessages {
  $vuetify: typeof en
  message: {
    requiredField: string
  }
}

export type TMessagesByLocal = { [local in ELocales]: IMessages }
