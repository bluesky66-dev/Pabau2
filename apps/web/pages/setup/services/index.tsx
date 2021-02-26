import React, { FC, useState } from 'react'
import Layout from '../../../components/Layout/Layout'
import ServicesTab from './components/ServicesTab/ServicesTab'
import { TabMenu, Breadcrumb, Button, Pagination } from '@pabau/ui'
import { Card, Input, Dropdown, Menu, Popover, Radio } from 'antd'
import {
  SearchOutlined,
  FilterOutlined,
  ExportOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'

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
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Units',
    dataIndex: 'unit',
    visible: true,
    sorter: (a, b) => a.unit.length - b.unit.length,
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    visible: true,
    filters: [
      {
        text: '1 per day',
        value: '1 per day',
      },
      {
        text: '6-8 hour',
        value: '6-8 hour',
      },
    ],
    onFilter: (value, record) => record.frequency.indexOf(value) === 0,
    sorter: (a, b) => a.frequency.length - b.frequency.length,
  },
  {
    title: 'Route',
    dataIndex: 'route',
    visible: true,
    sorter: (a, b) => a.route.length - b.route.length,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    visible: true,
    sorter: (a, b) => a.comment.length - b.comment.length,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    visible: true,
  },
]

const Index: FC = () => {
  const [isActive, setIsActive] = useState(null)
  const [paginationState, setPaginationState] = useState(true)
  const [showCreateBtn, setShowCreateBtn] = useState(true)
  const [searchTerm, setSearchTerm] = useState(null)
  const [dataSource, setDataSource] = useState(null)

  const TopTabMenuItems = ['Services', 'Categories', 'Library']

  const onStatusFilter = (val) => {
    setIsActive(val)
    if (val) {
      const activeElems = data.filter((el) => el.is_active === 1)
      setDataSource(activeElems)
    } else {
      const inActiveElems = data.filter((el) => el.is_active === 0)
      setDataSource(inActiveElems)
    }
  }

  const filterContent = (isMobile = false) => (
    <div className={styles.filterContent}>
      {!isMobile && (
        <div className={styles.filterHeader}>
          <h6>Filter by</h6>
          <p>Status</p>
        </div>
      )}
      <div className={styles.radioTextStyle}>
        <Radio.Group
          onChange={(e) => onStatusFilter(e.target.value)}
          value={isActive}
        >
          <Radio value={true}>
            <span>Active</span>
          </Radio>
          <Radio value={false}>
            <span>Inactive</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  )

  const CardHeader = (
    <div className={styles.header}>
      <div className="leftDiv">
        <div>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Third Parties', path: '' },
            ]}
          />
        </div>
        <h3 className={styles.servicesHeading}>Services</h3>
      </div>
      <div className="rightDiv">
        <Input
          className={styles.searchDrugsListing}
          autoFocus
          placeholder="Search"
          suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        {showCreateBtn && (
          <div>
            <Button type="default" size="large">
              <ExportOutlined /> Export
            </Button>
            <Popover
              trigger="click"
              content={filterContent}
              placement="bottomRight"
              overlayClassName={styles.filterPopover}
            >
              <Button className={styles.filterBtn} size="large">
                <FilterOutlined /> Filter
              </Button>
            </Popover>
            <Button type="primary" size="large">
              New Service
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <Layout>
      <div className={styles.servicesMain}>
        <Card title={CardHeader}>
          <div className={styles.body}>
            <TabMenu
              tabPosition="top"
              menuItems={TopTabMenuItems}
              className={styles.topTabMenu}
            >
              <div className={styles.servicesTab}>
                <ServicesTab searchTerm={searchTerm} />
              </div>
              <div></div>
              <div></div>
            </TabMenu>
          </div>
        </Card>
      </div>
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
    </Layout>
  )
}

export default Index
