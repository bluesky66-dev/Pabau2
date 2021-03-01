import React, { FC } from 'react'
import Checkbox from '../checkbox/Checkbox'
import { Table } from '../table/Table'
import { data } from './mock'
import {
  CheckCircleTwoTone,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import HighChart from './HighChart'

export const Newsletter: FC = () => {
  const columns = [
    {
      title: <Checkbox />,
      dataIndex: 'isPlus',
      key: 'isPlus',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: () => <Checkbox />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      className: 'drag-visible',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) => <Button color="#54B2D3">{value}</Button>,
    },
    {
      title: 'Opened',
      dataIndex: 'isOpened',
      key: 'isOpened',
      className: 'drag-visible',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) =>
        value ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <CloseCircleOutlined />
        ),
    },
    {
      title: 'Clicked',
      dataIndex: 'isClicked',
      key: 'isClicked',
      className: 'drag-visible',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) =>
        value ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <CloseCircleOutlined />
        ),
    },
    {
      title: 'Booked',
      dataIndex: 'isBooked',
      key: 'isBooked',
      className: 'drag-visible',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) =>
        value ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <CloseCircleOutlined />
        ),
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      className: 'drag-visible',
      visible: true,
    },
    {
      title: '',
      dataIndex: 'info',
      key: 'info',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (info) => (
        <Tooltip
          placement="topLeft"
          title={
            <>
              <p>Sent:{info.sent}</p>
              <p>Delivered: {info.delivered}</p>
              <p>Opened: {info.opened}</p>
              <p>Clicked: {info.clicked}</p>
              <p>Bounced: {info.bounced}</p>
            </>
          }
        >
          <InfoCircleOutlined />{' '}
        </Tooltip>
      ),
    },
  ]

  return (
    <div>
      <HighChart />
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default Newsletter
