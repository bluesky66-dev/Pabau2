import React from 'react'
import { render } from '@testing-library/react'

import Epaper from './Epaper'

describe('Epaper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Epaper />)
    expect(baseElement).toBeTruthy()
  })
})
