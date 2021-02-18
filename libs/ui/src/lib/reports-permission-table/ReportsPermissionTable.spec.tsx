import React from 'react'
import { render } from '@testing-library/react'

import ReportsPermissionTable from './ReportsPermissionTable'

describe('ReportsPermissionTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportsPermissionTable />)
    expect(baseElement).toBeTruthy()
  })
})
