/* eslint-disable */

import React from 'react'
import Modal from './modal'

export default {
  component: Modal,
  title: 'Modal',
  args: { loading: false, visible: true, mSourceName: 'Facebook' },
  argTypes: { disabled: { control: { type: 'boolean' } }, onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const primary = (args: any) => <Modal {...args} />
