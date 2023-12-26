import { serverTimestamp } from 'firebase/firestore'
import { FieldValue } from '@firebase/firestore'

export function getTimestamps(payload?: any) {
  const ts = {
    updatedAt: serverTimestamp()
  } as { createdAt?: FieldValue; updatedAt: FieldValue }

  if (!payload?.createdAt) {
    ts.createdAt = serverTimestamp()
  }

  return ts
}
