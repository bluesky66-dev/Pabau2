/* eslint-disable */

import React from 'react'
import { SettingsMenu as PabauSettingsMenu } from './SettingsMenu'

export default {
  component: PabauSettingsMenu,
  title: 'Settings Menu',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const CalendarSettings = (args: any) => <PabauSettingsMenu {...args} />
