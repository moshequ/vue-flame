import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker'
import type { App } from 'vue'

export const createDatepicker = (app: App) => {
  app.component('VueDatePicker', VueDatePicker)
}
