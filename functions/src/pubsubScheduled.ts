import { onSchedule, ScheduledEvent } from 'firebase-functions/v2/scheduler'
import * as logger from 'firebase-functions/logger'

const handler = async (event: ScheduledEvent) => {
  logger.log('Hello from scheduled function fired every 1 seconds', event.jobName)
}
export const pubsubScheduled = onSchedule('every 1 seconds', handler)

if (location?.hostname === 'localhost') {
  setInterval(() => {
    return handler({ scheduleTime: new Date().toISOString(), jobName: 'pubsubScheduled' })
  }, 1000)
}
