import React, { FC, useState, useEffect } from 'react'
import { FullScreenReportModal, Input, Pagination } from '@pabau/ui'
import { Card, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from './ClientMessageReport.module.less'

export interface ClientMessageReportProps {
  reportVisibility?: boolean
  reportTitle?: string
  columns: []
  apiUrl: string
  start: number
  limit: number
  onClose: () => void
}

export const ClientMessageReport: FC<ClientMessageReportProps> = ({
  reportVisibility,
  reportTitle,
  columns,
  apiUrl,
  start,
  limit,
  onClose,
  ...props
}) => {
  const [modalStatus, setModalStatus] = useState(reportVisibility)
  const [total, setTotal] = useState(0)
  const [dataStart, setDataStart] = useState(start || 0)
  const [loader, setLoader] = useState(false)

  const APIKEY = 'QvSIMgCvR9U-eNOm93rgwXA7eSENQz2jrXmb75tji3'
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    if (modalStatus) {
      fetchMessageHistory()
    }
  }, [modalStatus])

  const fetchMessageHistory = async (page = 1) => {
    setLoader(true)
    const url = `${apiUrl}?apikey=${APIKEY}&start=${
      (page - 1) * limit
    }&limit=${limit}`
    const response = await fetch(url)
    const json = await response.json()
    await setDataSource(json.messages)
    await setTotal(json.total)
    await setLoader(false)
    await setDataStart(json.start + limit)
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

  const closeModal = () => {
    onClose()
    setModalStatus((modalStatus) => !modalStatus)
  }

  return (
    <div>
      <FullScreenReportModal
        visible={modalStatus}
        title={reportTitle}
        content={ReportContent}
        onBackClick={closeModal}
      />
    </div>
  )
}

export default ClientMessageReport
