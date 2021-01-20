/* eslint-disable */

import React from 'react'
import BasicModalStory from './basicmodal'
import ConfirmModalStory from './confirmmodal'

export default {
  component: BasicModalStory,
  title: 'BasicModal',
  args: { title: "Basic Modal", modalWidth: 682, visible: true },
  argTypes: { onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}


export const BasicModal = (args: any) => <BasicModalStory {...args} />
export const ConfirmModal = (args: any) => <ConfirmModalStory {...args} />
