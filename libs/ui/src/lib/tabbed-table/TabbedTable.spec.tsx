import React from 'react'
import { render } from '@testing-library/react'

import TabbedTable from './TabbedTable'

describe('TabbedTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabbedTable />)
    expect(baseElement).toBeTruthy()
  })
})
