import React, { FC, useState, useEffect } from 'react'
import { Card } from 'antd'
import {
  Table,
  InventoryLabel,
  useLiveQuery,
  Pagination,
  Notification,
  NotificationType,
} from '@pabau/ui'
import { ShopOutlined } from '@ant-design/icons'
import { gql, useMutation } from '@apollo/client'

const LIST_QUERY = gql`
  query product_lists($offset: Int, $limit: Int, $isActive: Boolean = true) {
    product_lists(
      offset: $offset
      limit: $limit
      order_by: { order: asc }
      where: { is_active: { _eq: $isActive } }
    ) {
      id
      name
      category
      cost
      retail
      quantity
      status
      is_active
      order
    }
  }
`

const LIST_AGGREGATE = gql`
  query product_lists_aggregate {
    product_lists_aggregate {
      aggregate {
        count
      }
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_product_lists($id: uuid!, $order: Int) {
    update_product_lists(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

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
  const [paginateData, setPaginateData] = useState({
    total: 0,
    offset: 0,
    limit: 10,
    currentPage: 1,
    showingRecords: 0,
  })

  const { data, loading } = useLiveQuery(LIST_QUERY, {
    variables: {
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })

  const { data: aggregateData } = useLiveQuery(LIST_AGGREGATE)

  const [updateOrderMutation] = useMutation(UPDATE_ORDER_MUTATION, {
    onError(err) {
      console.log(err)
      Notification(
        NotificationType.error,
        `Error! While updating product order`
      )
    },
  })

  useEffect(() => {
    if (aggregateData) {
      setPaginateData((d) => ({
        ...d,
        total: aggregateData?.aggregate.count,
        showingRecords: data?.length,
      }))
    }
  }, [data, aggregateData])

  const updateOrder = async (values) => {
    await updateOrderMutation({
      variables: values,
      optimisticResponse: {},
      update: (proxy) => {
        if (LIST_QUERY) {
          const existing = proxy.readQuery({ query: LIST_QUERY })

          if (existing) {
            const key = Object.keys(existing)[0]
            proxy.writeQuery({
              query: LIST_QUERY,
              data: {
                [key]: [...existing[key], values],
              },
            })
          }
        }
      },
    })
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }

  const onRowClick = (values) => {
    console.log(values)
  }

  return (
    <div>
      <Card bodyStyle={{ padding: 0 }} style={{ borderTopWidth: 0 }}>
        <Table
          draggable
          loading={loading}
          noDataText="product"
          noDataBtnText="New Product"
          columns={ProductsColumns}
          dataSource={data?.map((d) => ({ ...d, key: d.id }))}
          onRowClick={onRowClick}
          updateDataSource={({ newData, oldIndex, newIndex }) => {
            newData = newData.map((d, i) => {
              d.order = data[i].order
              return d
            })
            if (oldIndex > newIndex) {
              for (let i = newIndex; i <= oldIndex; i++) {
                updateOrder(newData[i])
              }
            } else {
              for (let i = oldIndex; i <= newIndex; i++) {
                updateOrder(newData[i])
              }
            }
          }}
        />
      </Card>
      <Pagination
        total={paginateData.total}
        defaultPageSize={10}
        showSizeChanger={false}
        onChange={onPaginationChange}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        showingRecords={paginateData.showingRecords}
      />
    </div>
  )
}

export default Products
