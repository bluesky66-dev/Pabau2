import React from 'react'
import { render } from '@testing-library/react'

import HighChart from './HighChart'

describe('HighChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HighChart />)
    expect(baseElement).toBeTruthy()
  })
})
