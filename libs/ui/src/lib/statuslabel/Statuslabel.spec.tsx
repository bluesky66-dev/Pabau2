import React from 'react'
import { render } from '@testing-library/react'

import Statuslabel from './Statuslabel'

describe('Statuslabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Statuslabel />)
    expect(baseElement).toBeTruthy()
  })
})
