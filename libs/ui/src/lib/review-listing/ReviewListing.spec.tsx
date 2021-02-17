import React from 'react'
import { render } from '@testing-library/react'

import ReviewListing from './ReviewListing'

describe('ReviewListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewListing />)
    expect(baseElement).toBeTruthy()
  })
})
