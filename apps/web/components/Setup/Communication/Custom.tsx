import React, { FC, useEffect, useState } from 'react'
import {
  Pagination,
  DotButton,
  MedicalFormPreview,
  VersionHistory,
  VersionItem,
  Button,
} from '@pabau/ui'
import { Table } from 'antd'
import {
  MenuOutlined,
  CopyOutlined,
  ShareAltOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
// import arrayMove from 'array-move'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
// import { medicalFormData, medicalFormPreviewProps } from './mock'
import treatmentType from '../../../assets/images/form-type/treatment.svg'

import styles from './Custom.module.less'

interface CustomItem {
  index?: number | string
  name: string
  formType: string
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

/* eslint-disable-next-line */
interface CustomProps {
  items?: CustomItem[]
}

const Custom: FC<CustomProps> = ({ items }) => {
  const [showVersions, setShowVersions] = useState(false)
  const [currentItem, setCurrentItem] = useState<CustomItem>()
  const [medicalFormitems, setMedicalFormItems] = useState<CustomItem[]>([])

  interface TypeColumnProps {
    templateType: string
  }

  const TypeColumn: FC<TypeColumnProps> = ({ templateType }) => {
    return (
      <div className={styles.typeColumn}>
        <img src={treatmentType} alt="Template type" />
        <span>{templateType}</span>
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
      key: 'templateType',
      title: 'Type',
      dataIndex: 'templateType',
      // eslint-disable-next-line react/display-name
      render: (templateType: string) => (
        <TypeColumn templateType={templateType} />
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
        dataSource={medicalFormitems}
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
        // components={{
        //   body: {
        //     wrapper: DraggableContainer,
        //     row: DraggableBodyRow,
        //   },
        // }}
      />
      <div className={styles.paginationContainer}>
        <Pagination showingRecords={10} total={50} />
      </div>
    </div>
  )
}

export default Custom
