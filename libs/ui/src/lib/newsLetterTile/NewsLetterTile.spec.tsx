import React from 'react'
import { render } from '@testing-library/react'

import NewsLetterTile from './NewsLetterTile'

describe('NewsLetterTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsLetterTile />)
    expect(baseElement).toBeTruthy()
  })
})
