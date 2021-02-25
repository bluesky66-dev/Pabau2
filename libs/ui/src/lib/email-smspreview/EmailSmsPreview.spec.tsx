import React from 'react'
import { render } from '@testing-library/react'

import EmailSmsPreview from './EmailSmsPreview'

describe('EmailSmsPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailSmsPreview />)
    expect(baseElement).toBeTruthy()
  })
})
