import React, { FC } from 'react'
import { Typography } from 'antd'
import { Button, TabMenu, Breadcrumb, Security } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/CommonHeader'
import { securityToolsData, percent } from '../../assets/securityData'
import styles from './index.module.less'

const { Title } = Typography

export const Index: FC = () => {
  const tabMenuItems = ['Details', 'Terminology', 'System', 'Security']
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.businessDetailsContainer}>
          <div className={styles.businessDetailsTop}>
            <div>
              <Breadcrumb breadcrumbItems={['Setup', 'Business Details']} />
              <Title>Business Details</Title>
            </div>
            <div className={styles.businessDetailsOps}>
              <Button type="primary">Save Changes</Button>
            </div>
          </div>
        </div>
        <div className={styles.tabsForDesktop}>
          <TabMenu tabPosition="left" menuItems={tabMenuItems} minHeight="auto">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <Security percent={percent} data={securityToolsData} />
          </TabMenu>
        </div>
        <div className={styles.tabsForMobile}>
          <TabMenu tabPosition="top" menuItems={tabMenuItems} minHeight="auto">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <Security percent={percent} data={securityToolsData} />
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
