/* eslint-disable */

import { Button } from 'antd'
import styles from './dragfeature.module.less'
import React from 'react'
import { DragFeature } from './dragfeature'
import { data } from './mock'

export default {
  component: DragFeature,
  title: 'DragFeature',
  args: { dragVisible: true },
  argTypes: {
    dragVisible: { control: { type: 'boolean' } },
  },
}

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

const DragFeatureStory = ({ ...args }) => <DragFeature {...args} />

export const dragFeature = DragFeatureStory.bind({})
dragFeature.args = {
  columns,
  dataSource: data,
  dragVisible: true,
}
