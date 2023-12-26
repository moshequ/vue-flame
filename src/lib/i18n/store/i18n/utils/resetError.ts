import { useI18nStore } from '../index'

export function resetError(error?: any) {
  const store = useI18nStore()
  store.errorCode = error?.code || ''
  store.errorMsg = error?.message || ''
}
