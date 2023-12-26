<template>
  <AppBar />
  <v-main>
    <v-container>
      <PwaInstallButton />
      <PushNotifyButton />
      <LocaleSwitcher />

      <h1>{{ t('welcome') }}</h1>
      <h2>{{ t('comingSoon') }}</h2>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import LocaleSwitcher from '@/lib/i18n/components/LocaleSwitcher.vue'
import PwaInstallButton from '@/components/PwaInstallButton.vue'
import { useI18n } from 'vue-i18n'
import PushNotifyButton from '@/components/PushNotifyButton.vue'
const { t } = useI18n()

import AppBar from '@/components/AppBar.vue'
import { useGroupStore } from '@/stores/group'
import { router } from '@/router'
const groupStore = useGroupStore()

if (groupStore.item.id) {
  router.replace({ name: 'group', params: { groupId: groupStore.item.id } })
} else {
  router.replace({ name: 'create-group' })
}
</script>

<i18n>
{
  "en": {
    "welcome": "Welcome to Vueflame.",
    "comingSoon": "Coming Soon"
  },
  "he": {
    "welcome": "ברוכים הבאים ללהבת ויו.",
    "comingSoon": "בקרוב יהיה זמין"
  }
}
</i18n>
