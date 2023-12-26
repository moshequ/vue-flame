<template>
  <AppBar :title="t('title')" :handleBack="() => $router.push('group')" />
  <v-main>
    <CycleForm :cycle="cycleStore.form" />
  </v-main>
</template>
<script setup lang="ts">
import AppBar from '@/components/AppBar.vue'
import { useI18n } from 'vue-i18n'
import CycleForm from '@/components/CycleForm.vue'
import { useCycleStore } from '@/stores/cycle'

const { t } = useI18n()
const cycleStore = useCycleStore()
</script>

<i18n>
{
  "en": {
    "title": "Create cycle"
  },
  "he": {
    "title": "צור מחזור"
  }
}
</i18n>
