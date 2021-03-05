import React from 'react'
import { render } from '@testing-library/react'

import ButtonLabel from './ButtonLabel'

describe('InventoryLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonLabel text="label" />)
    expect(baseElement).toBeTruthy()
  })
})
