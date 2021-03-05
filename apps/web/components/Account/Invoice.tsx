import React, { FC, useState, useEffect, useMemo } from 'react'
import { Table, useLiveQuery, Pagination, ButtonLabel } from '@pabau/ui'
import { Avatar, Typography } from 'antd'
import { gql } from '@apollo/client'

const InvoiceColumns = [
  {
    title: '',
    dataIndex: 'invoice_no',
    visible: true,
    width: '30px',
    // eslint-disable-next-line react/display-name
    render: (_, data) => <Avatar src={data.invoice_logo} size="small" />,
  },
  {
    title: 'Invoice No.',
    dataIndex: 'invoice_no',
    visible: true,
    width: '120px',
    // eslint-disable-next-line react/display-name
    render: (_, { invoice_no }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>
        {invoice_no}
      </Typography.Text>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    visible: true,
  },
  {
    title: 'Inv Date',
    dataIndex: 'inv_date',
    visible: true,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { customer }) => (
      <Typography.Text style={{ color: '#54B2D3' }}>{customer}</Typography.Text>
    ),
  },
  {
    title: 'Debtor',
    dataIndex: 'debtor',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { debtor }) => (
      <Typography.Text style={{ color: '#54B2D3', minWidth: 88 }}>
        {debtor}
      </Typography.Text>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { status }) => (
      <ButtonLabel
        style={{ minWidth: 92, paddingTop: 1 }}
        type={
          status === 'Failed'
            ? 'danger'
            : status === 'Unprocessed'
            ? 'warning'
            : 'info'
        }
        text={status}
      />
    ),
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { payment }) => (
      <ButtonLabel
        style={{ minWidth: 52, paddingTop: 1 }}
        type={payment ? 'success' : 'danger'}
        text={payment ? 'Paid' : 'Unpaid'}
      />
    ),
  },
  {
    title: 'Net',
    dataIndex: 'net',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { net }) => (
      <Typography.Text>£{net.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Vat',
    dataIndex: 'vat',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { vat }) => (
      <Typography.Text>£{vat.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Gross',
    dataIndex: 'gross',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { gross }) => (
      <Typography.Text>£{gross.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { paid }) => (
      <Typography.Text>£{paid.toFixed(2)}</Typography.Text>
    ),
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { balance, payment }) => (
      <Typography.Text type={payment ? undefined : 'danger'}>
        £{balance.toFixed(2)}
      </Typography.Text>
    ),
  },
]

const LIST_QUERY = gql`
  query invoices($offset: Int, $limit: Int) {
    invoices(offset: $offset, limit: $limit) {
      id
      invoice_no
      invoice_logo
      location
      inv_date
      customer
      status
      payment
      net
      vat
      gross
      debtor
      paid
      balance
    }
  }
`

const LIST_AGGREGATE = gql`
  query invoices_aggregate {
    invoices_aggregate {
      aggregate {
        count
      }
    }
  }
`

const Invoice: FC = () => {
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

  const invoices = useMemo(() => data?.map((d) => ({ ...d, key: d.id })), [
    data,
  ])

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

  return (
    <section>
      <Table
        key={loading?.toString()}
        loading={loading}
        pagination={false}
        columns={InvoiceColumns}
        dataSource={invoices}
      />
      <Pagination
        showingRecords={paginateData.showingRecords}
        defaultCurrent={1}
        total={paginateData.total}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        onChange={onPaginationChange}
      />
    </section>
  )
}

export default Invoice
