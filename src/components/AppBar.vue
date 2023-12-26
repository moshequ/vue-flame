<template>
  <v-app-bar
    color="primary"
    scroll-behavior="fade-image"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:prepend>
      <v-btn v-if="handleBack" :icon="mdiArrowLeft" @click="handleBack" class="fx" />
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>{{ props.title || t('title') }}</v-app-bar-title>
    <template v-slot:append>
      <v-btn id="menu-activator" icon>
        <ProfileAvatar :profile="profile" />
      </v-btn>

      <ContextMenu id="menu-activator" :profile="profile" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import { mdiArrowLeft } from '@mdi/js'

const { t } = useI18n()
const profileStore = useProfileStore()
const { item: profile } = storeToRefs(profileStore)

const props = defineProps({
  title: {
    type: String
  },
  handleBack: {
    type: Function
  }
})
</script>

<i18n>
{
  "en": {
    "title": "Vueflame"
  },
  "he": {
    "title": "להבת ויו"
  }
}
</i18n>
