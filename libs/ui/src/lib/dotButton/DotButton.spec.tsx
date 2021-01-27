import React from 'react'
import { render } from '@testing-library/react'

import DotButton from './DotButton'

describe('DotButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotButton />)
    expect(baseElement).toBeTruthy()
  })
})
