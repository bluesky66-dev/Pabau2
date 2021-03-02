import React from 'react'
import { render } from '@testing-library/react'

import System from './System'

describe('System', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<System />)
    expect(baseElement).toBeTruthy()
  })
})
