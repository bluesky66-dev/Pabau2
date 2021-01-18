/* eslint-disable */

import React from 'react'
import { CalendarSettings as PabauCalendarSettings } from './CalendarSettings'

export default {
  component: PabauCalendarSettings,
  title: 'Calendar Settings',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const CalendarSettings = (args: any) => <PabauCalendarSettings {...args} />
