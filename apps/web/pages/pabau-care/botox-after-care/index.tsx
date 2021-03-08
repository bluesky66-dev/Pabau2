import React, { FC, useState } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import PabauCare from '../../../components/PabauCare/index'
import CommonPabauCareHeader from '../../../components/PabauCare/CommonPabauCareHeader'

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = useState(1)

  const handleSendEmail = (email) => {
    if (setIndexTab === 1) {
      Notification(NotificationType.success, 'Test message sent')
    }
    if (setIndexTab === 2) {
      Notification(NotificationType.success, 'Test SMS sent')
    }
  }

  return (
    <Layout>
      <CommonPabauCareHeader
        breadcrumbItems={[
          { path: '', breadcrumbName: 'Setup' },
          {
            path: 'pabau-care',
            breadcrumbName: 'Pabau care',
          },
          {
            path: 'pabau-care/botox-after-care',
            breadcrumbName: 'Botox Aftercare',
          },
        ]}
        title={'Botox Aftercare'}
        setIndexTab={setIndexTab}
        handleSendEmail={handleSendEmail}
      />

      <PabauCare onSeletedTab={(value) => setSelectedTab(value)} />
    </Layout>
  )
}

export default Index
