import { doc, collection, setDoc, addDoc, deleteDoc, getDocs, Timestamp } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

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

export async function upsertDoc<T extends INewDoc>(storeName: string, { id, ...payload }: INewDoc) {
  if (id) {
    await setDoc(doc(db, storeName, id), payload)
  } else {
    const docRef = await addDoc(collection(db, storeName), payload)
    id = docRef.id
  }

  return {
    id,
    ...payload,
    updatedAt: payload.updatedAt?.seconds ? payload.updatedAt : Timestamp.fromDate(new Date()),
    createdAt: payload.createdAt?.seconds ? payload.createdAt : Timestamp.fromDate(new Date())
  } as TDoc<T>
}

export async function removeDoc<T>(storeName: string, payload: TDoc<T>) {
  await deleteDoc(doc(db, storeName, payload.id))

  return {
    ...payload
  } as TDoc<T>
}
