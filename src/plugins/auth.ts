import { createAuth } from '@/lib/auth'
import type { IOptions } from '@/lib/auth/types'
import { firebaseAuth } from '@/plugins/firebase'

const options: IOptions = {
  firebaseAuth
}

export default createAuth(options)
