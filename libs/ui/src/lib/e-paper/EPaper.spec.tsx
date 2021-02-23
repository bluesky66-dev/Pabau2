import React from 'react'
import { render } from '@testing-library/react'

import EPaper from './EPaper'

describe('EPaper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EPaper />)
    expect(baseElement).toBeTruthy()
  })
})
