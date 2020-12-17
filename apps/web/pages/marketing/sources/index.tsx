import React, { FC } from 'react'
import './styles.less'
import { Table } from 'antd'
import { Layout, Button2 as Button } from '@pabau/ui'
import { gql, useMutation, useQuery } from '@apollo/client'

export interface Values {
  id?: string
  name: string
}
export const MARKETING_SOURCE_LIST = gql`
  query MarketingSourceListQuery {
    marketing_source(order_by: { created_at: desc }) {
      __typename
      id
      name
    }
  }
`
export interface MarketingSourceList {
  marketing_source: Values[]
}

const MARKETING_SOURCE_DELETE = gql`
  mutation MarketingSourceDelete($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      id
    }
  }
`

export const Index: FC = () => {
  //const sub = useSubscription(MARKETING_SOURCE_LIST, {})
  const { loading, error, data } = useQuery(MARKETING_SOURCE_LIST)
  const [deleteMutation] = useMutation(MARKETING_SOURCE_DELETE)

  //if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout pageTitle="Marketing Sources" newButtonText="New Source" onNewClicked="new">
      <Table
        loading={loading}
        style={{ height: '100vh' }}
        sticky={true}
        pagination={data?.marketing_source?.length > 10 ? {} : false}
        scroll={{ x: 'max-content' }}
        columns={[
          {
            title: 'name',
            dataIndex: 'name',
            width: 'max',
          },
          {
            title: 'actions',
            width: 'min-content',
            render: ({ id }) => {
              return (
                <Button
                  onClick={() =>
                    deleteMutation({
                      variables: { id },
                      optimisticResponse: {},
                      update: (cache) => {
                        const existing = cache.readQuery<MarketingSourceList>({
                          query: MARKETING_SOURCE_LIST,
                        })
                        cache.writeQuery({
                          query: MARKETING_SOURCE_LIST,
                          data: {
                            marketing_source: existing.marketing_source.filter((t) => t.id !== id),
                          },
                        })
                      },
                    })
                  }
                >
                  Delete
                </Button>
              )
            },
          },
        ]}
        dataSource={data?.marketing_source.map((e) => ({ key: e.id, ...e }))}
      />
    </Layout>
  )
}
export default Index
