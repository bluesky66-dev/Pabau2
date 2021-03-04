import React from 'react'
import { render } from '@testing-library/react'

import VoucherCard from './VoucherCard'

describe('VoucherCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VoucherCard />)
    expect(baseElement).toBeTruthy()
  })
})
