import React from 'react'
import { render } from '@testing-library/react'

import LabsDashboard from './LabsDashboard'

describe('LabsDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LabsDashboard />)
    expect(baseElement).toBeTruthy()
  })
})
