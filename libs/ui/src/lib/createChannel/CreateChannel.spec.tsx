import React from 'react'
import { render } from '@testing-library/react'

import CreateChannel from './CreateChannel'

describe('CreateChannel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateChannel />)
    expect(baseElement).toBeTruthy()
  })
})
