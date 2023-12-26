<template>
  <v-btn v-if="installButton.show" @click="installApp">Install App</v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const installButton = { show: false }
let deferredPrompt: any

const onBeforeInstallPrompt = (event: Event) => {
  event.preventDefault()
  deferredPrompt = event
  installButton.show = true
}

window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)

export default defineComponent({
  name: 'PwaInstallButton',
  data: () => ({
    installButton
  }),
  beforeUnmount() {
    window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  },
  methods: {
    installApp() {
      if (deferredPrompt) {
        deferredPrompt.prompt() // Adjust the type as per your requirement
        deferredPrompt.userChoice.then((choiceResult: any) => {
          // Adjust the type as per your requirement
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
          } else {
            console.log('User dismissed the install prompt')
          }

          deferredPrompt = null
          installButton.show = false
        })
      }

      this.installButton.show = false
    }
  }
})
</script>
