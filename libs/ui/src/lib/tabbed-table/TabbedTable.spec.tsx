import React from 'react'
import { render } from '@testing-library/react'
import { Table } from '@pabau/ui'
import TabbedTable from './TabbedTable'

describe('TabbedTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TabbedTable tabItems={['1', '2']}>
        <Table />
        <Table />
      </TabbedTable>
    )
    expect(baseElement).toBeTruthy()
  })
})
