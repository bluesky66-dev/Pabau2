import React from 'react'
import { render } from '@testing-library/react'

import ReviewWrite from './ReviewWrite'

describe('ReviewWrite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewWrite />)
    expect(baseElement).toBeTruthy()
  })
})
