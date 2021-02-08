import React from 'react'
import { render } from '@testing-library/react'

import ChatsList from './ChatsList'

describe('ChatsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatsList />)
    expect(baseElement).toBeTruthy()
  })
})
