import React from 'react'
import { render } from '@testing-library/react'

import Passcode from './Passcode'

describe('Passcode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Passcode />)
    expect(baseElement).toBeTruthy()
  })
})
