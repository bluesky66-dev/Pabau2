import React, { FC, PropsWithChildren, useState } from 'react'
import { Drawer, Image } from 'antd'
import './notification.less'
import { CloseOutlined } from '@ant-design/icons'
import AppointmentSVG from '../../../assets/images/notification.svg'
import ReportSVG from '../../../assets/images/notification-report.svg'
import LeadSVG from '../../../assets/images/notification-lead.svg'
import { ReactComponent as Lead1SVG } from '../../../assets/images/lead.svg'
import { ReactComponent as Lead2SVG } from '../../../assets/images/lead1.svg'

export interface NotificationProps {
  openDrawer: boolean
  closeDrawer: () => void
}

export const PabauNotification: FC<NotificationProps> = ({
  openDrawer = false,
  closeDrawer,
}: PropsWithChildren<NotificationProps>) => {
  const [notificationDrawer, setNotificationDrawer] = useState(openDrawer)
  const [notifyTab, setNotifyTab] = useState('Clients')

  const notificationData = [
    {
      Today: [
        {
          notificationTime: '3:00 PM',
          notificationType: 'Appointment',
          title: 'Cancelled appointment',
          desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        },
        {
          notificationTime: '1:20 PM',
          notificationType: 'Appointment',
          title: 'Cancelled appointment',
          desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        },
      ],
    },
    {
      Yesterday: [
        {
          notificationTime: '1:20 PM',
          notificationType: 'Report',
          title: 'New financial report',
          desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        },
        {
          notificationTime: '1:20 PM',
          notificationType: 'Lead',
          title: 'New lead',
          desc: 'John Smith has enquired about Botox',
        },
      ],
    },
  ]

  const notificationLeadsData = [
    {
      Today: [
        {
          leadDate: new Date(),
          title: 'New features to sell vouchers with blase messages',
          desc:
            'Encourage clients and loved ones to treat themselves right in the time for the festive season!',
        },
      ],
    },
    {
      '14 December': [
        {
          leadDate: new Date(),
          title: 'Are you ready for reopening soon?',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lobortis ex eget viverra. Ut viverra non nisi eget viverra.',
        },
      ],
    },
  ]

  const closeDrawerMenu = () => {
    setNotificationDrawer(false)
    closeDrawer()
  }
  return (
    <Drawer
      width={392}
      placement="right"
      closable={false}
      onClose={closeDrawerMenu}
      visible={notificationDrawer}
      className="notification-drawer"
    >
      <div className="space">
        <div className="notification-align">
          <h1> Notifications</h1>
          <CloseOutlined onClick={closeDrawerMenu} />
        </div>
        <div className="notify-tabs top-space-notification">
          <button
            className={`notify-tab-design ${notifyTab === 'Clients' && 'active-tabs'}`}
            onClick={() => setNotifyTab('Clients')}
          >
            Activity
          </button>
          <button
            className={`notify-tab-design ${notifyTab === 'Leads' && 'active-tabs'}`}
            onClick={() => setNotifyTab('Leads')}
          >
            News
          </button>
        </div>
      </div>

      {notifyTab === 'Clients' &&
        notificationData.map((notify, index) => {
          return Object.keys(notify).map((notification) => {
            return (
              <>
                <div className="notification-align today-text-top-space">
                  <h2>{notification}</h2>
                  <CloseOutlined />
                </div>
                {notify[notification].map((dayNotify, index) => {
                  return (
                    <>
                      <div key={index} className="notification-card">
                        <div className="notify-align">
                          <div className="logo flex ">
                            <Image
                              src={
                                dayNotify.notificationType === 'Appointment'
                                  ? AppointmentSVG
                                  : dayNotify.notificationType === 'Report'
                                  ? ReportSVG
                                  : LeadSVG
                              }
                            />
                            <p className="text-sm">{dayNotify.notificationType}</p>
                          </div>
                          <div className="time">
                            <p className="text-md gray-text-color">{dayNotify.notificationTime}</p>
                          </div>
                        </div>
                        <div className="notify-title-desc">
                          <h1>{dayNotify.title}</h1>
                          <p>{dayNotify.desc}</p>
                        </div>
                      </div>
                      <div className="card-border"></div>
                    </>
                  )
                })}
              </>
            )
          })
        })}

      {notifyTab === 'Leads' &&
        notificationLeadsData.map((notify, index) => {
          return Object.keys(notify).map((notification) => {
            return (
              <>
                <div className="notification-align today-text-top-space">
                  <h2>{notification}</h2>
                </div>
                {notify[notification].map((dayNotify, index) => {
                  return (
                    <>
                      <div key={index} className="notification-card">
                        <div className="notify-align">
                          <div className="logo flex">
                            {notification === 'Today' ? <Lead1SVG /> : <Lead2SVG />}
                            <p className="text-sm">{dayNotify.notificationType}</p>
                          </div>
                        </div>
                        <div className="lead-title-desc">
                          <h1>{dayNotify.title}</h1>
                          <p>{dayNotify.desc}</p>
                        </div>
                        <span className="text-md learn-more">Learn more</span>
                      </div>
                      <div className="card-border"></div>
                    </>
                  )
                })}
              </>
            )
          })
        })}
    </Drawer>
  )
}

export default PabauNotification
