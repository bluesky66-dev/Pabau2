import React from 'react'
import { render } from '@testing-library/react'

import Vacation from './Vacation'

describe('Vacation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vacation from="" to="" />)
    expect(baseElement).toBeTruthy()
  })
})
