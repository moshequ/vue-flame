<template>
  <AppBar />
  <v-main>
    <v-container>
      <PwaInstallButton />
      <PushNotifyButton />
      <LocaleSwitcher />
      <LogoutButton />

      <h1>{{ t('welcome') }}</h1>
      <h2>{{ t('comingSoon') }}</h2>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import LocaleSwitcher from '@/lib/i18n/components/LocaleSwitcher.vue'
import PwaInstallButton from '@/components/PwaInstallButton.vue'
import LogoutButton from '@/components/LogoutButton.vue'
import { useI18n } from 'vue-i18n'
import PushNotifyButton from '@/components/PushNotifyButton.vue'
const { t } = useI18n()

import AppBar from '@/components/AppBar.vue'

</script>

<i18n>
{
  "en": {
    "welcome": "Welcome to Getters",
    "comingSoon": "Coming Soon"
  },
  "he": {
    "welcome": "ברוכים הבאים לגטרס.",
    "comingSoon": "בקרוב יהיה זמין"
  }
}
</i18n>
