import React from 'react'
import { render } from '@testing-library/react'

import TileInputDiv from './TileInputDiv'

describe('TileInputDiv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TileInputDiv />)
    expect(baseElement).toBeTruthy()
  })
})
