import React, { FC, PropsWithChildren, useState } from 'react'
import { Drawer, Image } from 'antd'
import './notification.less'
import { CloseOutlined } from '@ant-design/icons'
import AppointmentSVG from '../../../assets/images/notification.svg'
import ReportSVG from '../../../assets/images/notification-report.svg'
import LeadSVG from '../../../assets/images/notification-lead.svg'

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

      {notificationData.map((notify, index) => {
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
                      <div className="appointment-align">
                        <div className="appointment-logo flex ">
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
                        <div className="appointment-time">
                          <p className="text-md gray-text-color">{dayNotify.notificationTime}</p>
                        </div>
                      </div>
                      <div className="appointment-remove">
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
    </Drawer>
  )
}

export default PabauNotification
