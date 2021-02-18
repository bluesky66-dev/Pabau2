import React, { FC, useState, useEffect } from 'react'
import {
  FullScreenReportModal,
  DropDownButton,
  Input,
  Pagination,
} from '@pabau/ui'
import { Card, Table } from 'antd'
import {
  SearchOutlined,
  PauseCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import styles from './ClientMessageReport.module.less'

/* eslint-disable-next-line */
export interface ClientMessageReportProps {
  reportVisibility?: boolean
  reportTitle?: string
  columns: Array<Object>
  apiUrl: string
  start: number
  limit: number
}

export const ClientMessageReport: FC<ClientMessageReportProps> = ({
  reportVisibility,
  reportTitle,
  columns,
  apiUrl,
  start,
  limit,
  ...props
}) => {
  const [modalStatus, setModalStatus] = useState(reportVisibility)
  const [total, setTotal] = useState(0)
  const [dataStart, setDataStart] = useState(start || 0)
  const [loader, setLoader] = useState(false)

  const APIKEY = 'QvSIMgCvR9U-eNOm93rgwXA7eSENQz2jrXmb75tji3'
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetchMessageHistory()
  }, [])

  const fetchMessageHistory = async (page = 1) => {
    try {
      setLoader(true)
      let url = `${apiUrl}?apikey=${APIKEY}&start=${
        (page - 1) * limit
      }&limit=${limit}`
      const response = await fetch(url)
      const json = await response.json()
      await setDataSource(json.messages)
      await setTotal(json.total)
      await setLoader(false)
      await setDataStart(json.start + limit)
    } catch (err) {
      setLoader(false)
    }
  }

  const fetchMore = async (page) => {
    fetchMessageHistory(page)
  }

  const TableHead = (
    <div className={styles.contentHeader}>
      <div className="heading">
        <h1>{reportTitle}</h1>
      </div>
      <div className="search-input">
        <Input type="text" name="search" placeHolderText="Search" />
        <span className="search-icon">
          <SearchOutlined />
        </span>
      </div>
    </div>
  )

  const ReportContent = () => {
    return (
      <div className={styles.contentMain}>
        <div className={styles.tableCard}>
          <Card title={TableHead} bordered={false}>
            <Table
              {...props}
              pagination={false}
              dataSource={dataSource}
              columns={columns}
              rowKey="key"
              tableLayout="auto"
              className={styles.dragTable}
              loading={loader}
            />
          </Card>
        </div>
        <div>
          <Pagination
            showingRecords={dataStart}
            total={total}
            pageSize={limit}
            onChange={(page) => {
              fetchMore(page)
            }}
          />
        </div>
      </div>
    )
  }

  const menuClick = (key) => {
    if (key === 'See message log') {
      setModalStatus((reportVisibility) => !reportVisibility)
    }
  }

  return (
    <div>
      <DropDownButton
        title="Manage Option"
        menuItems={[
          {
            icon: <PauseCircleOutlined />,
            title: 'Pause notifications',
          },
          {
            icon: <MessageOutlined />,
            title: 'See message log',
          },
        ]}
        onClick={() => {}}
        onMenuClick={(key) => {
          menuClick(key)
        }}
        size="large"
        type="default"
      >
        Manage Option
      </DropDownButton>
      <FullScreenReportModal
        visible={modalStatus}
        title={reportTitle}
        content={ReportContent}
        onBackClick={() => {
          setModalStatus((modalStatus) => !modalStatus)
        }}
      />
    </div>
  )
}

export default ClientMessageReport
