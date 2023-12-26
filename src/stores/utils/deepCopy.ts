import { collection, doc, Timestamp } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const deepCopy = <T>(data: T): T => {
  const d = data as any
  if (d === null || typeof d !== 'object' || 'isActiveClone' in d) return data as T

  let temp: T

  if (d instanceof Date) return new Date(d) as T
  else if (d instanceof Timestamp) return Timestamp.fromMillis(d.toMillis()) as T
  else if (d.firestore && d.path && d.type === 'document') return doc(db, d.path) as T
  else if (d.firestore && d.path && d.type === 'collection') return collection(db, d.path) as T
  else temp = (Array.isArray(d) ? [] : {}) as T

  for (const key in d) {
    if (Object.prototype.hasOwnProperty.call(d, key)) {
      d['isActiveClone'] = null
      ;(temp as any)[key] = deepCopy(d[key]) as T
      delete d['isActiveClone']
    }
  }
  return temp as T
}
