import { useI18n } from 'vue-i18n'

export const getRules = () => {
  const { t: $t } = useI18n({ useScope: 'global' })

  return {
    required: (value: any): boolean | string => {
      const message = $t('message.requiredField')
      return !!value || value === 0 || message
    }
  }
}
