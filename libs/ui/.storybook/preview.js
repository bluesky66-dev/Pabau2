import '../src/assets/fonts/fonts.css'
import 'react-phone-input-2/lib/style.css'
import 'react-google-places-autocomplete/dist/index.min.css'
require('../src/styles/antd.less')
import { withI18next } from 'storybook-addon-i18next'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { addDecorator } from '@storybook/react'

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
