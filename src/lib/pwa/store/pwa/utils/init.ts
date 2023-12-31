import { usePwaStore } from '../../../'
import type { BeforeInstallPromptEvent } from '@/lib/pwa/store/pwa/types'

function onBeforeInstallPrompt(event: Event) {
  event.preventDefault()
  const pwaStore = usePwaStore()
  pwaStore.installPromptEvent = event as BeforeInstallPromptEvent
  pwaStore.appInstalled = false
}

function onAppInstalled() {
  const pwaStore = usePwaStore()
  pwaStore.appInstalled = true
  // TODO: watch it, if changes to true, save user field hasInstalledPwaBefore to true
}

function onStandaloneChanged(event: MediaQueryListEvent) {
  const pwaStore = usePwaStore()
  pwaStore.standaloneMediaQuery = event.matches
}

function onFullscreenChanged(event: MediaQueryListEvent) {
  const pwaStore = usePwaStore()
  pwaStore.fullscreenMediaQuery = event.matches
}

//check if browser version supports the api
// if ('getInstalledRelatedApps' in window.navigator) {
//   const relatedApps = await navigator.getInstalledRelatedApps()
//   console.log({ relatedApps })
//   relatedApps.forEach((app) => {
//     //if your PWA exists in the array it is installed
//     console.log(app.platform, app.url)
//   })
// }

export default (function init() {
  return () => {
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)
    window.matchMedia('(display-mode: fullscreen)').addEventListener('change', onFullscreenChanged)
    window.matchMedia('(display-mode: standalone)').addEventListener('change', onStandaloneChanged)

    const pwaStore = usePwaStore()
    pwaStore.fullscreenMediaQuery = window.matchMedia('(display-mode: fullscreen)').matches
    pwaStore.standaloneMediaQuery = window.matchMedia('(display-mode: standalone)').matches
    pwaStore.standaloneQueryString =
      new URL(document.location.href).searchParams.get('mode') === 'standalone'
  }
})()
