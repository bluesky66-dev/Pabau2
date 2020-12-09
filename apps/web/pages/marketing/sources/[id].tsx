import React, { FC } from 'react'
import './styles.less'
import { Table } from 'antd'
import { Layout } from '@pabau/ui'

const Index: FC = () => (
  <Layout>
    <Table
      style={{ height: '100vh' }}
      sticky={true}
      columns={[
        {
          title: 'name',
          dataIndex: 'name',
        },
      ]}
      dataSource={[
        {
          name: 'William',
        },
      ]}
    />
  </Layout>
)

export default Index
