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
      help: 'Raise invoice when appointment is completed',
      key: 1,
    },
    {
      type: 'Advanced calendar lockout',
      value: false,
      help: 'Advanced calendar lockout',
      key: 2,
    },
    {
      type: 'Disable booking from package',
      value: true,
      help: 'Disable booking from package',
      key: 3,
    },
    {
      type: 'Disable filtering by service',
      value: true,
      help: 'Disable booking by service',
      key: 4,
    },
    {
      type: 'Auto-complete',
      value: true,
      help: 'Auto-complete',
      key: 5,
    },
    {
      type: 'Ordering the employees by location',
      value: true,
      help: 'Ordering the employees by location',
      key: 6,
    },
    {
      type: 'Hide client name on appointment arrival notification',
      value: true,
      help: 'Hide client name on appointment arrival notification',
      key: 7,
    },
    {
      type: "Allow service without contract's price",
      value: true,
      help: "Allow service without contract's price",
      key: 8,
    },
    {
      type: 'Hide/Show accounts',
      value: true,
      help: 'Hide/Show accounts',
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
        <span className={styles.description}>
          configure any further settings.
        </span>
      </div>
      <div className={styles.advancedControls}>
        {advancedControls.map((advanced) => {
          return (
            <div key={advanced.key}>
              <Checkbox key={advanced.key} defaultChecked={advanced.value}>
                <span className={styles.appointmentText}>{advanced.type}</span>
              </Checkbox>
              <HelpTooltip helpText={advanced.help} />
              <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Advanced
