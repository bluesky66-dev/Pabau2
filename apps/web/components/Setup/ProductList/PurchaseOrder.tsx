import React, { FC, useEffect, useState } from 'react'
import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import { gql } from '@apollo/client'

const LIST_QUERY = gql`
  query purchase_order($offset: Int, $limit: Int, $isActive: Boolean = true) {
    purchase_order(
      offset: $offset
      limit: $limit
      where: { is_active: { _eq: $isActive } }
    ) {
      id
      po_number
      create_date
      supplier
      created_by
      location
      total_cost
      is_active
    }
  }
`

const LIST_AGGREGATE = gql`
  query purchase_order_aggregate {
    purchase_order_aggregate {
      aggregate {
        count
      }
    }
  }
`

const PurchaseOrderColumns = [
  {
    title: 'PO Number',
    dataIndex: 'po_number',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Created Date',
    dataIndex: 'create_date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Supplier',
    dataIndex: 'supplier',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Created By',
    dataIndex: 'created_by',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Total Cost',
    dataIndex: 'total_cost',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
  },
]

const PurchaseOrders: FC = () => {
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

  useEffect(() => {
    if (aggregateData) {
      setPaginateData((d) => ({
        ...d,
        total: aggregateData?.aggregate.count,
        showingRecords: data?.length,
      }))
    }
  }, [data, aggregateData])

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }
  return (
    <div>
      <Table
        loading={loading}
        noDataText="order"
        noDataBtnText="New order"
        columns={PurchaseOrderColumns}
        dataSource={data?.map((d) => ({ ...d, key: d.id }))}
      />
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

export default PurchaseOrders
