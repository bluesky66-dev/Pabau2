import React, { FC } from 'react'
import { Typography, Modal } from 'antd'
import { PauseCircleOutlined, MessageOutlined } from '@ant-design/icons'
import {
  Button,
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  NotificationMessages,
  DropDownButton,
} from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/CommonHeader'
import notificationData from '../../assets/notificationData'
import notificationBannerImage from '../../assets/images/notification-image.png'
import styles from './style.module.less'

const { Title } = Typography

const Index: FC = () => {
  const [hideBanner, setHideBanner] = React.useState(false)
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
    console.log(val)
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
                breadcrumbItems={['Setup', 'Notification Messages']}
              />
              <Title>Notification Messages</Title>
              <p className={styles.clientNotificationsSubtitle}>
                Client notifications are crucial to your business. Use this
                section to customize all outbound notifications (Email/SMS)
              </p>
            </div>
            <div className={styles.clientNotificationsOps}>
              <DropDownButton
                style={{ marginRight: '16px' }}
                menuItems={options}
                onMenuClick={(val) => handleOptionClick(val)}
              >
                Manage Options
              </DropDownButton>
              <Button type="primary">Save Changes</Button>
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
