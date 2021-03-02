import React, { FC } from 'react'
import { Typography } from 'antd'
import {
  TabMenu,
  Breadcrumb,
  Security,
  System,
  Terminology,
  BusinessDetails,
  BusinessDetailsNotifications,
} from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/common-header'
import styles from './index.module.less'

const { Title } = Typography

export const Index: FC = () => {
  const tabMenuItems = [
    'Details',
    'Terminology',
    'System',
    'Security',
    'Notifications',
  ]
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.businessDetailsContainer}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Business Details', path: '' },
            ]}
          />
          <Title>Business Details</Title>
        </div>
        <div className={styles.tabsForDesktop}>
          <TabMenu tabPosition="left" menuItems={tabMenuItems} minHeight="auto">
            <BusinessDetails />
            <Terminology />
            <System />
            <Security />
            <BusinessDetailsNotifications />
          </TabMenu>
        </div>
        <div className={styles.tabsForMobile}>
          <TabMenu tabPosition="top" menuItems={tabMenuItems} minHeight="auto">
            <BusinessDetails />
            <Terminology />
            <System />
            <Security />
            <BusinessDetailsNotifications />
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
