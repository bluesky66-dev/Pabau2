import React from 'react'
import { render } from '@testing-library/react'

import WStepper from './WStepper'

describe('WStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WStepper />)
    expect(baseElement).toBeTruthy()
  })
})
