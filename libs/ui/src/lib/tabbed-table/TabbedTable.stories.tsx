import React, { FC } from 'react'
import { Table } from '@pabau/ui'
import TabbedTable, { TabbedTableProps } from './TabbedTable'
import { data } from './mock'

export default {
  component: TabbedTable,
  title: 'Basics/TabbedTable',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    render: function renderSourceName(val, rowData) {
      return val
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'is_active',
    className: 'drag-visible',
  },
]

export const TabbedTableStory: FC<TabbedTableProps> = ({ ...args }) => (
  <TabbedTable {...args} tabItems={['Custom', 'Library', 'Triggers']}>
    <Table
      dataSource={data}
      padlocked={[]}
      draggable={true}
      columns={columns}
    />
    <Table
      dataSource={data}
      padlocked={[]}
      draggable={true}
      columns={columns}
    />
    <Table
      dataSource={data}
      padlocked={[]}
      draggable={false}
      columns={columns}
    />
  </TabbedTable>
)
