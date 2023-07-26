import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'
import ThemeStore from '@/store/theme'
import type { Accent, Theme } from '@/types/theme'

function useTheme() {
  const [theme, accent, setTheme, setAccent] = ThemeStore(s =>
    [s.theme, s.accent, s.setTheme, s.setAccent]
  , shallow)

  const flipTheme = (theme: Theme) => {
    const root = document.documentElement
    const targetTheme = theme === 'dim' ? 'dark' : theme

    if (targetTheme === 'dark')
      root.classList.add('dark')
    else root.classList.remove('dark')

    root.style.setProperty('--main-background', `var(--${theme}-background)`)
    root.style.setProperty('--main-search-background', `var(--${theme}-search-background)`)
    root.style.setProperty('--main-sidebar-background', `var(--${theme}-sidebar-background)`)
  }
  const flipAccent = (accent: Accent) => {
    const root = document.documentElement
    root.style.setProperty('--main-accent', `var(--accent-${accent})`)
  }

  useEffect(() => {
    flipTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  useEffect(() => {
    flipAccent(accent)
    localStorage.setItem('accent', accent)
  }, [accent])

  return {
    theme, accent, setTheme, setAccent,
  }
}

export default useTheme
