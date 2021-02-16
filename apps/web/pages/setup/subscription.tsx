import React, { FC } from 'react'

import { Card, Typography, Input } from 'antd'
import { EyeOutlined, FilterOutlined, MailOutlined } from '@ant-design/icons'
import { Breadcrumb, TabMenu, Button, Table } from '@pabau/ui'

import { InvoiceData } from '../../mocks/Subscriptions'

import Layout from '../../components/Layout/Layout'
import Styles from './subscription.module.less'

const Subscription: FC = () => {
  const { Title, Text, Paragraph } = Typography
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
      render: () => (
        <div>
          <Button className={Styles.emailBtn}>
            <MailOutlined /> Email
          </Button>
          <Button>
            <EyeOutlined /> Preview
          </Button>
        </div>
      ),
    },
  ]

  const handleSearch = (val) => {
    console.log('val', val)
  }

  const prepareInvoiceContent = () => {
    return (
      <div>
        <Table
          pagination={false}
          columns={invoiceColumns}
          dataSource={InvoiceData as never[]}
        />
        <div style={{ marginTop: 24 }}>
          <Paragraph type="secondary">
            SHOWING <Text>2</Text> RESULTS FROM <Text>2</Text>
          </Paragraph>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Card>
        <div className={Styles.headerContainer}>
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: '/setup' },
                { breadcrumbName: 'Subscription', path: '' },
              ]}
            />
            <Title>Pabau Subscription</Title>
          </div>
          <div className={Styles.searchBarContainer}>
            <Search
              placeholder={'Search in Custom'}
              allowClear
              onSearch={handleSearch}
              className={Styles.searchBar}
            />
            <Button>
              <FilterOutlined />
              Filter
            </Button>
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
