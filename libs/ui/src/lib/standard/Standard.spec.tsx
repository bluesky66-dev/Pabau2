import React from 'react'
import { render } from '@testing-library/react'

import Standard from './Standard'

describe('Standard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Standard />)
    expect(baseElement).toBeTruthy()
  })
})
