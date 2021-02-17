import React from 'react'
import { render } from '@testing-library/react'

import CircleGraph from './CircleGraph'

describe('CircleGraph', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircleGraph />)
    expect(baseElement).toBeTruthy()
  })
})
