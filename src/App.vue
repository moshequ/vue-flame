<template>
  <v-progress-linear :indeterminate="loading" />

  <v-app v-if="!loading">
    <v-container v-if="error" class="mt-16">
      <v-alert type="error">{{ error }}</v-alert>
    </v-container>
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useProfileStore } from '@/stores/profile'
import { useGroupStore } from '@/stores/group'
import { useCycleStore } from '@/stores/cycle'
import { ref, watch } from 'vue'
import { vuetify } from '@/plugins/vuetify'

const error = ref('')
const loading = ref(true)
Promise.all([useProfileStore().fetch(), useGroupStore().fetch(), useCycleStore().fetch()])
  .catch((err) => {
    error.value = err
    console.error(error)
  })
  .finally(() => {
    loading.value = false
  })

watch(
  () => vuetify.locale.rtlClasses.value,
  (value, oldValue) => {
    if (value !== oldValue) {
      if (value) document.body.classList.add(value)
      if (oldValue) document.body.classList.remove(oldValue)
    }
  }
)
</script>

<style>
.v-locale--is-rtl .rx {
  flex-direction: row-reverse !important;
}
.v-locale--is-rtl .fx {
  transform: rotate(180deg);
}
.v-locale--is-rtl .dp__menu {
  direction: rtl;
}
.firebase-emulator-warning {
  opacity: 0.75;
}
</style>
