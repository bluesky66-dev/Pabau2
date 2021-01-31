import React from 'react'
import { render } from '@testing-library/react'

import BusinessDetails from './BusinessDetails'

describe('BusinessDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessDetails />)
    expect(baseElement).toBeTruthy()
  })
})
