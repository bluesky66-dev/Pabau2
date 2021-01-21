import React from 'react'
import { render } from '@testing-library/react'

import Richedit from './Richedit'

describe('Richedit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Richedit />)
    expect(baseElement).toBeTruthy()
  })
})
