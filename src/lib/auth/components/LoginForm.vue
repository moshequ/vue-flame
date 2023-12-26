<template>
  <v-form v-model="valid" @submit.prevent="() => onSubmit(EProvider.EMAIL_PASSWORD)">
    <v-container>
      <v-card>
        <v-card-title class="headline">{{ t('title') }}</v-card-title>

        <v-card-text>
          <!-- TODO: Insert tab to choose either phone or email -->

          <v-row>
            <v-col cols="12" v-if="options.providers.PHONE">
              <v-text-field
                autocomplete="on"
                v-model="form.phone"
                :label="t('phone')"
                :aria-label="t('phone')"
                :rules="[rules.required, rules.phone]"
                type="number"
              />
            </v-col>

            <template v-if="options.providers.EMAIL_PASSWORD">
              <v-col cols="12">
                <v-text-field
                  type="email"
                  v-model="form.email"
                  :label="t('email')"
                  :aria-label="t('email')"
                  :rules="[rules.required, rules.email]"
                />
              </v-col>
              <v-col cols="12" v-if="!options.providers.EMAIL_LINK">
                <v-text-field
                  autocomplete="on"
                  v-model="form.password"
                  :label="t('password')"
                  :aria-label="t('password')"
                  :rules="[rules.required]"
                  :append-inner-icon="show ? mdiEye : mdiEyeOff"
                  :type="show ? 'text' : 'password'"
                  @click:append-inner="show = !show"
                >
                  <template v-slot:append-inner> </template>
                </v-text-field>
              </v-col>
            </template>

            <v-col cols="12">
              <v-checkbox
                v-model="terms"
                :label="t('terms')"
                :aria-label="t('terms')"
                variant="outlined"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12">
              <v-btn
                type="submit"
                color="primary"
                :aria-label="t('submit')"
                :block="true"
                :disabled="loading[EProvider.EMAIL_PASSWORD] || !valid"
                :loading="loading[EProvider.EMAIL_PASSWORD]"
              >
                {{ t('submit') }}
              </v-btn>
              <div class="ma-2 v-messages text-error" style="min-height: 18px" role="alert">
                {{ authStore.errorCode }}
              </div>
            </v-col>

            <v-col cols="12" class="text-center"> {{ t('separator') }} </v-col>

            <v-col cols="12" class="text-center">
              <v-btn
                v-for="social in socials"
                :key="social.provider"
                :color="social.color"
                :disabled="!terms"
                type="button"
                :aria-label="social.provider"
                :loading="loading[social.provider]"
                class="ma-1"
                @click="() => onSubmit(social.provider)"
                :icon="social.icon"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { options, useAuthStore } from '../'
import { computed, ref } from 'vue'
import { EProvider } from '../types'
import { useI18n } from 'vue-i18n'
import {
  mdiApple,
  mdiEye,
  mdiEyeOff,
  mdiFacebook,
  mdiGithub,
  mdiGoogle,
  mdiMicrosoft,
  mdiTwitter,
  mdiYahoo
} from '@mdi/js'

const { t } = useI18n()
const authStore = useAuthStore()
const { signIn } = useAuthStore()

const rules = {
  required: (value: any): boolean | string => {
    const message = 'Required field'
    return !!value || value === 0 || message
  },
  email: (value: any): boolean | string => {
    const message = 'Invalid email'
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return !value ? message : regex.test(value) ? true : message
  },
  phone: (value: any): boolean | string => {
    const message = 'Invalid phone'
    const regex = /^\d{10}$/
    return !value ? message : regex.test(value) ? true : message
  }
}

const terms = ref(true)
const show = ref(false)
const valid = ref(true)
const loading = ref({} as { [provider in EProvider]?: boolean })

const form = ref({
  email: '',
  password: '',
  phone: ''
})

const socials = computed(() => {
  const providers = [
    { provider: EProvider.FACEBOOK, color: 'indigo', icon: mdiFacebook },
    { provider: EProvider.GITHUB, color: 'black', icon: mdiGithub },
    { provider: EProvider.GOOGLE, color: 'red', icon: mdiGoogle },
    { provider: EProvider.TWITTER, color: 'light-blue', icon: mdiTwitter },
    { provider: EProvider.APPLE, color: 'black', icon: mdiApple },
    { provider: EProvider.MICROSOFT, color: 'blue', icon: mdiMicrosoft },
    { provider: EProvider.YAHOO, color: 'purple', icon: mdiYahoo }
  ]

  return providers.filter(({ provider }) => options.providers[provider])
})

const onSubmit = async (provider: EProvider) => {
  loading.value[provider] = true
  await signIn(provider, form.value)
  loading.value[provider] = false
}
</script>

<i18n>
{
  "en": {
    "title": "Login",
    "phone": "Phone",
    "email": "Email",
    "password": "Password",
    "terms": "Terms and conditions",
    "submit": "Login",
    "separator": "Or"
  },
  "he": {
    "title": "התחברות",
    "phone": "טלפון",
    "email": "אימייל",
    "password": "סיסמא",
    "terms": "תנאים והגבלות",
    "submit": "התחבר",
    "separator": "או"
  }
}
</i18n>
