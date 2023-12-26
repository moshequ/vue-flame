<template>
  <v-container class="fill-height flex-column">
    <v-row align="center" justify="center" class="text-center">
      <div>
        {{ profileStore.item.id }}
      </div>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
</script>

<i18n>
{
  "en": {
  },
  "he": {
  }
}
</i18n>
