import React from 'react'
import { render } from '@testing-library/react'

import InventoryLabel from './InventoryLabel'

describe('InventoryLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InventoryLabel />)
    expect(baseElement).toBeTruthy()
  })
})
