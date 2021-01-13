/* eslint-disable */

import React from 'react'
import Modal from './CreateModal'

export default {
  component: Modal,
  title: 'Create Modal',
  args: { loading: false, visible: true, mSourceName: 'Facebook' },
  argTypes: { disabled: { control: { type: 'boolean' } }, onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const CreateModal = (args: any) => <Modal {...args} />

