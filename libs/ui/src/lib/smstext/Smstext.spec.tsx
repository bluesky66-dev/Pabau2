import React from 'react'
import { render } from '@testing-library/react'

import Smstext from './Smstext'

describe('Smstext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Smstext />)
    expect(baseElement).toBeTruthy()
  })
})
