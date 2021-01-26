import React from 'react'
import { render } from '@testing-library/react'

import Background from './Background'

describe('Background', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Background />)
    expect(baseElement).toBeTruthy()
  })
})
