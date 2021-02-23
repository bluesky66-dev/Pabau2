import React from 'react'
import { render } from '@testing-library/react'

import StaffPerformanceReview from './StaffPerformanceReview'

describe('StaffPerformanceReview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StaffPerformanceReview reviewDate={new Date()} />
    )
    expect(baseElement).toBeTruthy()
  })
})
