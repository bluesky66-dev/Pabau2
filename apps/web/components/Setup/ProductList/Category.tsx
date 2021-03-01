import React, { FC, useEffect, useState } from 'react'
import { Card } from 'antd'
import { ShopOutlined } from '@ant-design/icons'
import {
  Notification,
  NotificationType,
  Pagination,
  Table,
  useLiveQuery,
} from '@pabau/ui'
import { gql, useMutation } from '@apollo/client'

interface CategoryListProps {
  showGroup?: boolean
}

const LIST_QUERY = gql`
  query category($isActive: Boolean = true, $offset: Int, $limit: Int) {
    category(
      offset: $offset
      limit: $limit
      order_by: { created_at: desc }
      where: { is_active: { _eq: $isActive } }
    ) {
      id
      name
      order
      productsAssigned
      is_active
      groupName
    }
  }
`

const LIST_AGGREGATE = gql`
  query category_aggregate {
    category_aggregate {
      aggregate {
        count
      }
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_category($id: uuid!, $order: Int) {
    update_category(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const CategoryList: FC<CategoryListProps> = ({ showGroup }) => {
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
        `Error! While updating category order`
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

  const CategoryColumns = [
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
      title: 'Group Name',
      dataIndex: 'groupName',
      className: 'drag-visible',
      visible: showGroup,
    },
    {
      title: 'Category Name',
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

  return (
    <div>
      <Card bodyStyle={{ padding: 0 }} style={{ borderTopWidth: 0 }}>
        <Table
          draggable
          loading={loading}
          noDataText="category"
          noDataBtnText="New Category"
          columns={CategoryColumns}
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

export default CategoryList
