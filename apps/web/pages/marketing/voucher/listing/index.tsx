import React, { FC, useState, useEffect } from 'react'
import Layout from './../../../../components/Layout/Layout'
import {
  SearchOutlined,
  FilterOutlined,
  ApartmentOutlined,
} from '@ant-design/icons'
import { Input } from 'antd'
import {
  TabbedTable,
  Button,
  Breadcrumb,
  VoucherCard,
  Pagination,
  Table,
} from '@pabau/ui'
import VoucherIcon from '../../../../components/Marketing/GiftVouchersList/assets/VocherIcon'
import { Card, Row, Col } from 'antd'
import styles from './index.module.less'

const giftCardSettings = {
  cardWidth: 500,
  backgroundColor1: '#9013FE',
  backgroundColor2: '#BD10E0',
  gradientType: 'linear-gradient',
  borderColor: '#000',
  bookNowButton: true,
  buttonLabel: 'Book Now',
  dotMenuShow: true,

  voucherType: '',
  voucherNum: 100001,
  voucherPrice: 100,
  voucherPriceLabel: 'Voucher Value',
  voucherSoldPrice: 100,
  voucherSoldPriceLabel: 'Sold 5',
  voucherRelation: 'Family',
  voucherRelationLabel: 'Redeem on all services',
  currencyType: '£',
  termsConditions: `
    lorem ipsum, quia dolor sit, amet, consectetur, adipisci
    velit, sed quia non numquam eius modi tempora incidunt, ut
    labore et dolore magnam aliquam quaerat voluptatem.
  `,
}

const data = [
  {
    id: 1,
    key: '1',
    name: 'Paracetamol (Acetominophen)',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 0,
  },
  {
    id: 2,
    key: '2',
    name: 'From a friend',
    unit: 'Mg',
    frequency: 'coffee',
    route: 'Monday, 4 Feb 2019',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 1,
  },
  {
    id: 3,
    key: '3',
    name: 'Instagram',
    unit: 'Mg',
    frequency: 'clock',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 2,
  },
  {
    id: 4,
    key: '4',
    name: 'Imported',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 3,
  },
  {
    id: 5,
    key: '5',
    name: 'Walk-in',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 4,
  },
  {
    id: 6,
    key: '6',
    name: 'Facebook',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 5,
  },
  {
    id: 7,
    key: '7',
    name: 'Fresha',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 6,
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'leftPadding',
    visible: true,
  },
  {
    title: 'Units',
    dataIndex: 'unit',
    visible: true,
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    visible: true,
  },
  {
    title: 'Route',
    dataIndex: 'route',
    visible: true,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'view',
    visible: true,
    width: '150',
    className: 'lastColumn',
    render: function renderTableSource() {
      return (
        <div>
          <Button size="large">View</Button>
        </div>
      )
    },
  },
]

export interface GiftVouchersProps {
  title?: string
}

const GiftVouchers: FC<GiftVouchersProps> = ({ title }) => {
  const tabItems = ['Types', 'Circlulation']
  const [gifts, setGifts] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)
  const [paginationState, setPaginationState] = useState(true)
  const [dataSource, setDataSource] = useState(null)
  const [activeTab, setActiveTab] = useState(tabItems[0])

  const cardHeader = (
    <div className={styles.header}>
      <div className="leftDiv">
        <div>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Gift Vouchers', path: '' },
            ]}
          />
        </div>
        <h3 className={styles.drugsHeading}>Gift Vouchers</h3>
      </div>
      <div className="rightDiv">
        {activeTab === tabItems[0] && (
          <Button type="primary" size="large">
            Add Voucher Type
          </Button>
        )}
        {activeTab === tabItems[1] && (
          <div>
            <Input
              className={styles.searchDrugsListing}
              autoFocus
              placeholder="Search"
              suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
            />
            <Button type="default" size="large">
              <FilterOutlined /> Filter
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  useEffect(() => {
    setGifts([
      { ...giftCardSettings },
      { ...giftCardSettings },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'birthday',
      },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'valentine',
      },
      {
        ...giftCardSettings,
        gradientType: 'radial-gradient',
      },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'flowers',
      },
    ])
    setDataSource(data)
  }, [])

  const onTabChange = (tab) => {
    switch (tabItems[tab]) {
      case tabItems[0]:
        setActiveTab(tabItems[0])
        setPaginationState(false)
        break
      case tabItems[1]:
        setActiveTab(tabItems[1])
        setPaginationState(true)
        break
      default:
        return
    }
  }

  return (
    <Layout>
      <div className={styles.giftVoucherMain}>
        <Card title={cardHeader}>
          <div className={styles.body}>
            <TabbedTable
              tabItems={tabItems}
              onTabChange={(tab) => onTabChange(tab)}
            >
              <div className={styles.types}>
                <Row>
                  {gifts.length > 0 ? (
                    gifts.map((gift, key) => (
                      <Col
                        lg={8}
                        md={12}
                        sm={12}
                        xs={24}
                        key={`col-key-${key * 123}`}
                      >
                        <div className={styles.voucherCard}>
                          <VoucherCard {...gift} />
                        </div>
                      </Col>
                    ))
                  ) : (
                    <div className={styles.noDataContent}>
                      <div className={styles.noDataTableBox}>
                        <div className={styles.noDataTextStyle}>
                          <div className={styles.noDataIcon}>
                            <VoucherIcon />
                          </div>
                          <h2>Add a voucher type</h2>
                          <p>You have no active voucher types</p>
                          <Button
                            className={styles.createTemaplateBtn}
                            type="primary"
                          >
                            {`Add Voucher Type`}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Row>
              </div>
              <div className={styles.tableSheet}>
                <Table
                  draggable={true}
                  columns={columns}
                  searchTerm={searchTerm}
                  noDataText="Circulation"
                  noDataIcon={<ApartmentOutlined />}
                  noDataBtnText="Circulation"
                  scroll={{ x: 'max-content' }}
                  dataSource={dataSource}
                />
              </div>
            </TabbedTable>
          </div>
        </Card>
        {paginationState && (
          <div className={styles.paginationDiv}>
            <Pagination
              showingRecords={dataSource?.length}
              defaultCurrent={1}
              total={dataSource?.length}
              pageSize={10}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default GiftVouchers
