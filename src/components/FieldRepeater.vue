<template>
  <v-container fluid class="pa-0">
    <v-row dense>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel title="Title" v-for="(field, index) in fields" :key="index">
            <v-text-field v-model="field.value" type="text" placeholder="שם עמדה" />
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12">
        <v-btn @click="removeField">{{ t('removeExpansionPanel') }}</v-btn>
        <v-btn @click="addField">{{ t('addExpansionPanel') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const fields = ref([{ value: '' }])

const addField = () => {
  fields.value.push({ value: '' })
}

const removeField = () => {
  if (fields.value.length > 1) {
    fields.value.pop()
  }
}
// TODO: https://dev.to/digitalpollution/creating-a-vue-3-form-repeater-component-a-step-by-step-guide-4ji6
</script>
<i18n>
{
  "en": {
    "addExpansionPanel": "Add Post",
    "removeExpansionPanel": "Remove Post"
  },
  "he": {
    "addExpansionPanel": "הוסף עמדה",
    "removeExpansionPanel": "הסר עמדה"
  }
}
</i18n>
