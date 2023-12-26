<template>
  {{ t('title') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "title": "Profile Settings"
  },
  "he": {
    "title": "הגדרות פרופיל"
  }
}
</i18n>
