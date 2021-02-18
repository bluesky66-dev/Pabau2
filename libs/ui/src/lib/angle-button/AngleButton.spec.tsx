import React from 'react'
import { render } from '@testing-library/react'

import AngleButton from './AngleButton'

describe('AngleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AngleButton />)
    expect(baseElement).toBeTruthy()
  })
})
