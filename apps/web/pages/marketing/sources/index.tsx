import { Table } from 'antd'
import { Layout, Button, useLiveQuery } from '@pabau/ui'
import { gql, useMutation } from '@apollo/client'
import { NextPage } from 'next'

export interface Values {
  id?: string
  name: string
}
export interface MarketingSourceList {
  marketing_source: Values[]
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

const MARKETING_SOURCE_DELETE = gql`
  mutation MarketingSourceDelete($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      id
    }
  }
`

export const Index: NextPage = () => {
  const { innerData, error, loading } = useLiveQuery(MARKETING_SOURCE_LIST)
  const [deleteMutation] = useMutation(MARKETING_SOURCE_DELETE)

  if (error) return <p>Error :(</p>

  return (
    <Layout pageTitle="Marketing Sources" newButtonText="New Source" onNewClicked="new">
      <Table
        loading={loading}
        style={{ height: '100vh' }}
        sticky={true}
        pagination={innerData?.length > 10 ? {} : false}
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
        dataSource={innerData?.map((e) => ({ key: e.id, ...e }))}
      />
    </Layout>
  )
}

export default Index
