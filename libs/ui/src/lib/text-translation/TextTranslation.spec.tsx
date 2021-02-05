import React from 'react'
import { render } from '@testing-library/react'

import TextTranslation from './TextTranslation'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
const en = {
  welcome: {
    title: 'Welcome',
    desc: 'How are you?',
  },
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
    },
  },
})

describe('TextTranslation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <I18nextProvider i18n={i18next}>
        <TextTranslation language={'en'} />
      </I18nextProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
