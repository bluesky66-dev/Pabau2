/* eslint-disable */
import React from 'react'
import NotificationBanner from './NotificationBanner'
import icon from '../../assets/images/notification.png'

export default {
  component: NotificationBanner,
  title: 'UI/NotificationBanner',
  args: { title : 'Enable online payment', desc : 'Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.'},
  argTypes: {
    title: { control: { type: 'text' } },
    desc: { control: { type: 'text' } },
    imgPath: { control: {type: 'text'}},
  },
}

const NotificationBannerStory = ({ ...args }) => <NotificationBanner {...args}></NotificationBanner>

export const DefaultNotificationBanner = NotificationBannerStory.bind({})
DefaultNotificationBanner.args = {
  title: 'Enable online payment',
  desc : 'Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.',
  imgPath : icon,
}

