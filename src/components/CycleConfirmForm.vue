<template>Vueflame table and publish/back buttons</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { INewCycle } from '@/stores/cycle/types'

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
  },
  "he": {
  }
}
</i18n>
