import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'
import DropdownButton from './DropdownButton'

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />)
    expect(baseElement).toBeTruthy()
  })

  it('should render dropdown button successfully', () => {
    const { baseElement } = render(<DropdownButton />)
    expect(baseElement).toBeTruthy()
  })
})
