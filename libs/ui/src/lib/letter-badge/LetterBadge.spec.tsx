import React from 'react'
import { render } from '@testing-library/react'

import { LetterBadge, LetterBadgeColors } from './LetterBadge'

describe('LetterBadge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LetterBadge color={LetterBadgeColors.blue}>A</LetterBadge>
    )
    expect(baseElement).toBeTruthy()
  })
})
