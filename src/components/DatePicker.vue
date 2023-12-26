<template>
  <VueDatePicker
    v-model="form"
    :teleport="true"
    :locale="locale"
    :weekStart="weekStart"
    :dayNames="weekDays"
    v-bind="$attrs"
    :select-text="t('selectText')"
    :cancel-text="t('cancelText')"
    :now-button-label="t('nowButtonLabel')"
  />
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { Timestamp } from 'firebase/firestore'
import type { PropType } from 'vue'

// TODO: add locale support for :aria-labels="ariaLabels", see: https://vue3datepicker.com/props/localization/#aria-labels

const { locale, t } = useI18n()
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object as PropType<Timestamp | Date | null>,
    required: false,
    default: () => null
  },
  rmMs: {
    type: Number,
    required: false,
    default: () => 0
  }
})

const form = computed({
  get() {
    return props.modelValue instanceof Timestamp ? props.modelValue.toDate() : props.modelValue
  },
  set(value) {
    let ms = (value?.getTime?.() || 0) - props.rmMs

    const validDate = ms > 0

    if (!validDate) return emit('update:modelValue', null)

    const v = props.modelValue instanceof Timestamp ? Timestamp.fromMillis(ms) : new Date(ms)

    return emit('update:modelValue', v)
  }
})

type TWeekStart = '0' | '1' | '2' | '3' | '4' | '5' | '6' | 0 | 1 | 2 | 3 | 4 | 5 | 6
const getWeekDays = (locale: string, weekStart: TWeekStart) => {
  const names: string[] = []

  const date = new Date()
  const currentDay = date.getDay()
  const distance = +weekStart - currentDay
  date.setDate(date.getDate() + distance)

  for (let i = 0; i <= 6; i++) {
    const weekday = date.toLocaleDateString(locale, { weekday: 'narrow' })

    names.push(weekday)

    date.setDate(date.getDate() + 1)
  }

  return names
}

const firstDay = (new Intl.Locale(locale.value) as any)?.weekInfo?.firstDay || 1
const weekStart = (firstDay % 7) as TWeekStart

const weekDays = getWeekDays(locale.value, weekStart)
</script>

<style></style>
<i18n>
{
  "en": {
    "selectText": "Select",
    "cancelText": "Cancel",
    "nowButtonLabel": "Now"
  },
  "he": {
    "selectText": "בחירה",
    "cancelText": "ביטול",
    "nowButtonLabel": "עכשיו"
  }
}
</i18n>
