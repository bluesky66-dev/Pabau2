import React from 'react'
import { render } from '@testing-library/react'

import NewsLetterTile from './NewsletterTile'

describe('NewsLetterTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsLetterTile />)
    expect(baseElement).toBeTruthy()
  })
})
