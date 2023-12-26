<template>
  <AppBar :title="t('title')" />
  <v-main>
    <v-container class="fill-height flex-column pa-0">
      <GroupDetails />
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
import GroupDetails from '@/components/GroupDetails.vue'
import AppBar from '@/components/AppBar.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "title": "Group"
  },
  "he": {
    "title": "קבוצה"
  }
}
</i18n>
