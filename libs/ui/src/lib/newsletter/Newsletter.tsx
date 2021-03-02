import React, { FC, useState } from 'react'
import { Table } from '../table/Table'
import {
  CheckCircleTwoTone,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { Tooltip, Input } from 'antd'
import { Button } from '../button/Button'
import HighChart from '../high-chart/HighChart'

const { Search } = Input
export interface NewsletterProps {
  TableTitle: string
  TilesTitle: string
  data: []
  ChartTitle: string
  OpensLabel: string
  ClicksLabel: string
  OpensColor: string
  ClicksColor: string
}
export const Newsletter: FC<NewsletterProps> = ({
  TableTitle,
  TilesTitle,
  data,
  ChartTitle,
  OpensLabel,
  ClicksLabel,
  OpensColor,
  ClicksColor,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [dataSource, setDataSource] = useState(data)

  const onSelectedRowKeysChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const selectRow = (record) => {
    const selectedRowKeys = [...selectedRowKeys]
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1)
    } else {
      selectedRowKeys.push(record.key)
    }
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  }

  const columns = [
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
      render: (value) => (
        <Button color="#54B2D3" backgroundColor="white">
          {value}
        </Button>
      ),
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
      <HighChart
        ChartTitle={ChartTitle}
        OpensLabel={OpensLabel}
        ClicksLabel={ClicksLabel}
        OpensColor={OpensColor}
        ClicksColor={ClicksColor}
      />
      <h2>{TilesTitle}</h2>
      <Search
        placeholder="Search"
        onSearch={(e) => {
          const currValue = e
          const filteredData = data.filter((entry) => {
            return (
              entry.name.includes(currValue) || entry.email.includes(currValue)
            )
          })
          setDataSource(filteredData)
        }}
        style={{ width: 200 }}
      />
      <h2>{TableTitle}</h2>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            selectRow(record)
          },
        })}
      />
    </div>
  )
}

export default Newsletter
