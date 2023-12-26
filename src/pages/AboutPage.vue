<template>
  <v-container>
    <div class="about">
      <v-btn to="/">Go to Home</v-btn>
      <LocaleSwitcher />
      <h1>This is an about page</h1>

      <div>{{ t('hi') }}</div>
      <div>{{ $t('message.requiredField') }}</div>
      <v-btn>test2</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import LocaleSwitcher from '@/lib/i18n/components/LocaleSwitcher.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "hi": "hi there"
  },
  "he": {
    "hi": "שלום"
  }
}
</i18n>
