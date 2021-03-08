import { addDecorator } from '@storybook/react'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import 'react-phone-input-2/lib/style.css'
import 'react-quill/dist/quill.snow.css'
import { withI18next } from 'storybook-addon-i18next'
import '../src/assets/fonts/fonts.css'
require('../src/styles/antd.less')

const en = {
  welcome: {
    title: 'Welcome',
    desc: 'How are you?',
  },
}

const de = {
  welcome: {
    title: 'Willkommen',
    desc: 'Wie geht es dir?',
  },
}

const fr = {
  welcome: {
    title: 'Bienvenue',
    desc: 'Comment vas-tu?',
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['en', 'de', 'fr'],
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: en,
      },
      de: {
        common: de,
      },
      fr: {
        common: fr,
      },
    },
  })

addDecorator(
  withI18next({
    i18n,
    languages: {
      en: 'English',
      de: 'German',
      fr: 'French',
    },
  })
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}
