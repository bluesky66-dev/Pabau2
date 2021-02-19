import React, { FC, useState, MouseEvent } from 'react'
import { Badge, Col, Layout, Row } from 'antd'
import { BellOutlined, MailOutlined } from '@ant-design/icons'
import styles from './Header.module.less'
import {
  Dropdown as AvatarDropDown,
  QuickCreate,
  NotificationDrawer,
  Logo,
} from '@pabau/ui'
import { Search } from './search/Search'
import PabauMessages from './messages/Messages'
import classNames from 'classnames'
import AppointmentSVG from '../../assets/images/notification.svg'
import ReportSVG from '../../assets/images/notification-report.svg'
import LeadSVG from '../../assets/images/notification-lead.svg'
import ReviewSVG from '../../assets/images/review.svg'
import CampaignSVG from '../../assets/images/campaign.svg'
import NewsletterSVG from '../../assets/images/newsletter.svg'
import RequestSVG from '../../assets/images/request.svg'
import ReferSVG from '../../assets/images/refer.svg'
const AntHeader = Layout.Header

const notifications = [
  {
    Today: [
      {
        notificationTime: '3:00 PM',
        notificationType: 'Appointment',
        notificationTypeIcon: AppointmentSVG,
        title: 'Cancelled appointment',
        desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        read: false,
      },
      {
        notificationTime: '1:20 PM',
        notificationType: 'Appointment',
        notificationTypeIcon: AppointmentSVG,
        title: 'Cancelled appointment',
        desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        read: true,
      },
    ],
  },
  {
    Yesterday: [
      {
        notificationTime: '1:20 PM',
        notificationType: 'Report',
        notificationTypeIcon: ReportSVG,
        title: 'New financial report',
        desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        read: false,
      },
      {
        notificationTime: '1:20 PM',
        notificationType: 'Lead',
        notificationTypeIcon: LeadSVG,
        title: 'New lead',
        desc: 'John Smith has enquired about Botox',
        read: true,
      },
      {
        notificationTime: '1:21 PM',
        notificationType: 'review',
        notificationTypeIcon: ReviewSVG,
        title: 'New review delivered',
        desc: 'Olivia Sanders has left a new review',
        read: true,
      },
      {
        notificationTime: '1:13 PM',
        notificationType: 'sms campaign',
        notificationTypeIcon: CampaignSVG,
        title: 'New SMS campaign delivered',
        desc: 'Check out new SMS campaign',
        read: false,
      },
      {
        notificationTime: '12:48 PM',
        notificationType: 'Newsletter campaign',
        notificationTypeIcon: NewsletterSVG,
        title: 'New Newsletter campaign delivered',
        desc: 'Check out new newsletter campaign',
        read: true,
      },
      {
        notificationTime: '12:12 PM',
        notificationType: 'holiday request',
        notificationTypeIcon: RequestSVG,
        title: 'Joe Hickey requests a holiday',
        desc: 'Deny or confirm it',
        read: false,
      },
      {
        notificationTime: '10:42 AM',
        notificationType: 'business refer',
        notificationTypeIcon: ReferSVG,
        title: 'Someone refers into the business',
        desc: 'Click to learn more',
        read: true,
      },
    ],
  },
]

interface P {
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
  onCreateChannel?: (
    name: string,
    description: string,
    isPrivate: boolean
  ) => void
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
}

export const Header: FC<P> = ({
  searchRender,
  onCreateChannel,
  onMessageType,
  ...props
}) => {
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(
    false
  )
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)
  return (
    <>
      <AntHeader
        className={classNames(styles.pabauHeader, styles.mobileViewNone)}
      >
        <div
          style={{
            paddingLeft: '30px',
            paddingRight: '30px',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Row>
            <Col md={6} lg={8}>
              <Logo />
            </Col>
            <Col md={8} lg={8} className={styles.headerSearchCenter}>
              <div style={{ width: '360px' }}>
                {searchRender ? searchRender(<Search />) : <Search />}
              </div>
            </Col>
            <Col md={10} lg={8} className={styles.headerIconEnd}>
              <div className={styles.headerAlign}>
                <Badge count={3} className={styles.badgeCircle}>
                  <BellOutlined
                    className={styles.headerIcon}
                    onClick={() => setNotificationDrawer((e) => !e)}
                  />
                </Badge>
                <Badge count={3} className={styles.badgeCircle}>
                  <MailOutlined
                    className={styles.headerIcon}
                    onClick={() => setMessageDrawer((e) => !e)}
                  />
                </Badge>
                <div>
                  <QuickCreate />
                </div>
                <AvatarDropDown />
              </div>
            </Col>
          </Row>
        </div>
      </AntHeader>

      {openNotificationDrawer && (
        <NotificationDrawer
          openDrawer={openNotificationDrawer}
          closeDrawer={() => setNotificationDrawer((e) => !e)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          notifications={notifications}
        />
      )}
      {openMessageDrawer && (
        <PabauMessages
          openDrawer={openMessageDrawer}
          closeDrawer={() => setMessageDrawer((e) => !e)}
          onCreateChannel={onCreateChannel}
          onMessageType={onMessageType}
        />
      )}
    </>
  )
}

export default Header
