<template>
  <v-btn v-if="installButton.show" @click="installApp">{{ t('installText') }}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

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
  setup() {
    const { t } = useI18n()
    return { t }
  },
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
            this.installButton.show = false
            installButton.show = false
            console.log('User accepted the install prompt')
          } else {
            console.log('User dismissed the install prompt')
          }

          deferredPrompt = null
        })
      }
    }
  }
})
</script>

<i18n>
{
  "en": {
    "installText": "Install App"
  },
  "he": {
    "installText": "התקנה"
  }
}
</i18n>
