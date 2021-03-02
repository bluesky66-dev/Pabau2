import { useTranslation } from 'react-i18next'

export const useTranslationI18 = () => {
  const { t, i18n } = useTranslation('common')

  return {
    t,
    i18n,
  }
}
