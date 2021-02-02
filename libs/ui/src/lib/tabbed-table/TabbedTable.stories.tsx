import React from 'react'
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
      if (rowData.isLocked) {
        return val
      } else {
        return val
      }
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'is_active',
    className: 'drag-visible',
  },
]

const TabbedTableStory = ({ ...args }: TabbedTableProps) => (
  <TabbedTable {...args} />
)
export const Basic = TabbedTableStory.bind({})
Basic.args = {
  tabItems: ['Custom', 'Library', 'Triggers'],
  tableData: {
    Custom: { dataSource: data, padlocked: [], draggable: true, columns },
    Library: { dataSource: data, padlocked: [], draggable: true, columns },
    Triggers: { dataSource: data, padlocked: [], draggable: false, columns },
  },
}
