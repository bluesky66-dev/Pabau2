import React from 'react'

import { SettingsMenu } from '@pabau/ui'
import Configuration from '../../components/Settings/Calendar/Configuration'
import AppointmentSettings from '../../components/Settings/Calendar/AppointmentSettings'
import Appearance from '../../components/Settings/Calendar/Appearance'
import Advanced from '../../components/Settings/Calendar/Advanced'

/* eslint-disable-next-line */
export interface CalendarProps {}

export function Calendar(props: CalendarProps) {
  const generalSettingsMenu1 = [
    {
      menuName: 'Configuration',
      component: <Configuration />,
    },
    {
      menuName: 'Appointment settings',
      component: <AppointmentSettings />,
    },
    {
      menuName: 'Appearance',
      component: <Appearance />,
    },
    {
      menuName: 'Advanced',
      component: <Advanced />,
    },
  ]
  return (
    <div>
      <h1>Calendar settings</h1>
      <SettingsMenu items={generalSettingsMenu1} />
    </div>
  )
}

export default Calendar
