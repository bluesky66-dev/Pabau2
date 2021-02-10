import React from 'react'
import { render } from '@testing-library/react'

import ReviewSlider from './ReviewSlider'

describe('ReviewSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewSlider />)
    expect(baseElement).toBeTruthy()
  })
})
