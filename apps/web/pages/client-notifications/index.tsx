import React, { FC, useState } from 'react'
import { Typography, Modal } from 'antd'
import { PauseCircleOutlined, MessageOutlined } from '@ant-design/icons'
import {
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  NotificationMessages,
  DropDownButton,
  ClientMessageReport,
} from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/CommonHeader'
import notificationData from '../../assets/notificationData'
import notificationBannerImage from '../../assets/images/notification-image.png'
import styles from './style.module.less'

const { Title } = Typography

const APIURL = 'https://api.txtlocal.com/get_history_api/'
const columns = [
  {
    title: 'Time sent',
    dataIndex: 'datetime',
    visible: true,
  },
  {
    title: 'Client',
    dataIndex: 'sender',
    visible: true,
  },
  {
    title: 'Ref',
    dataIndex: 'customID',
    visible: true,
  },
  {
    title: 'Destination',
    dataIndex: 'number',
    visible: true,
  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    visible: true,
  },
  {
    title: 'Type',
    dataIndex: 'id',
    visible: true,
  },
  {
    title: 'Content',
    dataIndex: 'content',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'status',
    visible: true,
  },
]

const Index: FC = () => {
  const [hideBanner, setHideBanner] = React.useState(false)
  const [clientMessageReportStatus, setClientMessageReportStatus] = useState(
    false
  )
  const menuItems = ['Appointments', 'Classes', 'Engagement', 'Other']
  const options = [
    {
      title: 'Pause notifications',
      icon: <PauseCircleOutlined />,
    },
    {
      title: 'See message log',
      icon: <MessageOutlined />,
    },
  ]
  const handleOptionClick = (val) => {
    switch (val) {
      case options[0].title:
        Modal.info({
          content: (
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          ),
          onOk: (): void => {
            return
          },
        })
        break
      case options[1].title:
        setClientMessageReportStatus(
          (clientMessageReportStatus) => !clientMessageReportStatus
        )
        break
      default:
        break
    }
  }
  return (
    <>
      <CommonHeader />
      <Layout>
        <NotificationBanner
          title="Non-scheduled appointments found"
          desc="We found 232 scheduled appointments which do not have reminders scheduled. This is usually down to recently imported appointments. Would you like to schedule these?"
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
                  { breadcrumbName: 'Notification Messages', path: '' },
                ]}
              />
              <Title>Notification Messages</Title>
              <p className={styles.clientNotificationsSubtitle}>
                Client notifications are crucial to your business. Use this
                section to customize all outbound notifications (Email/SMS)
              </p>
            </div>
            <div className={styles.clientNotificationsOps}>
              <DropDownButton
                menuItems={options}
                onMenuClick={(val) => handleOptionClick(val)}
              >
                Manage Options
              </DropDownButton>
              {clientMessageReportStatus && (
                <ClientMessageReport
                  reportVisibility={clientMessageReportStatus}
                  columns={columns}
                  apiUrl={APIURL}
                  reportTitle="Client Messages"
                  start={0}
                  limit={10}
                  onClose={() => {
                    setClientMessageReportStatus(
                      (clientMessageReportStatus) => !clientMessageReportStatus
                    )
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.clientInnerNotifciationsDesktop}>
            <TabMenu tabPosition="left" menuItems={menuItems} minHeight="592px">
              {menuItems.map((item) => (
                <NotificationMessages
                  key={item}
                  notificationData={notificationData[item]}
                />
              ))}
            </TabMenu>
          </div>
          <div className={styles.clientInnerNotifciationsMobile}>
            <TabMenu tabPosition="top" menuItems={menuItems}>
              {menuItems.map((item) => (
                <NotificationMessages
                  key={item}
                  notificationData={notificationData[item]}
                />
              ))}
            </TabMenu>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
