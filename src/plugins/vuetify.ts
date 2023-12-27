/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export const vuetify = createVuetify({
  icons: {
    aliases,
    sets: {
      mdi
    }
  }
})
