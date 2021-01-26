import React, { FC } from 'react'
import { Button, Table as AntTable } from 'antd'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Table.module.less'
import { TableProps } from 'antd/es/table'

export interface DragProps {
  draggable?: boolean
  updateDataSource?: ({ newData, oldIndex, newIndex }) => void
}

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))

const SortItem = SortableElement((props) => (
  <tr {...props} className={styles.abc} />
))
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

type P = {
  onRowClick?: (e) => void
} & TableProps<never> &
  DragProps

export const Table: FC<P> = ({
  dataSource = [],
  updateDataSource,
  onRowClick,
  ...props
}) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = array_move(dataSource, oldIndex, newIndex)
      updateDataSource && updateDataSource({ newData, oldIndex, newIndex })
    }
  }

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex(
      (x) => x.key === restProps['data-row-key']
    )
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

  const dragColumn = {
    title: '',
    dataIndex: 'sort',
    width: 64,
    className: 'drag-visible align-center',
    render: function renderDragHandle() {
      return <DragHandle />
    },
  }
  const renderActiveButton = (isActive) => {
    return (
      <Button
        className={isActive ? styles.activeBtn : styles.disableSourceBtn}
        disabled={!isActive}
      >
        {isActive ? 'Active' : 'Inactive'}
      </Button>
    )
  }

  const renderSortHandler = () => {
    if (props && props.columns) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props.columns?.map((col: any) => {
        if (col && col.dataIndex === 'is_active') {
          col.render = renderActiveButton
        }
        return col
      })
    }
    return props.draggable
      ? [{ ...dragColumn }, ...(props.columns || [])]
      : props.columns
  }

  return (
    <AntTable
      {...props}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            console.log(event, record)
            onRowClick?.(record)
          }, // click row
          //   onDoubleClick: (event) => {}, // double click row
          //   onContextMenu: (event) => {}, // right button click row
          //   onMouseEnter: (event) => {}, // mouse enter row
          //   onMouseLeave: (event) => {}, // mouse leave row
        }
      }}
      pagination={false}
      dataSource={dataSource}
      columns={renderSortHandler()}
      rowKey="key"
      className={styles.dragTable}
      locale={{
        emptyText: 'No results found',
      }}
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  )
}
