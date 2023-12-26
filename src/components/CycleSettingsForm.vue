<template>
  <v-container class="fill-height flex-column">
    <v-row align="center" justify="center" class="text-center">
      <v-sheet max-width="300" class="text-start">
        <div>{{ t('cycleStartLabel') }}</div>
        <DatePicker v-model="form.start" :placeholder="t('cycleStartLabel')" />

        <div>{{ t('cycleEndLabel') }}</div>
        <DatePicker v-model="form.end" :rmMs="1" :placeholder="t('cycleEndLabel')" />

        <span class="text-h2">
          choose date range for cycle (2 text fields for date and time ISO format)
        </span>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PropType } from 'vue'
import DatePicker from '@/components/DatePicker.vue'
import { computed } from 'vue'
import type { INewCycle } from '@/stores/cycle/types'

const { t } = useI18n()
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object as PropType<INewCycle>,
    required: false,
    default: () => null
  }
})

const form = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    return emit('update:modelValue', value)
  }
})
</script>

<i18n>
{
  "en": {
    "cycleStartLabel": "Cycle start date",
    "cycleEndLabel": "Cycle end date"
  },
  "he": {
    "cycleStartLabel": "תאריך התחלת מחזור",
    "cycleEndLabel": "תאריך סיום מחזור"
  }
}
</i18n>
