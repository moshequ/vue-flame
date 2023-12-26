import { onRequest } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'

// http://localhost:5001/demo-vueflame/us-central1/helloWorld?text=Moshe
export const helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true })
  response.send(`${request.query.text} Hello from Vueflame!`)
})
