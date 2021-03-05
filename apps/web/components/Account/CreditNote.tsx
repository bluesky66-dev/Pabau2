import React, { FC, useState, useEffect, useMemo } from 'react'
import { Typography } from 'antd'
import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import { gql } from '@apollo/client'

const CreditNoteColumns = [
  {
    title: 'Credit No.',
    dataIndex: 'credit_no',
    visible: true,
    width: '90px',
    // eslint-disable-next-line react/display-name
    render: (_, { credit_no }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>
        {credit_no}
      </Typography.Text>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    visible: true,
  },
  {
    title: 'Credit Date',
    dataIndex: 'credit_date',
    visible: true,
    width: '120px',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { customer }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>{customer}</Typography.Text>
    ),
    ellipsis: true,
  },
  {
    title: 'Debtor',
    dataIndex: 'debtor',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { debtor }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>{debtor}</Typography.Text>
    ),
    ellipsis: true,
  },
  {
    title: 'Invoice No.',
    dataIndex: 'invoice_no',
    visible: true,
    width: '100px',
    // eslint-disable-next-line react/display-name
    render: (_, { invoice_no }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>
        {invoice_no}
      </Typography.Text>
    ),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    visible: true,
    width: '80px',
    // eslint-disable-next-line react/display-name
    render: (_, { total }) => (
      <Typography.Text>£{total.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    visible: true,
  },
]

const LIST_QUERY = gql`
  query credit_notes($offset: Int, $limit: Int) {
    credit_notes(offset: $offset, limit: $limit) {
      id
      credit_no
      invoice_no
      location
      credit_date
      customer
      debtor
      total
      type
    }
  }
`

const LIST_AGGREGATE = gql`
  query credit_notes_aggregate {
    credit_notes_aggregate {
      aggregate {
        count
      }
    }
  }
`

const CreditNotes: FC = () => {
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

  const creditNotes = useMemo(() => data?.map((d) => ({ ...d, key: d.id })), [
    data,
  ])

  return (
    <div>
      <div style={{ backgroundColor: '#FFF' }}>
        <Table
          loading={loading}
          pagination={false}
          columns={CreditNoteColumns}
          dataSource={creditNotes}
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

export default CreditNotes
