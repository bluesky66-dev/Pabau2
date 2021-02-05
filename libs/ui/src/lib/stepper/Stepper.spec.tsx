import React from 'react'
import { render } from '@testing-library/react'

import Stepper from './Stepper'

describe('Stepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stepper datasource={[]} step={1} />)
    expect(baseElement).toBeTruthy()
  })
})
