import React, { FC } from 'react'
import { Typography } from 'antd'
import { Breadcrumb, NotificationBanner, TabMenu } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import styles from './style.module.less'

const { Title } = Typography

const Index: FC = () => {
  return (
    <Layout>
      <NotificationBanner
        title="Non-scheduled appointments found"
        desc="We found 232 scheduled appointments which do not have reminders scheduled. This is usually down to recently imported appointments. Would you like to schedule these?"
      />
      <div className={styles.clientNotificationsContent}>
        <Breadcrumb breadcrumbItems={['Setup', 'Notification Messages']} />
        <Title>Notification Messages</Title>
        <p className={styles.clientNotificationsSubtitle}>
          Client notifications are crucial to your business. Use this section to
          customize all outbound notifications (Email/SMS)
        </p>
        <div className={styles.clientInnerNotifications}>
          <TabMenu
            tabPosition="left"
            menuItems={['Appointments', 'Classes', 'Engagement', 'Other']}
            minHeight="592px"
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </TabMenu>
        </div>
      </div>
    </Layout>
  )
}

export default Index
