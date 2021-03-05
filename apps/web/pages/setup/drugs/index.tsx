import React, { FC, useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import Layout from '../../../components/Layout/Layout'
import {
  TabbedTable,
  Button,
  Table,
  Breadcrumb,
  Pagination,
  LibraryCard,
  LibraryModal,
  useLiveQuery,
} from '@pabau/ui'
import { Card, Input, Row, Col, Popover, Radio } from 'antd'
import {
  SearchOutlined,
  ApartmentOutlined,
  FilterOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'

const LIST_QUERY = gql`
  query library_installers($limit: Int, $libLocation: String) {
    library_installers(
      limit: $limit
      where: { library_location: { _ilike: $libLocation } }
    ) {
      library_name
      library_image
      library_description
      library_location
      library_language
      is_plus
      data
      created_date
      id
    }
  }
`

const fData = [
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

export interface P {
  tableName?: string
}

const Index: FC<P> = ({ ...props }) => {
  const [isActive, setIsActive] = useState(null)
  const [paginationState, setPaginationState] = useState(true)
  const [showCreateBtn, setShowCreateBtn] = useState(true)
  const [searchTerm, setSearchTerm] = useState(null)
  const [dataSource, setDataSource] = useState(null)
  const [libItems, setLibItems] = useState([])
  const [libraryInstaller, setLibraryInstaller] = useState(false)
  const [libraryIntallerData, setLibraryInstallerData] = useState(null)

  const tabItems = ['Drugs', 'Library']

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

  const cardHeader = (
    <div className={styles.header}>
      <div className="leftDiv">
        <div>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Drugs', path: 'drugs' },
            ]}
          />
        </div>
        <h3 className={styles.drugsHeading}>Drugs</h3>
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
              Create Drug
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  const onTabChange = (item: string | number) => {
    switch (item) {
      case tabItems[0]:
        setShowCreateBtn(true)
        setPaginationState(true)
        break
      case tabItems[1]:
        setShowCreateBtn(false)
        setPaginationState(false)
        break
      default:
        return
    }
  }

  const showLibraryInstaller = (item) => {
    setLibraryInstallerData(item)
    setLibraryInstaller((libraryInstaller) => !libraryInstaller)
  }

  const getQueryVariables = () => {
    const queryOptions = {
      variables: {
        limit: 10,
        libLocation: 'drug',
      },
    }
    return queryOptions
  }

  const { data, error, loading } = useLiveQuery(LIST_QUERY, getQueryVariables())

  useEffect(() => {
    setDataSource(fData)
    if (!loading && data) {
      setLibItems(data)
    }
    console.log('D:', data)
  }, [data, error, loading])

  return (
    <Layout>
      <div className={styles.drugsListingMain}>
        <Card title={cardHeader}>
          <div className={styles.body}>
            <TabbedTable
              tabItems={tabItems}
              onTabChange={(key) => onTabChange(tabItems[key])}
            >
              <div className={styles.tableSheet}>
                <Table
                  columns={columns}
                  searchTerm={searchTerm}
                  noDataText="Drug"
                  noDataIcon={<ApartmentOutlined />}
                  noDataBtnText="Drug"
                  scroll={{ x: 'max-content' }}
                  dataSource={dataSource}
                />
              </div>
              <div className={styles.library}>
                <Row>
                  {libItems.length > 0 &&
                    libItems.map((el, key) => (
                      <Col
                        lg={6}
                        md={8}
                        sm={16}
                        xs={24}
                        key={`col-key-${key * 123}`}
                      >
                        <LibraryCard
                          onClick={() => showLibraryInstaller(el)}
                          title={el.library_name}
                          bundleCount={el.data?.length}
                        />
                      </Col>
                    ))}
                </Row>
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
        <Row>
          <Col md={24}>
            {libraryIntallerData && (
              <LibraryModal
                image={
                  libraryIntallerData?.library_image ||
                  'https://wallpaperaccess.com/full/271965.jpg'
                }
                title={libraryIntallerData?.library_name}
                subTitle={libraryIntallerData?.library_description}
                visible={libraryInstaller}
                bundleTypes={libraryIntallerData?.data}
                onClose={() =>
                  setLibraryInstaller((libraryInstaller) => !libraryInstaller)
                }
              />
            )}
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Index
