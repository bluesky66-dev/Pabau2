import React, { FC, useEffect, useState } from 'react'
import { Table, OrderDiscrepancy, useLiveQuery, Pagination } from '@pabau/ui'
import { gql } from '@apollo/client'

import styles from './productListComponents.module.less'

const StockTakeColumns = [
  {
    title: 'Count NO',
    dataIndex: 'count_no',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'CountedBy',
    dataIndex: 'counted_by',
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
    title: 'Total',
    dataIndex: 'total',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Discrepancies',
    dataIndex: 'object',
    className: 'drag-visible',
    visible: true,
    width: 125,
    // eslint-disable-next-line react/display-name
    render: (_, { discrepanciesUp, discrepanciesDown }) => (
      <span className={styles.row}>
        <span style={{ marginRight: 6 }}>
          <OrderDiscrepancy number={discrepanciesUp} word={1} />
        </span>
        <OrderDiscrepancy number={discrepanciesDown} word={0} />
      </span>
    ),
  },
  {
    title: 'status',
    dataIndex: 'status',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { status }) => (
      <span
        className={
          status === 'Completed'
            ? styles.greenBtn
            : status === 'Cancelled'
            ? styles.redBtn
            : styles.blueBtn
        }
      >
        {status}
      </span>
    ),
  },
]

const LIST_QUERY = gql`
  query stock_take($offset: Int, $limit: Int) {
    stock_take(offset: $offset, limit: $limit) {
      id
      name
      count_no
      start_date
      counted_by
      total
      location
      status
      discrepanciesUp
      discrepanciesDown
    }
  }
`

const LIST_AGGREGATE = gql`
  query stock_take_aggregate {
    stock_take_aggregate {
      aggregate {
        count
      }
    }
  }
`

const StokeTake: FC = () => {
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

  console.log(data)

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
        noDataText="stocks"
        noDataBtnText="new stock"
        columns={StockTakeColumns}
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

export default StokeTake
