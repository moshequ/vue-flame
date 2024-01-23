<template>
  value: {{ field }}
  <v-text-field
    v-for="locale in locales"
    :key="locale"
    v-model="field[locale]"
    :label="`${label || ''} (${locale})`"
  />
</template>

<script setup lang="ts">
import { ELocales } from '@/lib/i18n/types'
import { initLocaleFields } from '@/stores/utils/initLocaleFields'
import type { TLocaleString } from '@/stores/types'
import { type PropType, ref, watch } from 'vue'

interface Emits {
  (e: 'update:modelValue', payload?: TLocaleString): void
}
const emit = defineEmits<Emits>()
const props = defineProps({ modelValue: Object as PropType<TLocaleString>, label: String })
const locales = Object.values(ELocales)
const field = ref(props.modelValue || initLocaleFields())
watch(
  field,
  (v) => {
    const isEmpty = !Object.values(v).filter(Boolean).length
    emit('update:modelValue', isEmpty ? undefined : field.value)
  },
  { deep: true }
)
</script>
