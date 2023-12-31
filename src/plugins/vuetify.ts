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
import { watch } from 'vue'

export const vuetify = createVuetify({
  icons: {
    aliases,
    sets: {
      mdi
    }
  }
})

// toggle rtl/ltr body classes
watch(
  () => vuetify.locale.rtlClasses.value,
  (value, oldValue) => {
    if (value !== oldValue) {
      if (value) document.body.classList.add(value)
      if (oldValue) document.body.classList.remove(oldValue)
    }
  }
)