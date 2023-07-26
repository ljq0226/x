'use client'
import { Trans, useTranslation } from 'react-i18next'
import useTheme from '@/hooks/useTheme'
import i18n from '@/lib/i18n'

export default function Home() {
  const lngs: any = {
    en: { nativeName: 'English' },
    zh: { nativeName: '中文' },
  }
  const { t } = useTranslation()
  const { theme, accent, setTheme, setAccent } = useTheme()
  const accentArr = ['blue', 'orange', 'yellow', 'pink', 'green', 'purple']
  return (
    <div>
      <header>
        <select onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}>
          {Object.keys(lngs).map(lng => (
            <option key={lng} value={lng} label={lngs[lng].nativeName}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
          ))}
        </select>
      </header>

      <p>
        {t('welcome')}
      </p>

      <Trans i18nKey="author">
        作者是: <code>{theme}</code>
      </Trans>
      <div className="underline">test</div>
      <button onClick={() => {
        if (theme === 'light')
          setTheme('dark')
        else
          setTheme('light')
      }}>修改 theme</button>
      <br />

      theme:{theme}
      <br />
      accent:{accent}
      <div className="text-main-accent">
        asd
      </div>
      {
        accentArr.map((item: any) => {
          return (
            <div key={item}>
              <button className="" onClick={() => {
                setAccent(item)
              }}>{item}</button>
            </div>
          )
        })
      }

    </div>
  )
}
