import React from 'react'
import { render } from '@testing-library/react'

import Appointment from './Appointment'

describe('Appointment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Appointment selectLanguage="en" />)
    expect(baseElement).toBeTruthy()
  })
})
