import React, { useState } from 'react'
import { Breadcrumb, Layout, NotificationBanner, TabMenu } from '@pabau/ui'
import { Typography } from 'antd'
import {
  PaymentProcessingOverview,
  PabauPay,
  CardTerminal,
} from '../../../components/Setup/PaymentProcessing'
import notificationBannerImage from '../../../assets/images/notification-image-lab-page.png'
import styles from './index.module.less'

const { Title } = Typography
export function PaymentProcessing() {
  const [hideBanner, setHideBanner] = useState(false)
  return (
    <Layout>
      <NotificationBanner
        title="Integrated card payments with no-show protection"
        desc="Say goodbye to no-shows and late cancellations with remove charging of penaity fees. Let clients securely save payment details to Fresha for effortiess in-app payment."
        imgPath={notificationBannerImage}
        allowClose={true}
        setHide={[hideBanner, setHideBanner]}
        buttonText="Start Now"
        buttonClass={styles.buttonNotification}
      />
      <div className={styles.mainContent}>
        <div className={styles.pageTop}>
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Payment Processing', path: '' },
              ]}
            />
            <Title>Payment Processing</Title>
          </div>
        </div>
        <TabMenu menuItems={['Overview', 'Pabau Pay', 'Card Terminal']}>
          <PaymentProcessingOverview />
          <PabauPay />
          <CardTerminal />
        </TabMenu>
      </div>
    </Layout>
  )
}
export default PaymentProcessing
