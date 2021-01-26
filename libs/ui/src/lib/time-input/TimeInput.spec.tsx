import React from 'react'
import { render } from '@testing-library/react'

import TimeInput from './TimeInput'

describe('TimeInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeInput />)
    expect(baseElement).toBeTruthy()
  })
})
