import React from 'react'
import { render } from '@testing-library/react'
import { reviews, execellentData, averageData, reviewData, title } from './mock'

import ReviewSlider from './ReviewSlider'

describe('ReviewSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReviewSlider
        title={title}
        execellentData={execellentData}
        averageData={averageData}
        reviewData={reviewData}
        reviews={reviews}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
