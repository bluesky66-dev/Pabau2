import React from 'react'
import { render } from '@testing-library/react'

import ChatInput from './ChatInput'

describe('ChatInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatInput />)
    expect(baseElement).toBeTruthy()
  })
})
