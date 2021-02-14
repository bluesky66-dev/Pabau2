import React from 'react'
import { render } from '@testing-library/react'

import ReadReview from './ReadReview'

describe('ReadReview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReadReview />)
    expect(baseElement).toBeTruthy()
  })
})
