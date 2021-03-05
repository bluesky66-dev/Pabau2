import React, { FC } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import ClientNotification from '../../../components/ClientNotification/index'
import CommonNotificationHeader from '../../../components/ClientNotification/CommonNotificationHeader'

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
            path: 'client-notifications/connect-registration',
            breadcrumbName: 'Connect registration',
          },
        ]}
        title={'Connect registration'}
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
          'The email the client receives when they register to your Online Booking portal'
        }
        type={'connectRegistration'}
        smsCustom={
          'Account created\n' +
          'Congratulations Sophia, your account has been successfully created. Follow this link to access your online account:\n' +
          'URL://CONNECTURL\n' +
          'Here are your login credentials:\n' +
          'Username: Sophia17\n' +
          'Password: Sophia0193091\n' +
          'Kind regards,\n' +
          'Your friends at The Clinic\n'
        }
      />
    </Layout>
  )
}

export default Index
