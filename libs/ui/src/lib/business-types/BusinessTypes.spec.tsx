import React from 'react'
import { render } from '@testing-library/react'

import BusinessTypes from './BusinessTypes'

describe('BusinessTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessTypes />)
    expect(baseElement).toBeTruthy()
  })
})
