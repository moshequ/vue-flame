/// <reference lib="webworker" />

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Import and configure the Firebase SDK
// import { initializeApp } from 'firebase/app'
// import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'

importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js')

// import type { MessagePayload } from 'firebase/messaging/sw'
// import { precacheAndRoute } from 'workbox-precaching'

// Import Cache Names and ClientClaim module for providing the cache name and taking control of all pages immediately
// import { clientsClaim } from 'workbox-core'

// Give TypeScript the correct global.
interface MyServiceWorkerGlobalScope extends ServiceWorkerGlobalScope {
  __WB_MANIFEST: any
}

declare let self: MyServiceWorkerGlobalScope

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

// Initialize Firebase and get the messaging module
const firebaseApp = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging(firebaseApp)

// self.addEventListener('install', (event: ExtendableEvent) => {
//   console.log('install a')
// })
//
// self.addEventListener('activate', (event: ExtendableEvent) => {
//   console.log('activate a')
// })
//
// self.addEventListener('fetch', (event: ExtendableEvent) => {
//   console.log('fetch a', event)
// })

self.addEventListener('push', function (event) {
  if (event.data.text().includes(firebaseConfig.messagingSenderId)) return

  if (event.data) {
    console.log('[firebase-messaging-sw.js] Push event but not from firebase!! ', event.data.text())
  } else {
    console.log('[firebase-messaging-sw.js] Push event but not from firebase and with no data')
  }
})
// if (!('PushManager' in window)) {
//   throw new Error('No Push API Support!')
// }
// Handle Background Firebase Messages that come in while the app is closed
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)

  const { notification } = payload || {}
  const {
    title,
    body,
    icon,
    image,
    badge,
    vibrate,
    sound,
    dir,
    tag,
    data,
    requireInteraction,
    renotify,
    silent,
    actions,
    timestamp,
    ...rest
  } = notification || {}
  const options: NotificationOptions = {}

  // Visual Options
  if (body) options.body = body // '<String>'
  if (icon) options.icon = icon // '<URL String>'
  if (image) options.image = image // '<URL String>'
  if (badge) options.badge = badge // '<URL String>'
  if (vibrate) options.vibrate = vibrate // '<Array of Integers>'
  if (sound) options.sound = sound // '<URL String>'
  if (dir) options.dir = dir // "<String of 'auto' | 'ltr' | 'rtl'>"

  // Behavioural Options
  if (tag) options.tag = tag // '<String>'
  if (data) options.data = data // '<Anything>'
  if (requireInteraction) options.requireInteraction = requireInteraction // '<boolean>'
  if (renotify) options.renotify = renotify // '<Boolean>'
  if (silent) options.silent = silent // '<Boolean>'

  // Both Visual & Behavioural Options
  if (actions) options.actions = actions // '<Array of Strings>'

  // Information Option. No visual affect.
  if (timestamp) options.timestamp = timestamp // '<Long>'

  Object.assign(options, rest) // 'Visual Options',

  return self.registration
    .showNotification(title, options)
    .then((res) => console.log('[firebase-messaging-sw.js] sent!', res))
    .catch((err) => console.error('[firebase-messaging-sw.js] err sent:', err, self.__WB_MANIFEST))
})

// If we don't include a point to inject the manifest the plugin will fail.
// Using just a variable will not work because it is tree-shaked, we need to make it part of a side effect to prevent it from being removed
// self.__WB_MANIFEST
// precacheAndRoute(self.__WB_MANIFEST)

// this is necessary, since the new service worker will keep on skipWaiting state
// and then, caches will not be cleared since it is not activated
// self.skipWaiting()
// clientsClaim()
