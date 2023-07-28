'use client'
import useTranslate from '../hooks/useI18n'
import i18n from '@/lib/i18n'

function Lanuage() {
  const lngs: any = {
    en: { nativeName: 'English' },
    zh: { nativeName: '中文' },
  }
  const t = useTranslate()
  return (
    <select onChange={(evt) => {
      i18n.changeLanguage(evt.target.value)
    }}>
      {Object.keys(lngs).map(lng => (
        <option key={lng} value={lng} label={lngs[lng].nativeName}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
      ))}
    </select>
  )
}

export default Lanuage
