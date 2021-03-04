import React, { FC, useEffect, useState } from 'react'
import {
  Pagination,
  // DotButton,
  // MedicalFormPreview,
  // VersionHistory,
  // VersionItem,
  Button,
} from '@pabau/ui'
import { Table } from 'antd'
import {
  MenuOutlined,
  CopyOutlined,
  ShareAltOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import arrayMove from 'array-move'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import { communicationItems } from './mock'
import treatmentType from '../../../assets/images/form-type/communication.svg'

import styles from './Custom.module.less'

interface CustomItem {
  index?: number | string
  name: string
  communicationType: string
  createdAt: string
  status: string
}

const menuList = [
  {
    key: 1,
    icon: <CopyOutlined />,
    label: 'Clone',
  },
  {
    key: 2,
    icon: <ShareAltOutlined />,
    label: 'Share',
  },
  {
    key: 3,
    icon: <DeleteOutlined />,
    label: 'Delete',
  },
]

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))
const SortableItem = SortableElement((props) => <tr {...props} />)
const SortContainer = SortableContainer((props) => <tbody {...props} />)
const defaultItems: CustomItem[] = communicationItems
/* eslint-disable-next-line */
interface CustomProps {
  items?: CustomItem[]
}

const Custom: FC<CustomProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<CustomItem>()
  const [communicationItems, setCommunicationItems] = useState<CustomItem[]>([])

  interface TypeColumnProps {
    communicationType: string
  }

  const TypeColumn: FC<TypeColumnProps> = ({ communicationType }) => {
    return (
      <div className={styles.typeColumn}>
        <img src={treatmentType} alt="Template type" />
        <span>{communicationType}</span>
      </div>
    )
  }

  interface StatusColumnProps {
    status: string
  }

  const StatusColumn: FC<StatusColumnProps> = ({ status }) => {
    return (
      <Button className={statusValues[status].class}>
        {statusValues[status].title}
      </Button>
    )
  }

  const statusValues = {
    active: {
      title: 'Active',
      class: styles.activeBtn,
    },
    inactive: {
      title: 'Inactive',
      class: styles.inactiveBtn,
    },
    require_setup: {
      title: 'Require Setup',
      class: styles.requireSetupBtn,
    },
  }

  const columns = [
    {
      dataIndex: 'sort',
      className: 'drag-visible align-center',
      // eslint-disable-next-line react/display-name
      render: () => <DragHandle />,
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'communicationType',
      title: 'Type',
      dataIndex: 'communicationType',
      // eslint-disable-next-line react/display-name
      render: (communicationType: string) => (
        <TypeColumn communicationType={communicationType} />
      ),
    },
    {
      key: 'createdAt',
      title: 'Created Date',
      dataIndex: 'createdAt',
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      // eslint-disable-next-line react/display-name
      render: (status: string) => <StatusColumn status={status} />,
    },
  ]

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        // eslint-disable-next-line unicorn/prefer-spread
        [].concat(communicationItems),
        oldIndex,
        newIndex
      ).filter((el) => !!el)
      setCommunicationItems(newData)
    }
  }

  const DraggableContainer = (props) => (
    <SortContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  )

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = communicationItems.findIndex(
      (x) => x.index === restProps['data-row-key']
    )
    return <SortableItem index={index} {...restProps} />
  }

  useEffect(() => {
    // setCommunicationItems(items || defaultData)
    setCommunicationItems(items || defaultItems)
  }, [items])

  return (
    <div className={styles.customContainer}>
      {/* {currentItem && (
        <VersionHistory
          currentVersion={currentItem.version.currentVersion}
          history={currentItem.version.history}
          visible={showVersions}
          onVisibleChange={(val) => setShowVersions(val)}
        />
      )} */}
      <Table
        dataSource={communicationItems}
        columns={columns}
        pagination={false}
        rowKey="index"
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: (event) => {
              setCurrentItem(record)
            },
          }
        }}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />
      <div className={styles.paginationContainer}>
        <Pagination showingRecords={10} total={50} />
      </div>
    </div>
  )
}

export default Custom
