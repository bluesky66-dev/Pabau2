import React, { FC } from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox } from 'antd'
import { HelpTooltip } from '@pabau/ui'

const { Title } = Typography
interface AdvancedControlItems {
  type: string
  value: boolean
  help: string
  key: number
}

export const Advanced: FC = () => {
  const advancedControls: AdvancedControlItems[] = [
    {
      type: 'Raise invoice when appointment is completed',
      value: true,
      help:
        'This was automatically create an unpaid invoice the moment you mark an appointment as completed.',
      key: 1,
    },
    {
      type: 'Advanced calendar lockout',
      value: false,
      help:
        'Calendar lockout will only accept the PIN code of last logged in user, additionally, if a wrong pin is entered multiple times, the system will log out entirely and redirect to loginscreen.      ',
      key: 2,
    },
    {
      type: 'Disable booking from course',
      value: true,
      help:
        'Stops users seeing the notification for cleints to use a session from there course.',
      key: 3,
    },
    {
      type: 'Disable filtering by service',
      value: true,
      help:
        'You will not be able to filter the calendar on service availability.',
      key: 4,
    },
    {
      type: 'Auto-complete',
      value: true,
      help:
        'We will automatically complete appointments when the appointment duration has finished.',
      key: 5,
    },
    {
      type: 'Ordering the employees by location',
      value: true,
      help:
        'Your calendar will automatically arrange itself to be ordered by location.',
      key: 6,
    },
    {
      type: 'Hide client name on appointment arrival notification',
      value: true,
      help: 'We will mask the clients full name when they are checked in.',
      key: 7,
    },
    {
      type: "Allow service without contract's price",
      value: true,
      help:
        'We will allow you to book services even if they do not have a price.',
      key: 8,
    },
    {
      type: 'Hide/Show accounts',
      value: true,
      help:
        'This will allow you to view financial information from the calendar',
      key: 9,
    },
    {
      type: 'Group user columns by location',
      value: true,
      help: 'Group user columns by location',
      key: 10,
    },
    {
      type: 'Revert to original room view',
      value: true,
      help: 'Revert to original room view',
      key: 11,
    },
  ]
  return (
    <div className={styles.calendarSettingsAdvanced}>
      <div className={styles.settingContent}>
        <Title className={styles.headerText}>Advanced</Title>
        <span className={styles.hideSection}>
          <span className={`${styles.description}`}>
            Configure any further settings.
          </span>
        </span>
      </div>
      <div className={styles.advancedControls}>
        {advancedControls.map((advanced) => {
          return (
            <div key={advanced.key} className={styles.advancedCheckList}>
              <Checkbox
                key={advanced.key}
                defaultChecked={advanced.value}
                className={styles.advancedCheck}
              >
                <span className={styles.appointmentText}>{advanced.type}</span>
              </Checkbox>
              <HelpTooltip helpText={advanced.help} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Advanced
