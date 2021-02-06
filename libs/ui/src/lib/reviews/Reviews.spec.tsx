import React from 'react'
import { render } from '@testing-library/react'

import Reviews from './Reviews'

describe('Reviews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reviews />)
    expect(baseElement).toBeTruthy()
  })
})
