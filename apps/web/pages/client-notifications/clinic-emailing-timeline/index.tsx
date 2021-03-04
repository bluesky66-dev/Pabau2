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
            path: 'client-notifications/clinic-emailing-timeline',
            breadcrumbName: 'Clinic Emailing Timeline',
          },
        ]}
        title={'Clinic Emailing Timeline'}
        setIndexTab={setIndexTab}
        handleNotificationSubmit={showNotification}
      />
      <ClientNotification
        onSeletedTab={(value) => setSelectedTab(value)}
        hideReminderTimeFrameTabPane={true}
        hideRequestConfirmationOption={true}
        hideMedicalHistoryOption={true}
        hideAllowReschedulingOption={true}
        hideAllowCancellationOption={true}
        hideDisplayPolicyOption={true}
        hideServiceOption={true}
        hideEmployeeNameOption={true}
        standardMessage={
          'This notification automatically sends to clients when an appointment slot becomes available'
        }
        type={'clinic-emailing-timeline'}
        smsCustom={
          'Dear Sophia,\n\n' +
          'Please find attached your appointment summary.\n\n' +
          'Kind regards,\n' +
          'The Clinic\n'
        }
      />
    </Layout>
  )
}

export default Index
