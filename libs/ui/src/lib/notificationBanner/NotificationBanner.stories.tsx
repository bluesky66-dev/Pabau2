import React from 'react'
import NotificationBanner from './NotificationBanner'
import icon from '../../assets/images/notification.png'
// import iconHome from "../../assets/images/wizard/home.png";

export default {
  component: NotificationBanner,
  title: 'Notification/Banner',
  args: {
    title: 'Enable online payment',
    desc:
      'Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.',
    allowClose: true,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    desc: { control: { type: 'text' } },
    imgPath: { control: { type: 'text' } },
    allowClose: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
}

// const NotificationBannerStory = ({ ...args }) => (
//   <NotificationBanner {...args}></NotificationBanner>
// )

const NotificationBannerStory: React.FC = ({ ...args }) => {
  const [isHide, setHide] = React.useState<boolean>(false)

  return (
    <div>
      <NotificationBanner {...args} setHide={[isHide, setHide]} />
    </div>
  )
}

export const Banner = NotificationBannerStory.bind({})
Banner.args = {
  title: 'Enable online payment',
  desc:
    'Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.',
  imgPath: icon,
  allowClose: true,
}
