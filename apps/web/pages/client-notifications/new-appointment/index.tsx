import React, { FC } from 'react'
import { Notification } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import ClientNotification from '../../../components/ClientNotification/index'
import CommonNotificationHeader from '../CommonNotificationHeader'

enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)

  const showNotification = (email) => {
    if (setIndexTab === 1) {
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
            path: 'client-notifications/new-appointment',
            breadcrumbName: 'New appointment is booked',
          },
        ]}
        title={'New appointment is booked'}
        setIndexTab={setIndexTab}
        handleNotificationSubmit={showNotification}
      />
      <ClientNotification
        onSeletedTab={(value) => setSelectedTab(value)}
        hideMedicalHistoryOption={true}
        hideReminderTimeFrameTabPane={true}
        standardMessage={
          'This notification automatically sends to clients when they book their appointment'
        }
        type={'newAppointment'}
      />
    </Layout>
  )
}

export default Index
