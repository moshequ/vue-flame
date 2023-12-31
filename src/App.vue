<template>
  <v-app class="bg-sky">
    <v-progress-linear :indeterminate="loading" />
    <v-container v-if="error" class="mt-16">
      <v-alert type="error">{{ error }}</v-alert>
    </v-container>

    <RouterView v-if="!loading" />
  </v-app>
</template>

<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'
import { ref } from 'vue'

const error = ref('')
const loading = ref(true)

// TODO: load only when you need it
Promise.all([useProfileStore().fetch()])
  .catch((err) => {
    error.value = err
    console.error('error fetching user data', error)
  })
  .finally(() => {
    loading.value = false
  })
</script>
