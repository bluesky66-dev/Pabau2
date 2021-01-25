import React from 'react'
import { render } from '@testing-library/react'

import Formtype from './Formtype'

describe('Formtype', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Formtype />)
    expect(baseElement).toBeTruthy()
  })
})
