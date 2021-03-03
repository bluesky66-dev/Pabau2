import React from 'react'
import { render } from '@testing-library/react'

import ShareReview from './ShareReview'

describe('ShareReview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShareReview />)
    expect(baseElement).toBeTruthy()
  })
})
