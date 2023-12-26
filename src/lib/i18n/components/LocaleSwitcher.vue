<template>
  <v-select
    :value="$i18n.locale"
    :label="t('chooseLanguage')"
    single-line
    density="compact"
    @update:modelValue="onSelect"
    :items="Object.keys(ELocales)"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ELocales } from '@/lib/i18n/types'
import { router } from '@/router'

const onSelect = (locale: string | null) => {
  router.replace({ params: { locale } })
}

const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "chooseLanguage": "Choose language"
  },
  "he": {
    "chooseLanguage": "(language) בחר שפה"
  }
}
</i18n>
