import React, { FC } from 'react'
import './styles.less'
import { Table } from 'antd'
import { Layout } from '@pabau/ui'
import { gql, useSubscription } from '@apollo/client'

const MARKETING_SOURCE_LIST = gql`
  subscription MarketingSourceList {
    marketing_source(order_by: { created_at: desc }) {
      id
      name
    }
  }
`

export const Index: FC = () => {
  const { loading, error, data } = useSubscription(MARKETING_SOURCE_LIST)

  //if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout pageTitle="Marketing Sources" newButtonText="New Source" onNewClicked="new">
      <Table
        loading={loading}
        style={{ height: '100vh' }}
        sticky={true}
        pagination={data?.marketing_source?.length > 10 ? {} : false}
        columns={[
          {
            title: 'name',
            dataIndex: 'name',
          },
        ]}
        dataSource={data?.marketing_source.map((e) => ({ key: e.id, ...e }))}
      />
    </Layout>
  )
}
export default Index
