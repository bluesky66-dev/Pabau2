import React, { FC, useState } from 'react'
import { Table } from '../table/Table'
import {
  CheckCircleTwoTone,
  CloseCircleOutlined,
  InfoCircleOutlined,
  FilterOutlined,
} from '@ant-design/icons'
import { Tooltip, Input } from 'antd'
import { Button } from '../button/Button'
import HighChart from '../high-chart/HighChart'
import styles from './Newsletter.module.less'

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
  PageSize: number
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
  PageSize,
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
      className: 'drag-visible statusbtn',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) => <Button color="#54B2D3">{value}</Button>,
    },
    {
      title: 'Opened',
      dataIndex: 'isOpened',
      key: 'isOpened',
      className: 'drag-visible icon',
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
      className: 'drag-visible icon',
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
      className: 'drag-visible icon',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (value) =>
        value ? (
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            className={styles.checkIcon}
          />
        ) : (
          <CloseCircleOutlined className={styles.checkIcon} />
        ),
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      className: 'drag-visible revenue',
      visible: true,
    },
    {
      title: '',
      dataIndex: 'info',
      key: 'info',
      className: 'infoicon',
      visible: true,
      // eslint-disable-next-line react/display-name
      render: (info) => (
        <Tooltip
          placement="left"
          className={styles.tooltipInfo}
          title={
            <div className={styles.infoTooltip}>
              <p>
                <span>Sent:</span> {info.sent}
              </p>
              <p>
                <span>Delivered:</span> {info.delivered}
              </p>
              <p>
                <span>Opened:</span> {info.opened}
              </p>
              <p>
                <span>Clicked:</span> {info.clicked}
              </p>
              <p>
                <span>Bounced:</span> {info.bounced}
              </p>
            </div>
          }
        >
          <InfoCircleOutlined />{' '}
        </Tooltip>
      ),
    },
  ]

  return (
    <div className={styles.newsletterMainWrapper}>
      <div className={styles.highChartBlock}>
        <HighChart
          ChartTitle={ChartTitle}
          OpensLabel={OpensLabel}
          ClicksLabel={ClicksLabel}
          OpensColor={OpensColor}
          ClicksColor={ClicksColor}
        />
      </div>
      <div className={styles.statisticsSubscribersBlock}>
        <div className={styles.statisticsBlock}>
          <h2>{TilesTitle}</h2>
        </div>
        <div className={styles.subscribersBlock}>
          <div className={styles.head}>
            <h2>{TableTitle}</h2>
            <div className={styles.headSearchFilter}>
              <Search
                placeholder="Search"
                onSearch={(e) => {
                  const currValue = e
                  const filteredData = data.filter((entry) => {
                    return (
                      entry.name
                        .toLowerCase()
                        .includes(currValue.toLowerCase()) ||
                      entry.email
                        .toLowerCase()
                        .includes(currValue.toLowerCase())
                    )
                  })
                  setDataSource(filteredData)
                }}
                style={{ width: 200 }}
              />
              <Button
                color="#54B2D3"
                backgroundColor="white"
                className={styles.filterBtn}
                icon={<FilterOutlined />}
              >
                Filter
              </Button>
            </div>
          </div>
          <div className={styles.subscribersTable}>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              pageSize={PageSize}
              onRow={(record) => ({
                onClick: () => {
                  selectRow(record)
                },
              })}
            />
            <span>
              Showing {PageSize} results from {dataSource.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
