import React, { FC, useState } from 'react'
import { Card, Typography, Input, Divider } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { Breadcrumb, TabMenu, Button, NotificationBanner } from '@pabau/ui'

import Layout from '../../components/Layout/Layout'
import InvoiceActivity from '../../components/Setup/Subscription/InvoiceActivityList'
import BillingInformation from '../../components/Setup/Subscription/BillingInformation'
import AccountInformation from '../../components/Setup/Subscription/AccountInformation'
import paymentUpdateBanner from '../../assets/images/payment-update-banner.png'
import styles from './subscription.module.less'

const Subscription: FC = () => {
  const { Title } = Typography
  const { Search } = Input
  const [activeTab, setActiveTab] = useState('0')
  const setHide = useState(false)

  const handleSearch = (val) => {
    console.log('val', val)
  }

  return (
    <Layout>
      <NotificationBanner
        title="Payment Method"
        desc="You currently do not have any active payment method on your account. Please update your details in order to regain access."
        allowClose
        showPaymentButton
        showPaymentTitle={'Update Details'}
        showEmail={false}
        setHide={setHide}
        imgPath={paymentUpdateBanner}
      />
      <Card bodyStyle={{ padding: 0 }}>
        <div className={styles.headerContainer}>
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Subscription', path: '' },
              ]}
            />
            <Title>Pabau Subscription</Title>
          </div>
          {activeTab === '0' && (
            <div className={styles.searchBarContainer}>
              <Search
                placeholder={'Search in Custom'}
                allowClear
                onSearch={handleSearch}
                className={styles.searchBar}
              />
              <Button>
                <FilterOutlined />
                Filter
              </Button>
            </div>
          )}
        </div>
        <Divider style={{ margin: 0 }} />
        <TabMenu
          tabPosition={'top'}
          menuItems={[
            'Invoice Activity',
            'Billing Details',
            'Account Information',
          ]}
          onTabClick={(activeKey) => setActiveTab(activeKey)}
        >
          <InvoiceActivity />
          <BillingInformation />
          <AccountInformation />
        </TabMenu>
      </Card>
    </Layout>
  )
}

export default Subscription
