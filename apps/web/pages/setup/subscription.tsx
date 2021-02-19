import React, { FC, useState } from 'react'
import { Card, Typography, Input, Divider } from 'antd'
import { CloseOutlined, FilterOutlined } from '@ant-design/icons'
import { Breadcrumb, TabMenu, Button } from '@pabau/ui'

import Layout from '../../components/Layout/Layout'
import InvoiceActivity from '../../components/Setup/Subscription/InvoiceActivityList'
import BillingInformation from '../../components/Setup/Subscription/BillingInformation'
import AccountInformation from '../../components/Setup/Subscription/AccountInformation'
import paymentUpdateBanner from '../../assets/images/payment-update-banner.png'
import Styles from './subscription.module.less'

const Subscription: FC = () => {
  const { Title, Paragraph, Link } = Typography
  const { Search } = Input
  const [activeTab, setActiveTab] = useState('0')

  const handleSearch = (val) => {
    console.log('val', val)
  }

  return (
    <Layout>
      <div className={Styles.headerBanner}>
        <Paragraph className={Styles.subTitle} style={{ marginBottom: 12 }}>
          Payment Method
        </Paragraph>
        <Paragraph style={{ color: '#3D3D46', width: '60%', marginBottom: 12 }}>
          You currently do not have any active payment method on your account.
          Please update your details in order to regain access.
        </Paragraph>
        <Link>Update details</Link>
        <Button
          size="small"
          className={Styles.closeBtn}
          type="ghost"
          icon={<CloseOutlined size={16} />}
        />
        <img src={paymentUpdateBanner} alt="banner" className={Styles.img} />
      </div>
      <Card bodyStyle={{ padding: 0 }}>
        <div className={Styles.headerContainer}>
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
            <div className={Styles.searchBarContainer}>
              <Search
                placeholder={'Search in Custom'}
                allowClear
                onSearch={handleSearch}
                className={Styles.searchBar}
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
