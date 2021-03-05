import React, { FC, useState, useEffect, useMemo } from 'react'
import { Avatar, Typography } from 'antd'
import {
  Table,
  useLiveQuery,
  Pagination,
  ButtonLabel,
  Stepper,
} from '@pabau/ui'
import { CheckOutlined } from '@ant-design/icons'
import { gql } from '@apollo/client'

const checkIcon = <CheckOutlined style={{ fontSize: 10 }} />

const DebtColumns = [
  {
    title: '',
    dataIndex: '',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: () => (
      <Avatar
        src="https://explorance.com/wp-content/uploads/explorance/blue-logo.jpg"
        size="small"
      />
    ),
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
      <Typography.Text style={{ color: '#54B2D3' }}>{debtor}</Typography.Text>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { status }) => (
      <ButtonLabel
        style={{ maxWidth: 52, paddingTop: 1 }}
        type={status ? 'info' : 'danger'}
        text={status ? 'Paid' : 'Unpaid'}
      />
    ),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: () => {
      // Age display calculation here
      const age = '<=30 days'
      return <Typography.Text>{age}</Typography.Text>
    },
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { balance, status }) => (
      <Typography.Text type={!status ? 'danger' : undefined}>
        £{balance.toFixed(2)}
      </Typography.Text>
    ),
  },
  {
    title: 'Last Action',
    dataIndex: 'last_action',
    visible: true,
    width: '200px',
    // eslint-disable-next-line react/display-name
    render: (_, { last_action }) => (
      <Stepper
        step={last_action - 1}
        datasource={[
          {
            index: 0,
            step: 1,
            name: '',
            img: checkIcon,
            isActive: true,
          },
          {
            index: 1,
            step: 2,
            name: '',
            img: checkIcon,
            isActive: false,
          },
          {
            index: 2,
            step: 3,
            name: '',
            img: checkIcon,
            isActive: false,
          },
          {
            index: 3,
            step: 4,
            name: '',
            img: checkIcon,
            isActive: false,
          },
        ]}
      />
    ),
  },
]

const LIST_QUERY = gql`
  query debt($offset: Int, $limit: Int) {
    debt(offset: $offset, limit: $limit) {
      id
      invoice_no
      location
      inv_date
      customer
      debtor
      status
      age
      balance
      last_action
    }
  }
`

const LIST_AGGREGATE = gql`
  query debt_aggregate {
    debt_aggregate {
      aggregate {
        count
      }
    }
  }
`

const Debt: FC = () => {
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

  const debts = useMemo(() => data?.map((d) => ({ ...d, key: d.id })), [data])

  return (
    <div>
      <Table
        loading={loading}
        pagination={false}
        columns={DebtColumns}
        dataSource={debts}
      />
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

export default Debt
