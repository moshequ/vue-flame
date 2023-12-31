<template>
  <v-btn class="my-2" :block="true" v-if="pwaStore.installPromptEvent" @click="pwaStore.installApp">
    {{ t('installText') }}
  </v-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePwaStore } from '@/lib/pwa'

const pwaStore = usePwaStore()

const { t } = useI18n()
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
