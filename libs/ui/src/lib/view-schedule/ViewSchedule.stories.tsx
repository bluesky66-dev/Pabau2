import React, { FC } from 'react'

import ViewSchedule from './ViewSchedule'
import { discoverAndLearnProps } from '@pabau/ui'

import { schedule, discoverAndLearn } from './mock'

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
