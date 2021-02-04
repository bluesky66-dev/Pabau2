import React from 'react'
import NotificationDrawer from './NotificationDrawer'
import AppointmentSVG from '../../assets/images/notification.svg'
import ReportSVG from '../../assets/images/notification-report.svg'
import LeadSVG from '../../assets/images/notification-lead.svg'

export default {
  component: NotificationDrawer,
  title: 'Notification/NotificationDrawer',
  args: {},
  argTypes: {},
}
const NotificationDrawerStory = ({ ...args }) => (
  <NotificationDrawer {...args}></NotificationDrawer>
)

export const NotificationDrawers = NotificationDrawerStory.bind({})
NotificationDrawers.args = {
  notifications: [
    {
      Today: [
        {
          notificationTime: '3:00 PM',
          notificationType: 'Appointment',
          notificationTypeIcon: AppointmentSVG,
          title: 'Cancelled appointment',
          desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        },
        {
          notificationTime: '1:20 PM',
          notificationType: 'Appointment',
          notificationTypeIcon: AppointmentSVG,
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
          notificationTypeIcon: ReportSVG,
          title: 'New financial report',
          desc: 'Your appointment at 17:00 PM with John Smith was cancelled',
        },
        {
          notificationTime: '1:20 PM',
          notificationType: 'Lead',
          notificationTypeIcon: LeadSVG,
          title: 'New lead',
          desc: 'John Smith has enquired about Botox',
        },
        {
          notificationTime: '1:21 PM',
          notificationType: 'review',
          notificationTypeIcon: LeadSVG,
          title: 'New review delivered',
          desc: 'Olivia Sanders has left a new review',
        },
        {
          notificationTime: '1:13 PM',
          notificationType: 'sms campaign',
          notificationTypeIcon: LeadSVG,
          title: 'New SMS campaign delivered',
          desc: 'Check out new SMS campaign',
        },
        {
          notificationTime: '12:48 PM',
          notificationType: 'Newsletter campaign',
          notificationTypeIcon: LeadSVG,
          title: 'New Newsletter campaign delivered',
          desc: 'Check out new newsletter campaign',
        },
        {
          notificationTime: '12:12 PM',
          notificationType: 'holiday request',
          notificationTypeIcon: LeadSVG,
          title: 'Joe Hickey requests a holiday',
          desc: 'Deny or confirm it',
        },
        {
          notificationTime: '10:42 AM',
          notificationType: 'business refer',
          notificationTypeIcon: LeadSVG,
          title: 'Someone refers into the business',
          desc: 'Click to learn more',
        },
      ],
    },
  ],
}
