<template>
  <v-container>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab value="profileFields">Profile Fields</v-tab>
      <v-tab value="organizationFields">Organization Fields</v-tab>
      <v-tab value="repeaterFields">Organization Fields</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="profileFields">
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="profile.name" :label="t('name')" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="profile.address" :label="t('address')" />
            </v-col>
            <v-col cols="6">
              <v-dialog v-model="dialog" scrollable width="auto">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    v-model="profile.birthdate"
                    :label="t('birthdate')"
                    v-bind="props"
                  />
                </template>
                <v-card>
                  <v-card-title>Select Birth Date</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-date-picker
                      v-model="date"
                      :allowed-dates="allowedDates"
                      min="2016-06-15"
                      max="2018-03-20"
                    />
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="profile.phone" :label="t('phone')" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="profile.countryId" :label="t('ID')" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="profile.armyCatID" :label="t('armyCatID')" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="profile.personalId" :label="t('ArmyID')" />
            </v-col>
            <v-col cols="12">
              {{ isAdmin }}
              <v-btn @click="save">{{ t('save') }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item value="organizationFields">
        <v-container fluid>
          <v-col cols="12">
            <v-text-field v-model="profile.orgName" :label="t('groupName')" />
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="profile.orgInformation" :label="t('groupInformation')" />
          </v-col>
        </v-container>
      </v-window-item>
      <v-window-item value="repeaterFields">
        <v-container fluid>
          <FormRepeater />
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>

  <v-container v-if="isAdmin">
    here will be admin stuff like connect user to team iron numbers set vacations
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/lib/auth'
import { computed, ref } from 'vue'
import { useDate } from 'vuetify'
import FormRepeater from '@/components/FieldRepeater.vue'

import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()
const { byId } = storeToRefs(profileStore)
const dialog = ref(false)
const tab = ref(null)

const profile = computed(() => {
  const profileId = (route.params.profileId as string) || authStore.auth?.uid || ''

  return byId.value[profileId] || { id: profileId }
})

const date = ref(new Date('2018-03-02'))
const adapter = useDate()

function allowedDates(val) {
  return parseInt(adapter.toISO(val).split('-')[2], 10) % 2 === 0
}

const { t } = useI18n()
const authStore = useAuthStore()
const route = useRoute()

const isAdmin = ref(false)

authStore.isAdmin.then((val) => (isAdmin.value = val))
const save = async () => {
  await profileStore.upsert(profile.value)
}
</script>

<i18n>
{
  "en": {
    "name": "Full name",
    "address": "Address",
    "phone": "Phone",
    "save": "Save",
    "birthdate": "Birth Date",
    "ArmyID":"Personal Army ID",
    "ID": "Country ID",
    "armyCatID": "Rifleman Number",
    "groupName": "Group Name",
    "groupInformation": "Group Information",
  },
  "he": {
    "name": "שם מלא",
    "address": "כתובת",
    "phone": "טלפון",
    "save": "שמור",
    "birthdate": "תאריך לידה",
    "ArmyID":"מספר אישי",
    "ID": "תעודת זהות",
    "armyCatID": "מספר רובאי",
    "groupName": "שם צוות",
    "groupInformation": "מידע על הצוות",
  }
}
</i18n>
