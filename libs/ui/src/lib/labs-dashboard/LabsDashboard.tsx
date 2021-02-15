import React, { FC, useState } from 'react'
import Processing from './assets/processing.svg'
import Requested from './assets/requested.svg'
import Received from './assets/received.svg'
import Sent from './assets/sent.svg'
import { InboxOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  NotificationBanner,
  Button,
  Input,
  Pagination,
} from '@pabau/ui'
import styles from './LabsDashboard.module.less'

interface TitleCard {
  title: string
  subTitle: string
  icon: string
  className?: string
}
const Tab: FC<TitleCard> = ({ title, subTitle, icon, className, ...rest }) => {
  return (
    <div className={styles.tab}>
      <div>
        <img src={icon} alt="" width="100%" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

/* eslint-disable-next-line */
export interface LabsDashboardProps {}

export const LabsDashboard: FC<LabsDashboardProps> = ({ ...props }) => {
  const [topBannerVisibility, setTopBannerVisibility] = useState(true)

  const breadcrumbItems = [
    {
      breadcrumbName: 'Clients',
      path: '',
    },
    {
      breadcrumbName: 'Labs',
      path: '',
    },
  ]

  return (
    <div className={styles.labsDashboard}>
      {topBannerVisibility && (
        <div className={styles.topBanner}>
          <NotificationBanner
            allowClose
            desc="We noticed that you are processing lab results, however have not
          setup integration for “UD Labs”. To receive these automatically.
          Just have your lab provider send those results to
          labs+482@pabau.com, and then you can automatically match the results
          against the patient."
            imgPath="static/media/notification.8ad6bbd7.png"
            setHide={[
              false,
              function noRefCheck() {
                setTopBannerVisibility(
                  (topBannerVisibility) => !topBannerVisibility
                )
              },
            ]}
            title="Integrate your Lab"
          />
        </div>
      )}
      <div className={styles.labsDashboardCard}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.breadScrumb}>
              <Breadcrumb breadcrumbItems={breadcrumbItems} />
            </div>
            <div className={styles.cardTitle}>
              <h1>Labs</h1>
            </div>
          </div>
          <div>
            <Button type="primary" size="large" icon={<InboxOutlined />}>
              Inbox
            </Button>
          </div>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.tabs}>
            <Tab title="12345" subTitle="PROCESSING" icon={Processing} />
            <Tab title="12345" subTitle="REQUESTED" icon={Requested} />
            <Tab title="12345" subTitle="RECEIVED" icon={Received} />
            <Tab title="12345" subTitle="SENT" icon={Sent} />
          </div>

          <div className={styles.content}>
            <div className={styles.contentHead}>
              <div>
                <h1>Tablesheet</h1>
              </div>
              <div></div>
            </div>
            <div className={styles.contentBody}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabsDashboard
