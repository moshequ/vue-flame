<template>
  <v-menu rounded :activator="`#${props.id}`">
    <v-card min-width="200px">
      <v-sheet color="primary">
        <v-card-text class="mx-auto text-center">
          <h3>{{ profile.details?.name || activeItem.title }}</h3>

          <ProfileAvatar :profile="profile" class="mt-1" />

          <p class="text-caption mt-1" v-if="profile.details?.name">
            {{ profile.details?.name }}
          </p>
          <p class="text-caption mt-1" v-if="profile.details?.email">
            {{ profile.details?.email }}
          </p>
          <v-divider class="my-3" />
          <v-btn rounded variant="text" :prepend-icon="mdiEye">
            {{ t('viewGroup') }}
          </v-btn>
        </v-card-text>
      </v-sheet>

      <v-list>
        <v-list-subheader>{{ t('groups') }}</v-list-subheader>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <template v-slot:prepend>
            <ProfileAvatar :profile="profile" class="mt-1" dense />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/group">
          <template v-slot:prepend>
            <v-icon :icon="mdiPlus"></v-icon>
          </template>
          <v-list-item-title>{{ t('addGroup') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PropType } from 'vue'
import type { IProfile } from '@/stores/profile/types'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import { mdiEye, mdiPlus } from '@mdi/js'
const { t } = useI18n()

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  profile: {
    type: Object as PropType<IProfile>,
    required: true
  }
})

const activeItem = { id: 1, title: 'הגמר מ. עילית' }
const items = [
  { id: 2, title: 'חיל הים' },
  { id: 3, title: 'קודקוד' }
]
</script>

<i18n>
{
  "en": {
    "groups": "groups",
    "viewGroup": "View",
    "addGroup": "Add"
  },
  "he": {
    "groups": "קבוצות",
    "viewGroup": "צפייה",
    "addGroup": "הוספה"
  }
}
</i18n>
