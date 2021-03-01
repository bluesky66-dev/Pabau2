import React, { FC } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import ClientNotification from '../../../components/ClientNotification/index'
import CommonNotificationHeader from '../CommonNotificationHeader'

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)

  const showNotification = (email) => {
    if (setIndexTab === 1) {
      console.log(email)
      Notification(NotificationType.success, 'Test message sent')
    }
    if (setIndexTab === 2) {
      Notification(NotificationType.success, 'Test SMS sent')
    }
  }

  return (
    <Layout>
      <CommonNotificationHeader
        breadcrumbItems={[
          { path: '', breadcrumbName: 'Setup' },
          {
            path: 'client-notifications',
            breadcrumbName: 'Notification Messages',
          },
          {
            path: 'client-notifications/class-rescheduled',
            breadcrumbName: 'Class rescheduled',
          },
        ]}
        title={'Class rescheduled'}
        setIndexTab={setIndexTab}
        handleNotificationSubmit={showNotification}
      />
      <ClientNotification
        onSeletedTab={(value) => setSelectedTab(value)}
        type={'classReschedule'}
        hideMedicalHistoryOption={false}
        standardMessage={
          'this notification automatically sends to clients when a class is rescheduled'
        }
        hideReminderTimeFrameTabPane={true}
      />
    </Layout>
  )
}

export default Index
