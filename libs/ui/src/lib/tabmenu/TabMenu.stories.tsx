/* eslint-disable */

import React from 'react'
import { TabMenu } from './TabMenu'

export default {
  component: TabMenu,
  title: 'Layout/Tab Menu',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const Left = (args: any) => <TabMenu {...args} />
export const Top = (args: any) => <TabMenu {...args} tabPosition="top" />
