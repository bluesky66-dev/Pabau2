import React from 'react'
import { render } from '@testing-library/react'

import Daily from './Daily'

describe('Daily', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Daily />)
    expect(baseElement).toBeTruthy()
  })
})
