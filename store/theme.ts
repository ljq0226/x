import { create } from 'zustand'
import type { Accent, Theme } from '@/types/theme'

interface ThemeState {
  theme: Theme
  accent: Accent
  setTheme: (v: Theme) => void
  setAccent: (v: Accent) => void
}

const ThemeStore = create<ThemeState>(set => ({
  theme: 'light',
  accent: 'blue',
  setTheme: v => set(() => ({
    theme: v,
  })),
  setAccent: v => set(() => ({
    accent: v,
  })),
}))

export default ThemeStore
