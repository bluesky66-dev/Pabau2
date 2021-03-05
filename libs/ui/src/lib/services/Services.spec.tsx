import React from 'react'
import { render } from '@testing-library/react'

import Services from './Services'

describe('Services', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Services />)
    expect(baseElement).toBeTruthy()
  })
})
