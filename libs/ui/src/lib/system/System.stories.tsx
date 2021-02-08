import React from 'react'
import { notification } from 'antd'
import System from './System'

export default {
  component: System,
  title: 'Business Details/System',
  args: {},
  argTypes: {},
}

const SystemStory = ({ ...args }) => {
  return <System {...args} />
}

export const Basic = SystemStory.bind({})
Basic.args = {
  config: {
    tretmentCycles: 'Always display',
    secureMedicalForms: 'No',
    disablePrescriptions: 'No',
    performSurgical: 'Yes',
    medicalApprovals: 'No',
    historyData: 'Yes',
  },
  onSave: (val) => {
    notification.open({ message: `${val}` })
  },
}
