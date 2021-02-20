import React, { FC, useState } from 'react'
import Layout from '../../../components/Layout/Layout'
import { TabbedTable, Button, Table, Breadcrumb, Pagination } from '@pabau/ui'
import { Card, Input, Row, Col } from 'antd'
import { data } from './mock'
import {
  SearchOutlined,
  ApartmentOutlined,
  FileProtectOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'

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
  const [paginationState, setPaginationState] = useState(true)
  const [searchTerm, setSearchTerm] = useState(null)
  const [dataSource, setDataSource] = useState(null)
  const [libItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const updateDataSource = ({ newData }) => {
    setDataSource(newData)
  }

  const tabItems = ['Tablesheet', 'Library']

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
        <Button type="primary" size="large">
          Create Drug
        </Button>
      </div>
    </div>
  )

  const onTabChange = (key: number | string) => {
    if (Number(key) === 1) {
      setPaginationState(false)
    } else {
      setPaginationState(true)
    }
  }

  setDataSource(data)

  return (
    <Layout>
      <div className={styles.drugsListingMain}>
        <Card title={cardHeader}>
          <div className={styles.body}>
            <TabbedTable tabItems={tabItems} onTabChange={onTabChange}>
              <div className={styles.tableSheet}>
                <Table
                  columns={columns}
                  searchTerm={searchTerm}
                  noDataText="Drug"
                  noDataIcon={<ApartmentOutlined />}
                  noDataBtnText="Drug"
                  scroll={{ x: 'max-content' }}
                  dataSource={dataSource?.map((e: { id: number | string }) => ({
                    key: e.id,
                    ...e,
                  }))}
                  updateDataSource={updateDataSource}
                  downloadBtn={true}
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
                        <div className={styles.libraryCard}>
                          <div>
                            <FileProtectOutlined color="#9292A3;" />
                          </div>
                          <h4>BNF Drug Database</h4>
                          <p>1082 drugs</p>
                        </div>
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
              showingRecords={7}
              defaultCurrent={1}
              total={7}
              pageSize={10}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Index
