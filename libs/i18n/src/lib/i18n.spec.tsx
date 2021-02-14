import React from 'react'
import { render } from '@testing-library/react'

import I18n from './i18n'

describe('I18n', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<I18n />)
    expect(baseElement).toBeTruthy()
  })
})
