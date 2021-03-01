import React, { FC, useState } from 'react'
import { Card, Typography, Input, Divider, Row, Col, Checkbox } from 'antd'
import { FilterOutlined, DownloadOutlined } from '@ant-design/icons'
import { Breadcrumb, TabMenu, Button } from '@pabau/ui'

import Products from '../../components/Setup/ProductList/Products'
import Category from '../../components/Setup/ProductList/Category'
import PurchaseOrder from '../../components/Setup/ProductList/PurchaseOrder'
import StokeTake from '../../components/Setup/ProductList/StokeTake'
import Supplier from '../../components/Setup/ProductList/Supplier'
import Layout from '../../components/Layout/Layout'
import styles from './product-list.module.less'

const newBtnText = ['Product', 'Category', 'Supplier', 'Order', 'Count']

const Subscription: FC = () => {
  const { Title } = Typography
  const { Search } = Input
  const [activeTab, setActiveTab] = useState('0')
  const [showGroups, setShowGroups] = useState(false)

  const handleSearch = (val) => {
    console.log('val', val)
  }

  return (
    <Layout>
      <Card bodyStyle={{ padding: 0 }} style={{ borderBottomWidth: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'ProductList', path: '' },
              ]}
            />
            <Title>Pabau List</Title>
          </Col>
          <Col span={18}>
            <div className={styles.headerRight}>
              <Search
                className={styles.searchBar}
                placeholder={'Search in Custom'}
                allowClear
                onSearch={handleSearch}
              />
              {activeTab === '0' && (
                <Button>
                  <DownloadOutlined />
                  Export
                </Button>
              )}
              {(activeTab === '0' ||
                activeTab === '3' ||
                activeTab === '4') && (
                <Button>
                  <FilterOutlined />
                  Filter
                </Button>
              )}
              {activeTab === '1' && (
                <Checkbox
                  value={showGroups}
                  style={{ marginLeft: 16 }}
                  onChange={(e) => setShowGroups(e.target.checked)}
                >
                  Show Groups
                </Checkbox>
              )}
              <Button type="primary">
                New{' '}
                {activeTab === '1' && showGroups
                  ? 'Group'
                  : newBtnText[activeTab]}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Divider style={{ margin: 0 }} />
      <TabMenu
        tabPosition={'top'}
        menuItems={[
          'Products',
          'Category',
          'Supplier',
          'Purchase orders',
          'Stock take ',
        ]}
        onTabClick={(activeKey) => setActiveTab(activeKey)}
        tabBarStyle={{ backgroundColor: '#FFF' }}
      >
        <Products />
        <Category showGroup={showGroups} />
        <Supplier />
        <PurchaseOrder />
        <StokeTake />
      </TabMenu>
    </Layout>
  )
}

export default Subscription
