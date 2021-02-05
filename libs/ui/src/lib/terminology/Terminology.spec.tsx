import React from 'react'
import { render } from '@testing-library/react'

import Terminology from './Terminology'

describe('Terminology', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Terminology />)
    expect(baseElement).toBeTruthy()
  })
})
