import React, { FC } from 'react'
import { Typography } from 'antd'
import { Table, InventoryLabel } from '@pabau/ui'
import { ShopOutlined } from '@ant-design/icons'

import { Products as ProductsData } from './mock'

const ProductsColumns = [
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
    title: 'Product Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Retail',
    dataIndex: 'retail',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'status',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { status }) => (
      <InventoryLabel labelType={status.toLowerCase()} />
    ),
  },
]

const Products: FC = () => {
  const { Text, Paragraph } = Typography

  return (
    <div>
      <Table
        draggable
        pagination={false}
        columns={ProductsColumns}
        dataSource={ProductsData as never[]}
      />
      <div style={{ margin: 24 }}>
        <Paragraph type="secondary">
          SHOWING <Text>3</Text> RESULTS FROM <Text>3</Text>
        </Paragraph>
      </div>
    </div>
  )
}

export default Products
