/* eslint-disable */

import React from 'react'
import BasicModalStory from './basicmodal'
import ConfirmModalStory from './confirmmodal'

export default {
  component: BasicModalStory,
  title: 'Modals/BasicModal',
  args: { title: "Basic Modal", modalWidth: 600 },
  argTypes: { onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}


export const BasicModal = (args: any) => <BasicModalStory {...args} />
export const ConfirmModal = (args: any) => <ConfirmModalStory {...args} />
