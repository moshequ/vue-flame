<template>
  <v-container class="pa-0">
    <GroupSettings />
  </v-container>

  <v-container class="pa-0">
    <v-tabs v-model="tab" align-tabs="center" fixed-tabs>
      <v-tab value="cycles">{{ t('cycles') }}</v-tab>
      <v-tab value="members">{{ t('members') }}</v-tab>
    </v-tabs>
  </v-container>
  <v-container class="pa-0 flex-grow-1">
    <v-window v-model="tab" class="fill-height" :touch="false">
      <v-window-item value="cycles" class="fill-height">
        <CyclesList />
      </v-window-item>
      <v-window-item value="members" class="fill-height">
        <MembersList />
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import GroupSettings from '@/components/GroupSettings.vue'
import MembersList from '@/components/MembersList.vue'
import CyclesList from '@/components/CyclesList.vue'

const { t } = useI18n()

const tab = ref(false)
</script>

<i18n>
{
  "en": {
    "cycles": "Cycles",
    "members": "Members"
  },
  "he": {
    "cycles": "מחזורים",
    "members": "חברים"
  }
}
</i18n>
