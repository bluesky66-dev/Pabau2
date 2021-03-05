import React, { FC, useState, useEffect, useMemo } from 'react'
import { Typography } from 'antd'
import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import { gql } from '@apollo/client'

const PaymentColumns = [
  {
    title: 'Payment No.',
    dataIndex: 'payment_no',
    className: 'drag-visible',
    visible: true,
    width: '120px',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Inv Date',
    dataIndex: 'inv_date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Account',
    dataIndex: 'account',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { account }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>{account}</Typography.Text>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { amount }) => (
      <Typography.Text>£{amount.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Payment method',
    dataIndex: 'payment_method',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'User',
    dataIndex: 'user',
    className: 'drag-visible',
    visible: true,
  },
]

const LIST_QUERY = gql`
  query payments($offset: Int, $limit: Int) {
    payments(offset: $offset, limit: $limit) {
      id
      payment_no
      location
      inv_date
      account
      amount
      payment_method
      user
    }
  }
`

const LIST_AGGREGATE = gql`
  query payments_aggregate {
    payments_aggregate {
      aggregate {
        count
      }
    }
  }
`

const Payments: FC = () => {
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

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData((d) => ({ ...d, offset, currentPage }))
  }

  useEffect(() => {
    if (aggregateData) {
      setPaginateData({
        ...paginateData,
        total: aggregateData.aggregate?.count,
        showingRecords: data?.length,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData])

  const payments = useMemo(() => data?.map((d) => ({ ...d, key: d.id })), [
    data,
  ])

  return (
    <div>
      <div style={{ backgroundColor: '#FFF' }}>
        <Table
          loading={loading}
          pagination={false}
          columns={PaymentColumns}
          dataSource={payments}
        />
      </div>
      <Pagination
        showingRecords={paginateData.showingRecords}
        defaultCurrent={1}
        total={paginateData.total}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        onChange={onPaginationChange}
      />
    </div>
  )
}

export default Payments
