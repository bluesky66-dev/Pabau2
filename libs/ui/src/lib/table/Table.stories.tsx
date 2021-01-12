/* eslint-disable */

import { Button } from 'antd'
import styles from './Table.module.less'
import React, { FC, useState } from 'react'
import { Table } from './Table'
import { data } from './mock'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    render: function renderSourceName(val, rowData) {
      if (rowData.isLocked) {
        return <>{val}</>
      } else {
        return val
      }
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'isActive',
    className: 'drag-visible',
    render: function ActiveBtn() {
      return (
        <Button size="small" className={styles.activeBtn}>
          Active
        </Button>
      )
    },
  },
]

export default {
  component: Table,
  title: 'Table',
  args: {
    draggable: true,
    dataSource: data,
    columns,
  },
  argTypes: {
    draggable: { control: { type: 'boolean' } },
  },
}

const DragFeatureStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }
  return <Table {...args} dataSource={dataSource} updateDataSource={updateDataSource} />
}
export const TableWithDragFeature = DragFeatureStory.bind({})
