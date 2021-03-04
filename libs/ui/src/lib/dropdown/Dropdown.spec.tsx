import React from 'react'
import { render } from '@testing-library/react'

import Dropdown from './Dropdown'

describe('Avatar Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dropdown />)
    expect(baseElement).toBeTruthy()
  })
})
