import React from 'react'
import { render } from '@testing-library/react'

import BusinessLocation from './BusinessLocation'

describe('BusinessLocation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessLocation />)
    expect(baseElement).toBeTruthy()
  })
})
