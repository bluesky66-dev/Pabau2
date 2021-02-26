import React, { FC, useState, useEffect } from 'react'
import { Table, Avatar } from '@pabau/ui'
import styles from './categories_tab.module.less'

const data = [
  {
    id: 1,
    key: '1',
    service_group: 'Online Consulation',
    total_assigned: '4',
    index: 1,
    is_active: 1,
  },
  {
    id: 2,
    key: '2',
    service_group: 'ML Contour',
    total_assigned: '8',
    index: 2,
    is_active: 0,
  },
  {
    id: 3,
    key: '3',
    service_group: 'ML Contour',
    total_assigned: '12',
    index: 3,
    is_active: 0,
  },
  {
    id: 4,
    key: '4',
    service_group: 'Elemis peptide',
    total_assigned: '5',
    index: 4,
    is_active: 1,
  },
  {
    id: 5,
    key: '5',
    service_group: 'Filler',
    total_assigned: '4',
    index: 5,
    is_active: 1,
  },
  {
    id: 6,
    key: '6',
    service_group: 'Facebook',
    total_assigned: '8',
    index: 6,
    is_active: 0,
  },
  {
    id: 7,
    key: '7',
    service_group: 'Fresha',
    total_assigned: '10',
    index: 7,
    is_active: 1,
  },
]

const columns = [
  {
    title: 'Service Group',
    dataIndex: 'service_group',
    visible: true,
    render: function renderSourceName(val) {
      return (
        <div className={styles.categoryGroup}>
          <span>
            <Avatar name={`${val}`} />
          </span>
          <span>{val}</span>
        </div>
      )
    },
  },
  {
    title: 'Services Assigned',
    dataIndex: 'total_assigned',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    visible: true,
  },
]

export interface CP {
  perPage?: number
  searchTerm?: string
  totalRecords: (total: number) => void
}

const CateogriesTab: FC<CP> = ({
  perPage,
  searchTerm,
  totalRecords,
  ...rest
}) => {
  const [sourceData, setSourceData] = useState(null)

  useEffect(() => {
    setSourceData(data)
    totalRecords(data.length)
  }, [setSourceData, totalRecords])

  return (
    <div className={styles.categoriesTabMain}>
      <Table
        draggable={true}
        dataSource={sourceData?.map((e: { id }) => ({
          key: e.id,
          ...e,
        }))}
        scroll={{ x: 'max-content' }}
        columns={columns}
        pagination={false}
        searchTerm={searchTerm}
        noDataBtnText="Categories"
        noDataText="category"
      />
    </div>
  )
}

export default CateogriesTab
