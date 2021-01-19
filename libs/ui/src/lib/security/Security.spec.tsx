import React from 'react'
import { render } from '@testing-library/react'

import SecurityScore from './SecurityScore'

describe('Security', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecurityScore />)
    expect(baseElement).toBeTruthy()
  })
})
