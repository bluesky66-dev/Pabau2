/* eslint-disable react/display-name */
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
import { medicalFormData, medicalFormPreviewProps } from './mock'
import treatmentType from '../../assets/images/form-type/treatment.svg'
import styles from './Custom.module.less'

interface MedicalFormVersion {
  currentVersion: string
  history: {
    [key: string]: VersionItem[]
  }
}

interface MedicalFormItem {
  name: string
  formType: string
  createdAt: string
  version: MedicalFormVersion
  status: string
  index?: number | string
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

interface CustomProps {
  data?: MedicalFormItem[]
}

const defaultData: MedicalFormItem[] = medicalFormData

const Custom: FC<CustomProps> = ({ data }) => {
  const [showVersions, setShowVersions] = useState(false)
  const [currentItem, setCurrentItem] = useState<MedicalFormItem>()
  const [medicalFormitems, setMedicalFormItems] = useState<MedicalFormItem[]>(
    defaultData
  )
  const columns = [
    {
      dataIndex: 'sort',
      className: 'drag-visible align-center',
      render: () => <DragHandle />,
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'formType',
      title: 'Type',
      dataIndex: 'formType',
      render: (formType, rowData) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={treatmentType} height="16px" alt="treatment type" />
          <span style={{ paddingLeft: '8px' }}>{formType}</span>
        </div>
      ),
    },
    {
      key: 'createdAt',
      title: 'Created Date',
      dataIndex: 'createdAt',
    },
    {
      key: 'version',
      title: 'Version',
      dataIndex: 'version',
      render: (version, rowData) => (
        <span
          onClick={() => {
            setCurrentItem(rowData)
            setShowVersions(true)
          }}
        >
          {version.currentVersion}
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <Button className={statusValues[status].class}>
          {statusValues[status].title}
        </Button>
      ),
    },
    {
      title: '',
      key: 'operation',
      width: 160,
      render: (val, item) => (
        <div className={styles.tableOperations}>
          {item.index === currentItem?.index && (
            <div>
              <MedicalFormPreview {...medicalFormPreviewProps} />
              <DotButton menuList={menuList} />
            </div>
          )}
        </div>
      ),
    },
  ]
  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(medicalFormitems),
        oldIndex,
        newIndex
      ).filter((el) => !!el)
      setMedicalFormItems(newData)
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
    const index = medicalFormitems.findIndex(
      (x) => x.index === restProps['data-row-key']
    )
    return <SortableItem index={index} {...restProps} />
  }

  useEffect(() => {
    setMedicalFormItems(data || defaultData)
  }, [data])

  return (
    <div className={styles.customContainer}>
      {currentItem && (
        <VersionHistory
          currentVersion={currentItem.version.currentVersion}
          history={currentItem.version.history}
          visible={showVersions}
          onVisibleChange={(val) => setShowVersions(val)}
        />
      )}
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
