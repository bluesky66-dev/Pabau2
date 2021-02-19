import '../src/assets/fonts/fonts.css'
import 'react-phone-input-2/lib/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { withI18next } from 'storybook-addon-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { addDecorator } from '@storybook/react'
import { languages } from '@pabau/i18n'

require('../src/styles/antd.less')

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: languages,
  })

addDecorator(
  withI18next({
    i18n,
    languages: {
      en: 'English',
      fr: 'French',
      de: 'German',
    },
  })
)
