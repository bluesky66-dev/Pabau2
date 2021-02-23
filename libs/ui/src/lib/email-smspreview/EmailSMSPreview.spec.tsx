import React from 'react'
import { render } from '@testing-library/react'

import EmailSMSPreview from './EmailSMSPreview'

describe('EmailSMSPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailSMSPreview />)
    expect(baseElement).toBeTruthy()
  })
})
