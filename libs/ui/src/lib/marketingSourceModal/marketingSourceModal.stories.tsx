/* eslint-disable */

import React from 'react'
import Modal from './marketingSourceModal'

export default {
  component: Modal,
  title: 'MarketingSourceModal',
  args: { loading: false, visible: true, mSourceName: 'Facebook' },
  argTypes: { disabled: { control: { type: 'boolean' } }, onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const MarketingSourceModal = (args: any) => <Modal {...args} />

