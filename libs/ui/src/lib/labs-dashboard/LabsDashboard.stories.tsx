import React from 'react'
import { LabsDashboard } from './LabsDashboard'

export default {
  title: 'UI/LabsDashboard',
  component: LabsDashboard,
  args: {},
  argTypes: {},
}

const LabsDashboardStory = ({ ...args }) => <LabsDashboard {...args} />

export const LabsDashboardPage = LabsDashboardStory.bind({})
LabsDashboardPage.args = {}
