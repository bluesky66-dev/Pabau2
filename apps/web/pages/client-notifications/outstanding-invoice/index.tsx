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
            path: 'client-notifications/invoice',
            breadcrumbName: 'Outstanding Invoice',
          },
        ]}
        title={'Outstanding Invoice'}
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
          'The default email template you will send with a clients Outstanding invoice attached'
        }
        type={'outstandingInvoice'}
        hideEnablePay={false}
        smsCustom={
          'Hi Anna,\n' +
          'I hope you are well.\n' +
          'I just wanted to drop you a quick note to remind you that 02/03/2021 in respect of our invoice 00001 is due for payment on 31/03/2021.\n' +
          'I would be really grateful if you could confirm that everything is on track for payment.\n' +
          'Best regards,\n' +
          'Rina\n'
        }
      />
    </Layout>
  )
}

export default Index
