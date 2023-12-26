<template>
  <v-card flat rounded="0" class="fill-height">
    <v-window v-model="window" class="fill-height">
      <v-window-item :value="1" class="fill-height">
        <CycleSettingsForm v-model="form" />
      </v-window-item>
      <v-window-item :value="2" class="fill-height">
        <CycleTasksForm v-model="form" />
      </v-window-item>
      <v-window-item :value="3" class="fill-height">
        <CycleConfirmForm v-model="form" />
      </v-window-item>
    </v-window>
  </v-card>

  <v-bottom-navigation grow>
    <v-container class="py-0">
      <v-stepper editable v-model="window" flat>
        <v-stepper-header>
          <v-stepper-item complete :title="t('definedCycleTitle')" :value="1"></v-stepper-item>

          <v-divider />

          <v-stepper-item :title="t('createTasksTitle')" :value="2"></v-stepper-item>

          <v-divider />

          <v-stepper-item :title="t('confirmCycleTitle')" :value="3"></v-stepper-item>
        </v-stepper-header>
      </v-stepper>
    </v-container>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { INewCycle } from '@/stores/cycle/types'
import { useGroupStore } from '@/stores/group'
import { Timestamp } from 'firebase/firestore'
import CycleSettingsForm from '@/components/CycleSettingsForm.vue'
import CycleTasksForm from '@/components/CycleTasksForm.vue'
import CycleConfirmForm from '@/components/CycleConfirmForm.vue'

const props = defineProps({
  cycle: {
    type: Object as PropType<INewCycle>,
    required: false,
    default: () => {
      const groupStore = useGroupStore()
      const WEEK_IN_MS = 604800000

      return {
        groupId: groupStore.item.id,
        start: Timestamp.now(),
        end: Timestamp.fromMillis(new Date().getTime() + WEEK_IN_MS)
      } as INewCycle
    }
  }
})

const form = props.cycle

const { t } = useI18n()

const window = ref(1)
</script>

<i18n>
{
  "en": {
    "definedCycleTitle": "Defined cycle",
    "createTasksTitle": "Create tasks",
    "confirmCycleTitle": "Confirm cycle"
  },
  "he": {
    "definedCycleTitle": "הגדרת מחזור",
    "createTasksTitle": "יצירת משימות",
    "confirmCycleTitle": "אישור מחזור"
  }
}
</i18n>
