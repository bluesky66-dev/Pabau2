import React from 'react'
import { CustomModal } from './CustomModal'
import { securityToolsData } from '../../assets/securityData'

export default {
  component: CustomModal,
  title: 'Modals/customModal',
  args: { datasource: securityToolsData },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const story = ({ ...args }) => (
  <CustomModal {...args} datasource={args.datasource} />
)

export const defaultTool = story.bind({})
defaultTool.args = {}
