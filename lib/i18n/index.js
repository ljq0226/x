'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// import LanguageDetector from 'i18next-browser-languagedetector'

const ENJSON = require('./en.json')
const ZHJSON = require('./zh-CN.json')

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: ENJSON,
      },
      zh: {
        translation: ZHJSON,
      },
    },
  })

export default i18n
