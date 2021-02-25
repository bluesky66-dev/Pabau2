import React, { FC } from 'react'
import { Typography } from 'antd'
import { Table } from '@pabau/ui'
import { ShopOutlined } from '@ant-design/icons'

import { Supplier } from './mock'

const SupplierColumns = [
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '120px',
  },
  {
    title: '',
    dataIndex: 'test',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: () => <ShopOutlined style={{ color: '#B8B8C0', fontSize: 16 }} />,
    width: '64px',
  },
  {
    title: 'Supplier Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Products Assigned',
    dataIndex: 'productsAssigned',
    className: 'drag-visible',
    visible: true,
  },
]

const Suppliers: FC = () => {
  const { Text, Paragraph } = Typography

  return (
    <div>
      <Table
        draggable
        pagination={false}
        columns={SupplierColumns}
        dataSource={Supplier as never[]}
      />
      <div style={{ margin: 24 }}>
        <Paragraph type="secondary">
          SHOWING <Text>3</Text> RESULTS FROM <Text>3</Text>
        </Paragraph>
      </div>
    </div>
  )
}

export default Suppliers
