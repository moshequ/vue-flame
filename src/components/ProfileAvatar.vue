<template>
  <v-avatar v-if="initials" color="brown" :size="dense ? 'x-small' : 'default'">
    <span :class="dense ? 'text-caption' : 'text-h5'">{{ initials }}</span>
  </v-avatar>

  <v-icon v-else :icon="mdiAccountCircle" :size="dense ? 'default' : 40"></v-icon>
</template>

<script setup lang="ts">
import { mdiAccountCircle } from '@mdi/js'
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useProfileStore } from '@/stores/profile'
import type { IProfile } from '@/stores/profile/types'

const props = defineProps({
  profile: {
    type: Object as PropType<IProfile>,
    required: true
  },
  dense: {
    type: Boolean,
    default: false
  }
})
const profileStore = useProfileStore()

const initials = computed(() => {
  return profileStore.initials(props.profile.id, props.dense ? 1 : 2)
})
</script>
