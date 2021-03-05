import React from 'react'
import { render } from '@testing-library/react'

import SpotlightButtons from './SpotlightButtons'

describe('SpotlightButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpotlightButtons buttons={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
