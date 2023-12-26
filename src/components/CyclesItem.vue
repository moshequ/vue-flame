<template>
  <v-card :flat="true" class="cycles-list">
    <v-divider />
    <v-data-table
      :search="search"
      :headers="headers"
      :items="rows"
      hide-no-data
      density="compact"
      items-per-page="-1"
    >
      <template #bottom></template>
      <template #[`item.0`]="{ value }">
        <div class="text-center" :style="value.key === 'tick' ? 'background: aqua' : ''">
          {{ value.title }}
        </div>
      </template>

      <template #[`item.${pos}`]="{ item, value }" v-for="pos in headers.length" :key="pos">
        <div v-if="value?.key === 'tick'" class="text-center" style="background: yellow">
          {{ value.title }}
        </div>
        <div v-else-if="value" class="text-center">
          <div v-for="slot in value.slots" :key="slot.memberId">
            <b>{{ slot.name }}:</b> {{ slot.memberId }}
          </div>
        </div>
        <div
          v-else-if="
            tasksByDay.days[resetTime((item['0'] as ITask).datetime?.start.toDate()).getTime()]
              ?.ticks[pos]
          "
          class="text-start"
          dir="auto"
          style="background: black"
        >
          -
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getDates, resetTime } from '@/plugins/dates'
import { useI18n } from 'vue-i18n'
import type { PropType } from 'vue'
import type { ICycle, ITask } from '@/stores/cycle/types'
const search = ref('')
const { locale } = useI18n()

const props = defineProps({
  cycle: {
    type: Object as PropType<ICycle>,
    required: true
  }
})
const dayFormat: Intl.DateTimeFormatOptions = {
  weekday: 'narrow',
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
}

const timeFormat: Intl.DateTimeFormatOptions = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
}

type Header = {
  title?: string
  value: string
  count: number
  fixed?: boolean
}

type Tick = {
  key: string
  title: string
}

const tasksByDay = props.cycle.tasks.reduce(
  (acc, v) => {
    const startDate = v.datetime.start.toDate()
    const endDate = v.datetime.end.toDate()

    const day = resetTime(startDate).getTime()
    const time = `${startDate.getTime()}-${endDate.getTime()}`

    const startFormatted = startDate.toLocaleTimeString(locale.value, timeFormat)
    const endFormatted = endDate.toLocaleTimeString(locale.value, timeFormat)

    const timeTitle = `${startFormatted}-${endFormatted}`

    acc.headers[v.title] = acc.headers[v.title] || {
      // title: v.title,
      count: 0,
      value: String(Object.keys(acc.headers).length)
    }

    acc.headers[v.title].count++

    acc.days[day] = acc.days[day] || {}

    acc.days[day].ticks = acc.days[day].ticks || {}
    acc.days[day].ticks = acc.days[day].ticks || {}
    acc.days[day].ticks[acc.headers[v.title].value as string] = {
      title: v.title,
      key: 'tick'
    }

    acc.days[day].items = acc.days[day].items || {}
    acc.days[day].items[time] = acc.days[day].items[time] || { '0': { ...v, title: timeTitle } }
    acc.days[day].items[time][acc.headers[v.title].value as string] = v

    return acc
  },
  {
    headers: { datetime: { count: 0, value: '0', fixed: false } },
    days: {}
  } as {
    headers: { [title: string]: Header }
    days: {
      [day: string]: {
        ticks: { [pos: string]: Tick }
        items: { [time: string]: { [pos: string]: ITask } }
      }
    }
  }
)

type TRow = { [pos: string]: ITask | Tick }
const rows: TRow[] = []

const dates = getDates(props.cycle.start.toDate(), props.cycle.end.toDate())

dates.forEach((tick) => {
  const ticks = tasksByDay.days[tick.getTime()]?.ticks || {}
  const tickFormatted = tick.toLocaleDateString(locale.value, dayFormat)

  const day: { [pos: string]: Tick } = {
    '0': { title: tickFormatted, key: 'tick' },
    ...ticks
  }

  rows.push(day)

  const times = tasksByDay.days[tick.getTime()]?.items || {}

  rows.push(...Object.values(times || {}))
})

const sortedData = (data: Header[]) =>
  data.sort((a, b) => {
    const aCount = a.count || 0
    const bCount = b.count || 0
    const aTitle = a.title || ''
    const bTitle = b.title || ''

    // First, order by count (descending)
    if (aCount !== bCount) {
      // Sort by count (largest to smallest)
      return bCount - aCount
    } else {
      // If counts are equal, order by title alphabetically
      return aTitle.localeCompare(bTitle)
    }
  })

const [datetime, ...rest] = Object.values(tasksByDay.headers)
const headers: Header[] = [datetime, ...sortedData(rest)]
</script>

<i18n>
{
  "en": {
  },
  "he": {
  }
}
</i18n>
