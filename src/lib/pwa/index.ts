import { globals, options } from './plugins/options'
import { usePwaStore } from './store/pwa'
import init from './store/pwa/utils/init'

function createPwa(overwrites: any = {}) {
  Object.assign(options, overwrites)
  init()
}

export { globals, options, usePwaStore, createPwa }
