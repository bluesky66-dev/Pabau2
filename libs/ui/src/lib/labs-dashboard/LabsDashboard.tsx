import React, { FC, useState, useEffect } from 'react'
import Processing from './assets/processing.svg'
import Requested from './assets/requested.svg'
import Received from './assets/received.svg'
import Sent from './assets/sent.svg'
import { InboxOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  NotificationBanner,
  Button,
  Input,
  MedicalFilter,
  Pagination,
} from '@pabau/ui'
import { Table } from 'antd'
import styles from './LabsDashboard.module.less'

interface TitleCard {
  title: string
  subTitle: string
  icon: string
  className?: string
}
const Tab: FC<TitleCard> = ({ title, subTitle, icon, className, ...rest }) => {
  return (
    <div className={styles.tab}>
      <div>
        <img src={icon} alt="" width="100%" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export interface BreadcrumbItems {
  breadcrumbName: string
  path: string
}
export interface Columns {
  title: string | number
  dateIndex: string | number
}

/* eslint-disable-next-line */
export interface LabsDashboardProps {
  apiUrl: string
  notification?: boolean
  notificationTitle?: string
  notificationImagePath?: string
  notificationDescription?: string
  breadScrumbs: BreadcrumbItems[]
  pageTitle: string
  tableTitle: string
  columns: Columns[]
}

export const LabsDashboard: FC<LabsDashboardProps> = ({
  apiUrl,
  notification,
  notificationTitle,
  notificationImagePath,
  notificationDescription,
  breadScrumbs,
  pageTitle,
  tableTitle,
  columns,
  ...props
}) => {
  const [topBannerVisibility, setTopBannerVisibility] = useState(notification)
  const [loader, setLoader] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [total, setTotal] = useState(0)
  const [dataStart, setDataStart] = useState(0)
  const APIKEY = 'QvSIMgCvR9U-eNOm93rgwXA7eSENQz2jrXmb75tji3'
  const limit = 10

  useEffect(() => {
    // fetchMessageHistory()
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

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRows(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys: [],
    onChange: onSelectChange,
  }

  return (
    <div className={styles.labsDashboard}>
      {topBannerVisibility && (
        <div className={styles.topBanner}>
          <NotificationBanner
            allowClose
            desc={notificationDescription}
            imgPath={notificationImagePath}
            setHide={[
              false,
              function noRefCheck() {
                setTopBannerVisibility(
                  (topBannerVisibility) => !topBannerVisibility
                )
              },
            ]}
            title={notificationTitle}
          />
        </div>
      )}
      <div className={styles.labsDashboardCard}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.breadScrumb}>
              <Breadcrumb breadcrumbItems={breadScrumbs} />
            </div>
            <div className={styles.cardTitle}>
              <h1>{pageTitle}</h1>
            </div>
          </div>
          <div>
            <Button type="primary" size="large" icon={<InboxOutlined />}>
              Inbox
            </Button>
          </div>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.tabs}>
            <Tab title="12345" subTitle="PROCESSING" icon={Processing} />
            <Tab title="12345" subTitle="REQUESTED" icon={Requested} />
            <Tab title="12345" subTitle="RECEIVED" icon={Received} />
            <Tab title="12345" subTitle="SENT" icon={Sent} />
          </div>

          <div className={styles.content}>
            <div className={styles.contentHead}>
              <div className="heading">
                <h1>{tableTitle}</h1>
              </div>
              <div className="inputs-div">
                <div className="search-input">
                  <Input
                    size="large"
                    type="text"
                    name="search"
                    placeHolderText="Search"
                  />
                  <span className="search-icon">
                    <SearchOutlined />
                  </span>
                </div>
                <div>
                  <MedicalFilter
                    filter={{
                      formtype: {
                        consent: false,
                        epaper: false,
                        labForm: false,
                        medicalHistory: false,
                        presciption: false,
                        treatmentForm: false,
                      },
                      language: 'English (UK)',
                      status: 'require_setup',
                    }}
                    onApply={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className={styles.contentBody}>
              <div className="tableDiv">
                <Table
                  {...props}
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="key"
                  tableLayout="auto"
                  className={styles.dragTable}
                  loading={loader}
                  scroll={{ x: true }}
                  rowSelection={{
                    selectedRowKeys: selectedRows,
                    onChange: onSelectChange,
                  }}
                />
              </div>
              <div className="paginationDiv">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabsDashboard
