import React, { useState } from 'react'
import { Layout, Breadcrumb, NotificationBanner } from '@pabau/ui'
import { Typography } from 'antd'
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
      />
      <div className={styles.clientNotificationsContent}>
        <div className={styles.clientNotificationTop}>
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
      </div>
    </Layout>
  )
}
export default PaymentProcessing
