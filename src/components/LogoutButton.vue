<template>
  <v-btn v-if="authStore.auth" outlined @click="authStore.signOut">{{ t('logoutText') }}</v-btn>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/lib/auth'
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "logoutText": "Logout"
  },
  "he": {
    "logoutText": "התנתק"
  }
}
</i18n>
