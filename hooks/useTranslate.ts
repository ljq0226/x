import { useTranslation } from 'react-i18next'

function useTranslate() {
  const { t } = useTranslation()
  return t
}

export default useTranslate
