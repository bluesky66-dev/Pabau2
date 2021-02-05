import React, { FC } from 'react'

import ViewSchedule from './ViewSchedule'
import { discoverAndLearnProps } from '@pabau/ui'
import backgroundImage from '../../assets/images/footer.png'

const schedule = [
  {
    key: '1',
    day: 'Today',
    webinar: [
      {
        id: '1',
        title: 'Stock Management',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isYourSchedule: true,
      },
    ],
  },
]
const discoverAndLearn = [
  {
    key: '2',
    day: 'Today',
    webinar: [
      {
        id: '1',
        title: 'Stock Management',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
      },
      {
        id: '2',
        title: 'Basic Start-Up Training',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
      },
      {
        id: '3',
        title: 'Basic Start-Up Training',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
      },
    ],
  },
  {
    key: '3',
    day: 'Tuesday, 1',
    webinar: [
      {
        id: '4',
        title: 'Basic Start-Up Training',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
      },
      {
        id: '5',
        title: 'Advanced Financials',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
      },
    ],
  },
]

export default {
  component: ViewSchedule,
  title: 'Modals/ViewScheduleModal',
  args: {
    title: 'Webinars',
    visible: false,
    schedule,
    discoverAndLearn,
  },
}

interface P {
  title: string
  visible: boolean
  schedule: discoverAndLearnProps[]
  discoverAndLearn: discoverAndLearnProps[]
}

export const ViewScheduleModalStory: FC<P> = ({
  title,
  visible,
  schedule,
  discoverAndLearn,
}) => {
  return (
    <ViewSchedule
      title={title}
      visible={visible}
      discoverAndLearn={discoverAndLearn}
      schedule={schedule}
    />
  )
}
