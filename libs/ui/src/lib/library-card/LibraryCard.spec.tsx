import React from 'react'
import { render } from '@testing-library/react'

import LibraryCard from './LibraryCard'

describe('LibraryCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibraryCard />)
    expect(baseElement).toBeTruthy()
  })
})
