import React from 'react'
import { render } from '@testing-library/react'

import Securitytools from './Securitytools'

describe('Securitytools', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Securitytools />)
    expect(baseElement).toBeTruthy()
  })
})
