<template>
  <v-form v-model="valid" @submit.prevent="onSubmit">
    <v-toolbar :flat="true" :extension-height="groupStore.item.description ? undefined : 0">
      <v-btn :icon="mdiAccountGroup" />

      <v-toolbar-title :text="groupStore.item.name" />

      <template #extension>
        <div class="px-4">{{ groupStore.item.description }}</div>
      </template>

      <v-spacer />

      <v-fade-transition leave-absolute>
        <v-btn
          v-if="editMode"
          type="submit"
          :aria-label="t('submit')"
          :disabled="!valid"
          :loading="loading"
          :icon="mdiCheck"
        />
        <v-btn
          v-else
          type="button"
          @click="editMode = true"
          :aria-label="t('editModeText')"
          :disabled="!valid"
          :loading="loading"
          :icon="mdiPencil"
        />
      </v-fade-transition>
    </v-toolbar>

    <v-container>
      <v-expand-transition>
        <v-card v-show="editMode" flat>
          <v-text-field
            v-model="form.name"
            :label="t('nameLabel')"
            :aria-label="t('nameLabel')"
            :rules="[rules.required]"
          />

          <v-textarea
            v-model="form.description"
            :label="t('descriptionLabel')"
            :aria-label="t('descriptionLabel')"
            :rules="[]"
          />

          <div class="v-messages text-error" style="min-height: 18px" role="alert">
            {{ groupStore.errorCode }}
          </div>
        </v-card>
      </v-expand-transition>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { mdiCheck, mdiPencil, mdiAccountGroup } from '@mdi/js'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useGroupStore } from '@/stores/group'
import { router } from '@/router'
import { useRoute } from 'vue-router'
import type { IGroup } from '@/stores/group/types'

const route = useRoute()
const { upsert, byId } = useGroupStore()
const groupStore = useGroupStore()
const { t } = useI18n({})
const { t: $t } = useI18n({ useScope: 'global' })

const rules = {
  required: (value: any): boolean | string => {
    const message = $t('message.requiredField') // TODO: fix translation when change language due to vue none reactive rules attr
    return !!value || value === 0 || message
  }
}

const group = byId[route.params.groupId as string] || ({} as IGroup)

const valid = ref(true)
const editMode = ref(false)
const loading = ref(false)

const form = ref<IGroup>(
  { ...group } || {
    name: '',
    description: ''
  }
)

const onSubmit = async () => {
  loading.value = true
  const group = await upsert(form.value)

  if (!form.value.id) {
    return router.push({ name: 'group', params: { groupId: group.id } })
  }

  loading.value = false
  editMode.value = false
}
</script>

<i18n>
{
  "en": {
    "submit": "Save",
    "editModeText": "Edit",
    "nameLabel": "Group name",
    "descriptionLabel": "Group description"
  },
  "he": {
    "submit": "שמירה",
    "editModeText": "עריכה",
    "nameLabel": "שם הקבוצה",
    "descriptionLabel": "תיאור הקבוצה"
  }
}
</i18n>
