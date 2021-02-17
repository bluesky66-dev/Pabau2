import React from 'react'
import { render } from '@testing-library/react'

import Permission from './Permission'

describe('Permission', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Permission />)
    expect(baseElement).toBeTruthy()
  })
})
