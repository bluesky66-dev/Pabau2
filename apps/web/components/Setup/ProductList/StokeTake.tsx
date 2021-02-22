import React, { FC } from 'react'
import { Typography } from 'antd'
import { Table, OrderDiscrepancy } from '@pabau/ui'

import { StokeTake as StokeTakeData } from './mock'
import styles from './productListComponents.module.less'

const StockTakeColumns = [
  {
    title: 'Count NO',
    dataIndex: 'countNO',
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
    dataIndex: 'startDate',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'CountedBy',
    dataIndex: 'countedBy',
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
    render: (_, { discrepancies }) => (
      <span className={styles.row}>
        <span style={{ marginRight: 6 }}>
          <OrderDiscrepancy number={discrepancies.up} word={1} />
        </span>
        <OrderDiscrepancy number={discrepancies.down} word={0} />
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

const StokeTake: FC = () => {
  const { Text, Paragraph } = Typography

  return (
    <div>
      <Table
        pagination={false}
        columns={StockTakeColumns}
        dataSource={StokeTakeData as never[]}
      />
      <div style={{ margin: 24 }}>
        <Paragraph type="secondary">
          SHOWING <Text>3</Text> RESULTS FROM <Text>3</Text>
        </Paragraph>
      </div>
    </div>
  )
}

export default StokeTake
