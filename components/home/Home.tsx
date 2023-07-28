'use client'
import useI18n from '@/hooks/useI18n'

function Home() {
  const t = useI18n()
  return (
    <div>
      home
      {t('home')}
    </div>
  )
}

export default Home
