import React from 'react'
import { render } from '@testing-library/react'

import OrderDiscrepancy from './OrderDiscrepancy'

describe('OrderDiscrepancy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderDiscrepancy />)
    expect(baseElement).toBeTruthy()
  })
})
