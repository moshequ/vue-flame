import { describe, it, expect, afterAll } from 'vitest'
import { helloWorld } from '../helloWorld'
import firebaseFunctionsTest from 'firebase-functions-test'
import { Response } from 'express'

const { cleanup } = firebaseFunctionsTest()

describe('helloWorld', () => {
  it('should return metadata for a given URL', async () => {
    return new Promise<void>((resolve) => {
      // A fake request object, with req.query.text set to 'Moshe'
      const req = { query: { text: 'Moshe' } }
      // A fake response object, with a send response which asserts that it is called
      // with body 'Moshe Hello from Firebase!'.
      const res = {
        send: (body: string) => {
          expect(body).equal('Moshe Hello from Firebase!')
          resolve()
        }
      }

      helloWorld(req as never, res as Response)
    })
  })

  afterAll(() => {
    cleanup()
  })
})
