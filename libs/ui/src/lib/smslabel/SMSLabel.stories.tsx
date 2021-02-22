import React from 'react'
import { SMSLabel } from './SMSLabel'

export default {
  title: 'UI/SMSLabel',
  component: SMSLabel,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['?', 'D', 'I', 'U', 'E'],
      },
    },
  },
}

const SMSLabelStory = ({ ...args }) => <SMSLabel {...args} />

export const BasicSMSLabel = SMSLabelStory.bind({})

export const InvalidSMSLabel = SMSLabelStory.bind({})
InvalidSMSLabel.args = {
  status: 'I',
}

export const DeliveredSMSLabel = SMSLabelStory.bind({})
DeliveredSMSLabel.args = {
  status: 'D',
}

export const ExpiredSMSLabel = SMSLabelStory.bind({})
ExpiredSMSLabel.args = {
  status: 'U',
}

export const BouncedSMSLabel = SMSLabelStory.bind({})
BouncedSMSLabel.args = {
  status: 'E',
}

export const WaitingSMSLabel = SMSLabelStory.bind({})
WaitingSMSLabel.args = {
  status: '?',
}
