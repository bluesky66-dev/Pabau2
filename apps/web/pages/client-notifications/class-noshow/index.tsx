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
            path: 'client-notifications/class-noshow',
            breadcrumbName: 'Missed A Class',
          },
        ]}
        title={'Missed A Class'}
        setIndexTab={setIndexTab}
        handleNotificationSubmit={showNotification}
      />
      <ClientNotification
        onSeletedTab={(value) => setSelectedTab(value)}
        hideRequestConfirmationOption={true}
        hideAllowReschedulingOption={true}
        hideAllowCancellationOption={true}
        hideDisplayPolicyOption={true}
        hideMedicalHistoryOption={true}
        hideReminderTimeFrameTabPane={true}
        hideServiceOption={true}
        hideEmployeeNameOption={true}
        standardMessage={
          "this notification automatically sends to clients when they don't show for a class"
        }
        type={'missedAClass'}
        smsCustom={
          'Hi Anna, We had you scheduled today at 11:30 but unfortunately you didn\'t show up.Please get back in touch on <span style="color: #00A1E1;">+4444444444</span> to reschedule.Your friends at The Clinic'
        }
      />
    </Layout>
  )
}

export default Index
