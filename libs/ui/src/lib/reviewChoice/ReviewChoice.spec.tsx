import React from 'react'
import { render } from '@testing-library/react'

import ReviewChoice from './ReviewChoice'

describe('ReviewChoice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewChoice />)
    expect(baseElement).toBeTruthy()
  })
})
