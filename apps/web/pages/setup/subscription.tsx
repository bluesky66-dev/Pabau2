import React, { FC } from 'react'

import { Card, Typography, Table, Input } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { Breadcrumb, TabMenu, Button } from '@pabau/ui'

import { InvoiceData } from '../../mocks/Subscriptions'

import Layout from '../../components/Layout/Layout'

const Subscription: FC = () => {
  const { Title } = Typography
  const { Search } = Input

  const invoiceColumns = [
    {
      title: 'Invoice Date',
      dataIndex: 'date',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Invoice',
      dataIndex: 'number',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: '',
      dataIndex: 'buttonGp',
      className: 'drag-visible',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (text, record) =>
        record.buttonGp && (
          <div>
            <Button>Email</Button>
            <Button>
              <EyeOutlined />
              Preview
            </Button>
          </div>
        ),
    },
  ]

  const prepareInvoiceContent = () => {
    return (
      <div>
        <Table
          pagination={false}
          columns={invoiceColumns}
          dataSource={InvoiceData}
        />
      </div>
    )
  }

  return (
    <Layout>
      <Card>
        <div style={{ width: '100%' }}>
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: '/setup' },
                { breadcrumbName: 'Subscription', path: '' },
              ]}
            />
            <Title>Pabau Subscription</Title>
          </div>
          <div>
            <Search
              placeholder={'Search in Custom'}
              allowClear
              enterButton
              onSearch={(val) => console.log('search', val)}
            />
          </div>
        </div>
        <TabMenu
          tabPosition={'top'}
          menuItems={[
            'Invoice Activity',
            'Billing Details',
            'Account Information',
          ]}
        >
          {prepareInvoiceContent()}
          <div>Details</div>
          <div>Information</div>
        </TabMenu>
      </Card>
    </Layout>
  )
}

export default Subscription
