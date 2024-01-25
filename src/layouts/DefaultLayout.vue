<template>
  <RouterView />
  <PwaInstallButton v-if="show" />
</template>

<script lang="ts" setup>
import PwaInstallButton from '@/lib/pwa/components/PwaInstallButton.vue'
import { computed } from 'vue'
import { usePwaStore } from '@/lib/pwa'
import { useAuthStore } from '@/lib/auth'

const authStore = useAuthStore()
const pwaStore = usePwaStore()
const show = computed(() => {
  return authStore.isAuthenticated && Boolean(pwaStore.installPromptEvent)
})
</script>
