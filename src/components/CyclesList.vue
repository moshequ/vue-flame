<template>
  <v-window
    v-model="window"
    :touch="false"
    style="justify-content: center"
    class="fill-height justify-center align-center align-content-center"
  >
    <v-window-item
      v-for="(cycle, i) in cycles"
      :key="cycle.id"
      :value="i + 1"
      :style="isAdmin ? 'margin-bottom: 80px' : ''"
    >
      <CyclesItem :cycle="cycle" />
    </v-window-item>

    <div v-if="!cycles.length" class="d-flex justify-center align-center fill-height">
      <v-btn v-if="isAdmin" :prepend-icon="mdiPlus" color="primary" :to="{ name: 'create-cycle' }">
        {{ t('addCycle') }}
      </v-btn>
    </div>
  </v-window>

  <v-btn
    v-if="isAdmin && cycles.length"
    :icon="mdiContentDuplicate"
    size="large"
    position="fixed"
    color="primary"
    class="mx-4"
    style="bottom: 72px; opacity: 0.8"
    @click="duplicateCycle"
    :to="{ name: 'create-cycle' }"
  />

  <v-bottom-navigation v-if="cycles.length">
    <v-pagination v-model="window" :length="cycles.length" />
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Timestamp } from 'firebase/firestore'
import CyclesItem from '@/components/CyclesItem.vue'
import { mdiContentDuplicate, mdiPlus } from '@mdi/js'
import { useAuthStore } from '@/lib/auth'
import { useCycleStore } from '@/stores/cycle'
import type { TCycles } from '@/stores/cycle/types'
import { useGroupStore } from '@/stores/group'
import { deepCopy } from '@/stores/utils/deepCopy'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const groupStore = useGroupStore()
const cycleStore = useCycleStore()
const authStore = useAuthStore()
const { byGroupId } = cycleStore
const window = ref(1)
const isAdmin = ref(false)
const cycles = byGroupId[groupStore.item.id] || ([] as TCycles[])

authStore.isAdmin.then((val) => (isAdmin.value = val))

const duplicateCycle = () => {
  const cycle = deepCopy(cycles[window.value - 1])

  const start = cycle.start.toMillis()
  const end = cycle.end.toMillis()
  const duration = end - start + 1

  cycle.start = Timestamp.fromMillis(start + duration)
  cycle.end = Timestamp.fromMillis(end + duration)

  cycle.tasks = cycle.tasks.map((task) => {
    const start = task.datetime.start.toMillis()
    const end = task.datetime.end.toMillis()

    task.datetime.start = Timestamp.fromMillis(start + duration)
    task.datetime.end = Timestamp.fromMillis(end + duration)

    return task
  })

  cycleStore.form = {
    ...cycle,
    id: ''
  }
}
</script>

<i18n>
{
  "en": {
    "addCycle": "Add new cycle"
  },
  "he": {
    "addCycle": "הוספת מחזור חדש"
  }
}
</i18n>
