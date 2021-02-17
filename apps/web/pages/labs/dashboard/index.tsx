import React, { FC, ReactNode, useState, useEffect } from 'react'
import {
  NotificationBanner,
  Pagination,
  Button,
  Breadcrumb,
  SetupSearchInput,
  Table,
} from '@pabau/ui'
import { Popover, Radio } from 'antd'
import { InboxOutlined, FilterOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../../setup/CommonHeader'
import ProcessingIcon from './assets/ProcessingIcon'
import SendIcon from './assets/SendIcon'
import notificationImage from '../../../assets/images/Illustration.svg'
import styles from './index.module.less'

interface TitleCard {
  title: string
  subTitle: string
  className?: string
  icon: ReactNode
}
const Tab: FC<TitleCard> = ({ title, subTitle, className, icon }) => {
  return (
    <div className={styles.tab}>
      <div className={className}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export const Index: FC = () => {
  const [filter, setIsActive] = useState(null)
  const [topBannerVisibility, setTopBannerVisibility] = useState(true)
  const [isLoading] = useState(false)
  const [dataSource, setDataSource] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [paginateData, setPaginateData] = useState({
    total: 14,
    offset: 0,
    limit: 10,
    currentPage: 1,
    showingRecords: 10,
  })

  const schema: Schema = {
    full: 'Labs Details',
    short: 'Details',
    fullLower: 'labs details',
    fields: {
      checkBox: {
        short: '',
        shortLower: '',
        cssWidth: '5em',
      },
      labNo: {
        short: 'Lab No',
        shortLower: 'lab no',
      },
      client: {
        short: 'Client',
        shortLower: 'client',
      },
      test: {
        short: 'Test',
        shortLower: 'test',
      },
      requested: {
        short: 'Requested',
        shortLower: 'requested',
      },
      lastUpdate: {
        short: 'Last Update',
        shortLower: 'last update',
      },
      lab: {
        short: 'Lab',
        shortLower: 'lab',
      },
      requester: {
        short: 'Requester',
        shortLower: 'requester',
      },
      public: {
        short: 'Status',
        shortLower: 'status',
        cssWidth: '180px',
      },
    },
  }

  useEffect(() => {
    setDataSource([
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
      {
        labNo: 31239432,
        client: 'James May',
        test: 'DL2L, GCOV',
        requested: '14/01/2021',
        lastUpdate: '14/01/2021',
        lab: 'TD1',
        requester: 'Kim Saunders',
        status: '',
      },
    ])
  }, [])

  const notificationDescription = `We noticed that you are processing lab results, however have not
  setup integration for “UD Labs”. To receive these automatically.
  Just have your lab provider send those results to
  labs+482@pabau.com, and then you can automatically match the results
  against the patient.`
  const notificationImagePath = notificationImage
  const notificationTitle = 'Integrate your Lab'

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }

  const filterContent = (isMobile = false) => (
    <div className={styles.filterContent}>
      {!isMobile && (
        <div>
          <h6>Filter by status</h6>
        </div>
      )}
      <div className={styles.radioTextStyle}>
        <Radio.Group
          onChange={(e) => {
            setIsActive(e.target.value)
          }}
          value={filter}
        >
          <Radio value="processing">
            <span>Processing</span>
          </Radio>
          <Radio value="requested">
            <span>Requested</span>
          </Radio>
          <Radio value="received">
            <span>Received</span>
          </Radio>
          <Radio value="sent">
            <span>Sent</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  )

  return (
    <>
      <CommonHeader />
      <Layout>
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
                  <Breadcrumb
                    breadcrumbItems={[
                      { breadcrumbName: 'Clients', path: '' },
                      { breadcrumbName: 'Labs', path: '' },
                    ]}
                  />
                </div>
                <div className={styles.cardTitle}>
                  <h1>Labs</h1>
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
                <Tab
                  title="12345"
                  subTitle="PROCESSING"
                  className="processing"
                  icon={<ProcessingIcon />}
                />
                <Tab
                  title="12345"
                  subTitle="REQUESTED"
                  className="requested"
                  icon={<SendIcon />}
                />
                <Tab
                  title="12345"
                  subTitle="RECEIVED"
                  className="received"
                  icon={<SendIcon />}
                />
                <Tab
                  title="12345"
                  subTitle="SENT"
                  className="sent"
                  icon={<SendIcon />}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.contentHead}>
                  <div className="heading">
                    <h3>Tablesheet</h3>
                  </div>
                  <div className="inputs-div">
                    <div className="search-input">
                      <SetupSearchInput
                        onChange={(val) => {
                          setSearchTerm(val)
                        }}
                      />
                    </div>
                    <div>
                      <Popover
                        trigger="click"
                        content={filterContent}
                        placement="bottomRight"
                        overlayClassName={styles.filterPopover}
                      >
                        <Button type="default" icon={<FilterOutlined />}>
                          Filter
                        </Button>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className={styles.contentBody}>
                  <div className="tableDiv">
                    <Table
                      loading={isLoading}
                      style={{ height: '100%' }}
                      sticky={{ offsetScroll: 80, offsetHeader: 80 }}
                      pagination={dataSource?.length > 10 ? {} : false}
                      scroll={{ x: true }}
                      draggable={false}
                      dataSource={dataSource?.map((e: { id }) => ({
                        key: e.id,
                        ...e,
                      }))}
                      noDataBtnText={schema.full}
                      noDataText={schema.fullLower}
                      searchTerm={searchTerm}
                      columns={[
                        ...Object.entries(schema.fields).map(([k, v]) => ({
                          dataIndex: k,
                          width: v.cssWidth,
                          title: v.short || v.full,
                          visible: true,
                        })),
                      ]}
                    />
                  </div>
                  <div className="paginationDiv">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
