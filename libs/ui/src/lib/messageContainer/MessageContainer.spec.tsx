import React from 'react'
import { render } from '@testing-library/react'

import MessageContainer from './MessageContainer'

describe('MessageContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessageContainer />)
    expect(baseElement).toBeTruthy()
  })
})
