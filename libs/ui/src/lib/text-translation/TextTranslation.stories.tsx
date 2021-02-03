import React, { FC } from 'react'
import TextTranslation from './TextTranslation'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

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

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
    },
    de: {
      common: de,
    },
  },
})

export default {
  component: TextTranslation,
  title: 'Basics/TextTranslation',
  args: {
    language: 'en',
  },
  argTypes: {
    language: { control: { type: 'text' } },
  },
}

interface P {
  language?: string
}

const TextTranslationStory: FC<P> = ({ language }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <TextTranslation language={language} />
    </I18nextProvider>
  )
}
export const ENStory = TextTranslationStory.bind({})
ENStory.args = {
  language: 'en',
}

export const DEStory = TextTranslationStory.bind({})
DEStory.args = {
  language: 'de',
}
