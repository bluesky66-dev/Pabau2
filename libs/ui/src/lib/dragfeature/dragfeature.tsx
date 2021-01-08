import React, { FC, useState } from 'react'
import { Table, Button } from 'antd'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { MenuOutlined, LockFilled } from '@ant-design/icons'
import { data } from './mock'
import styles from './dragfeature.module.less'

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))

const columns = [
  {
    title: '',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: function renderDragHandle() {
      return <DragHandle />
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    render: function renderSourceName(val, rowData) {
      if (rowData.isLocked) {
        return (
          <>
            {val} &nbsp;&nbsp; <LockFilled />
          </>
        )
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

const SortItem = SortableElement((props) => <tr {...props} className={styles.abc} />)
const SortContainer = SortableContainer((props) => <tbody {...props} />)

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr.map((ele, index) => {
    ele.index = index
    return ele
  })
}

export const DragFeature: FC = () => {
  const [dataSource, setDataSource] = useState(data)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = array_move(dataSource, oldIndex, newIndex)
      setDataSource(newData)
    }
  }

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex((x) => x.index === restProps['data-row-key'])
    return <SortItem index={index} {...restProps} />
  }

  const DraggableContainer = (props) => (
    <SortContainer
      useDragHandle
      helperClass={styles.rowDragging}
      onSortEnd={onSortEnd}
      {...props}
    />
  )

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  )
}
