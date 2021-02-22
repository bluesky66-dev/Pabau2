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

export const Left = (args: any) => (
  <TabMenu {...args} menuItems={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </TabMenu>
)
export const Top = (args: any) => (
  <TabMenu
    {...args}
    menuItems={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}
    tabPosition="top"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </TabMenu>
)
