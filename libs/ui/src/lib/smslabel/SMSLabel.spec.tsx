import React from 'react'
import { render } from '@testing-library/react'

import SMSLabel from './SMSLabel'

describe('SMSLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SMSLabel />)
    expect(baseElement).toBeTruthy()
  })
})
