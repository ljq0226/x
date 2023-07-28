'use client'
import { useTranslation } from 'react-i18next'

function useI18n() {
  const { t } = useTranslation()
  return t
}

export default useI18n
