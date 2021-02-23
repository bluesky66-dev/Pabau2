import React from 'react'
import { render } from '@testing-library/react'

import ReportsPermissions from './ReportsPermissions'

describe('ReportsPermissions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportsPermissions />)
    expect(baseElement).toBeTruthy()
  })
})
