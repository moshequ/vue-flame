<template>
  <v-layout class="fill-height">
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
      <v-list>
        <v-list-item :prepend-icon="mdiViewList" :title="t('taskTitle')" @click.stop="rail = !rail">
          <template v-slot:append>
            <v-icon class="fx" variant="text" :icon="mdiChevronLeft" />
          </template>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item :title="task.name" :value="task.name" v-for="task in tasks" :key="task.name">
          <template v-slot:prepend>
            <v-avatar color="secondary" size="24">
              <span class="text-caption">{{ task.name[0] + task.name[1] }}</span>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list density="compact" nav>
          <v-text-field
            density="compact"
            v-if="editMode && !rail"
            v-model="taskName"
            :focused="editMode"
            :label="t('taskNameLabel')"
            :aria-label="t('taskNameLabel')"
          >
            <template v-slot:append>
              <v-btn
                color="blue-darken-1"
                size="compact"
                variant="text"
                @click="addTask"
                :icon="mdiCheck"
              />
            </template>
          </v-text-field>
          <v-list-item
            v-else
            elevation="2"
            :prepend-icon="mdiPlus"
            :title="t('addTaskTitle')"
            value="add"
            class="mb-5"
            @click="(editMode = true) && (rail = false)"
          />
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      in the second step choose hours for each task (same as google work hours)
      <br />
      below that choose the number of people needed for each task and the skills/equipment needed
      for each slot
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { mdiCheck, mdiChevronLeft, mdiPlus, mdiViewList } from '@mdi/js'
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { INewCycle } from '@/stores/cycle/types'

const { t } = useI18n()
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object as PropType<INewCycle>,
    required: false,
    default: () => null
  }
})

const form = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    return emit('update:modelValue', value)
  }
})
interface ITask {
  name: string
}

const taskName = ref('')
const editMode = ref(false)
const drawer = ref(true)
const rail = ref(true)
const tasks = ref<ITask[]>([{ name: 'ש.ג.' }, { name: 'מנהל' }, { name: 'מנהל על' }])

const addTask = () => {
  if (taskName.value) {
    tasks.value.push({ name: taskName.value })
  }

  taskName.value = ''
  editMode.value = false
}
</script>

<i18n>
{
  "en": {
    "taskNameLabel": "Task Name",
    "addTaskTitle": "Add Task",
    "taskTitle": "Tasks"
  },
  "he": {
    "taskNameLabel": "שם משימה",
    "addTaskTitle": "הוסף משימה",
    "taskTitle": "משימות"
  }
}
</i18n>
