import React, { FC, useEffect, useState } from 'react'
import { Table } from 'antd'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { MenuOutlined } from '@ant-design/icons'
import styles from './dragfeature.module.less'
import { TableProps } from 'antd/es/table'
export interface DragProps {
  dragVisible?: boolean
}

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

export const DragFeature: FC<TableProps<never> & DragProps> = ({ dataSource = [], ...props }) => {
  const [tableData, setTableData]: any = useState(dataSource)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = array_move(tableData, oldIndex, newIndex)
      setTableData(newData)
    }
  }

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = tableData.findIndex((x) => x.key === restProps['data-row-key'])
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

  const DragHandle = SortableHandle(() => (
    <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
  ))

  const renderSortHandler = (props) => {
    let dragColumn = {
      title: '',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: function renderDragHandle() {
        return <DragHandle />
      },
    }
    if (props.dragVisible && props.dataSource) {
      props.columns.unshift(dragColumn)
    }
    return props.columns
  }

  return (
    <Table
      {...props}
      pagination={false}
      dataSource={tableData}
      columns={renderSortHandler(props)}
      rowKey="key"
      className={styles.dragTable}
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  )
}
