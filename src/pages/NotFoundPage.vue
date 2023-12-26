<template>
  <v-main>
    <v-container class="fill-height flex-column">
      <v-row align="center" justify="center" class="text-center">
        <div>
          <h1>{{ t('notFound') }}</h1>
          <v-btn variant="text" to="/" color="secondary">{{ t('homeLabel') }}</v-btn>
        </div>
      </v-row>
      <v-row align="end" justify="center" class="text-center flex-grow-0">
        <div>
          <v-btn :prependIcon="mdiHomeAccount" to="/" color="primary">{{ t('homeLabel') }}</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiHomeAccount } from '@mdi/js'
const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "notFound": "page not found",
    "homeLabel": "Go to Home"
  },
  "he": {
    "notFound": "דף לא נמצא",
    "homeLabel": "עבור לדף בית"
  }
}
</i18n>
