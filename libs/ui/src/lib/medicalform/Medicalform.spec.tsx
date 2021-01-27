import React from 'react'
import { render } from '@testing-library/react'

import Medicalform from './Medicalform'

describe('Medicalform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Medicalform />)
    expect(baseElement).toBeTruthy()
  })
})
