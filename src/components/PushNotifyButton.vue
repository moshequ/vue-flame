<template>
  <v-btn v-if="permission === 'default'" @click="handlePermission">{{ t('subscribe') }}</v-btn>
  <v-alert type="warning" v-if="permission === 'denied'">
    {{ t('unblock') }}
  </v-alert>
  <v-alert type="info" v-if="permission === 'granted'">
    {{ t('subscribed') }}
  </v-alert>
  <v-alert type="error" v-if="error">
    {{ error }}
  </v-alert>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getToken, deleteToken } from 'firebase/messaging'
import { messaging } from '@/plugins/firebase'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const error = ref('')
const permission = ref(Notification.permission)

const handlePermission = async () => {
  console.log('handlePermission clicked')
  Notification.requestPermission().then(function (getperm) {
    console.log('Perm granted', getperm)
  })
}
let token = ''
const saveToken = async () => {
  const registration = await navigator.serviceWorker.ready

  console.log({ VITE_PUBLIC_VAPID_KEY: import.meta.env.VITE_PUBLIC_VAPID_KEY })
  try {
    token = await getToken(messaging, {
      serviceWorkerRegistration: registration,
      vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY
    })
    // TODO: Send token to server for use/save the token for later
    console.log({ token })
    return token
  } catch (err) {
    error.value = `An error occurred while retrieving token. ${err}`
    console.error('An error occurred while retrieving token. ', err)
  }
}

if ('permissions' in navigator) {
  navigator.permissions.query({ name: 'notifications' }).then(function (notificationPerm) {
    notificationPerm.onchange = function () {
      error.value = ''
      if (notificationPerm.state === 'prompt') {
        permission.value = 'default'
      } else {
        permission.value = notificationPerm.state
      }

      if (permission.value === 'granted') {
        saveToken()
      } else {
        if (token) {
          deleteToken(messaging)
            .then(() => {
              console.log('Token deleted.')
            })
            .catch((err) => {
              console.log('Unable to delete token. ', err)
            })
        }
      }
    }
  })
}
</script>

<i18n>
{
  "en": {
    "subscribe": "Subscribe to Notifications",
    "unblock": "You should unblock Vueflame browser notification",
    "subscribed": "You're subscribed to Vueflame notifications"
  },
  "he": {
    "subscribe": "הרשם להתראות",
    "unblock": "עליך לאשר התראות מהדפדפן",
    "subscribed": "אתה רשום להתראות מהדפדפן"
  }
}
</i18n>
