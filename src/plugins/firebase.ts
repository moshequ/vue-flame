import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
import { getMessaging, onMessage } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMNET_ID
}

// if (location?.hostname === 'localhost') {
//   firebaseConfig.authDomain = 'demo-' + firebaseConfig.authDomain
//   firebaseConfig.projectId = 'demo-' + firebaseConfig.projectId
// }

export const firebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebaseApp)
export const storage = getStorage(firebaseApp)
export const db = getFirestore(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
export const messaging = getMessaging(firebaseApp)

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload)
  // ...
})

if (location?.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(firebaseAuth, 'http://localhost:9099')
  connectStorageEmulator(storage, '127.0.0.1', 9199)
  // import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
  // connectFunctionsEmulator(getFunctions(firebaseApp), "127.0.0.1", 5001);
}
