import React, { FC } from 'react'
import SetupChip from './SetupChip'
import SetupGrid from './SetupGrid'
import Webinar from './SetupWebinar'
import { EditOutlined } from '@ant-design/icons'
import clinicImage from '../../assets/images/our-clinic.png'
import backgroundImage from '../../assets/images/footer.png'

export default {
  component: SetupChip,
  title: 'Basics/SetupChip',
}

export const SetupChipStory: FC = () => {
  const props = {
    title: 'Blog',
    subTitle: '53 posts',
    image: <EditOutlined />,
  }

  return <SetupChip {...props} />
}

export const SetupGridStory: FC = () => {
  const props = {
    title: 'Our clinic',
    subDataTitles: [
      'Bussiness Details',
      'Users',
      'Locations',
      'General settings',
      'Integrations',
      'Data',
      'Pabau Subscription',
    ],
    image: clinicImage,
  }
  return <SetupGrid {...props} />
}

const WebinarStory = ({ ...args }) => {
  return (
    <div
      style={{
        justifyContent: 'flex-start',
        display: 'flex',
        background: '#f0f2f5',
        padding: '24px',
        height: '96vh',
      }}
    >
      <Webinar {...args} />
    </div>
  )
}

export const webinarStory = WebinarStory.bind({})
webinarStory.args = {
  title: 'Stock Management',
  name: 'Alexander Turner',
  time: 'Tuesday, 15 10:00 AM',
  timeLeft: '18:28',
  backgroundImage,
  isJoin: true,
}
