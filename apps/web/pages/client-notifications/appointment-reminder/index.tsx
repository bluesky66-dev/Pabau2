import React, { FC, useRef } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import ClientNotification from '../../../components/ClientNotification/index'
import { renderToString } from 'react-dom/server'
import AppointmentEmailPreview from './email-preview'
import { apiURL } from '../../../baseUrl'
import CommonNotificationHeader from '../CommonNotificationHeader'

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)
  const ref = useRef()

  const showNotification = (val) => {
    if (setIndexTab === 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const propsData = ref?.current?.propsData() || {}
      const {
        requestConfirm,
        allowRescheduling,
        allowCancellation,
        displayPolicy,
        showService,
        showEmployeeName,
        addMedicalHisButton,
        selectLanguage,
        backGroundColor,
        buttonColor,
        informationMessage,
        medicalMessage,
        standardTapIndex,
        activeSocialIcons,
      } = propsData

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': apiURL,
        },
        body: JSON.stringify({
          bodyContent: `${renderToString(
            <AppointmentEmailPreview
              requestConfirm={requestConfirm}
              allowRescheduling={allowRescheduling}
              allowCancellation={allowCancellation}
              displayPolicy={displayPolicy}
              showService={showService}
              showEmployeeName={showEmployeeName}
              addMedicalHisButton={addMedicalHisButton}
              selectLanguage={selectLanguage}
              backGroundColor={backGroundColor}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              medicalMessage={medicalMessage}
              standardTapIndex={standardTapIndex}
              activeSocialIcons={activeSocialIcons}
            />
          )}`,
          email: val,
          subject: 'TEST',
        }),
      }
      fetch(`${apiURL}/notification-email`, requestOptions).then((res) => {
        if (res.status === 201) {
          Notification(NotificationType.success, 'Test Email sent')
        } else {
          Notification(NotificationType.error, 'Test Email failed')
        }
      })
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
            path: 'client-notifications/appointment-reminder',
            breadcrumbName: 'Upcoming appointment reminder',
          },
        ]}
        title={'Upcoming appointment reminder'}
        setIndexTab={setIndexTab}
        handleNotificationSubmit={showNotification}
      />
      <ClientNotification
        ref={ref}
        onSeletedTab={(value) => setSelectedTab(value)}
        standardMessage={
          'the notification automatically sends to clients ahead of their appointment'
        }
      />
    </Layout>
  )
}

export default Index
