import React from 'react'
import { render } from '@testing-library/react'

import Employees from './Employees'

describe('Employees', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Employees employees={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
