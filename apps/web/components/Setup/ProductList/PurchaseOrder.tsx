import React, { FC } from 'react'
import { Typography } from 'antd'
import { Table } from '@pabau/ui'

import { PurchaseOrder as PurchaseOrderData } from './mock'

const PurchaseOrderColumns = [
  {
    title: 'PO Number',
    dataIndex: 'PONumber',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Supplier',
    dataIndex: 'supplier',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Total Cost',
    dataIndex: 'totalCost',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
  },
]

const PurchaseOrders: FC = () => {
  const { Text, Paragraph } = Typography

  return (
    <div>
      <Table
        pagination={false}
        columns={PurchaseOrderColumns}
        dataSource={PurchaseOrderData as never[]}
      />
      <div style={{ margin: 24 }}>
        <Paragraph type="secondary">
          SHOWING <Text>3</Text> RESULTS FROM <Text>3</Text>
        </Paragraph>
      </div>
    </div>
  )
}

export default PurchaseOrders
