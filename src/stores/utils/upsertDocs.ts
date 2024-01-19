import { doc, collection, getDocs, writeBatch, Timestamp } from 'firebase/firestore'
import { db } from '@/plugins/firebase'
import { processArrayInBatches } from '@/stores/utils/processArrayInBatches'
import { getTimestamps } from '@/stores/utils/getTimestamps'

interface INewDoc {
  id?: string
  [key: string]: any
}

type TDoc<T extends any> = T & {
  id: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export async function fetchDocs<T>(storeName: string) {
  const items: TDoc<T>[] = []

  const querySnapshot = await getDocs(collection(db, storeName))

  querySnapshot.forEach((doc) => {
    items.push({ ...(doc.data() as TDoc<T>), id: doc.id })
  })

  return items
}

async function processUpsertDocs<T extends INewDoc>(storeName: string, payloads: INewDoc[]) {
  const batch = writeBatch(db)

  const docs = payloads.map((item) => {
    const { id, ...payload } = item
    const ts = getTimestamps(item)

    // Get a new write batch
    const key = id || doc(collection(db, storeName)).id
    batch.set(doc(db, storeName, key), { ...payload, ...ts })

    return {
      id: key,
      ...payload,
      updatedAt: payload.updatedAt || Timestamp.fromDate(new Date()),
      createdAt: payload.createdAt || Timestamp.fromDate(new Date())
    } as TDoc<T>
  })

  // Commit the batch
  await batch.commit()

  return docs
}

async function processRemoveDocs<T>(storeName: string, payloads: TDoc<T>[]) {
  const batch = writeBatch(db)

  const docs = payloads.map((payload) => {
    batch.delete(doc(db, storeName, payload.id))
    return { ...payload } as TDoc<T>
  })

  // Commit the batch
  await batch.commit()

  return docs
}

export async function upsertDocs<T extends INewDoc>(storeName: string, payloads: INewDoc[]) {
  const res = await processArrayInBatches<INewDoc>([storeName], payloads, 500, processUpsertDocs)
  return res as TDoc<T>[]
}

export async function removeDocs<T>(storeName: string, payloads: TDoc<T>[]) {
  const res = await processArrayInBatches<TDoc<T>>([storeName], payloads, 500, processRemoveDocs)
  return res as TDoc<T>[]
}
