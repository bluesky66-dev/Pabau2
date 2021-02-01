import React, { FC } from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox } from 'antd'
import { HelpTooltip } from '@pabau/ui'

const { Title } = Typography
interface AdvancedControlItems {
  type: string
  value: boolean
  help: string
}

export const Advanced: FC = () => {
  const advancedControls: AdvancedControlItems[] = [
    {
      type: 'Raise invoice when appointment is completed',
      value: true,
      help: 'Raise invoice when appointment is completed',
    },
    {
      type: 'Advanced calendar lockout',
      value: false,
      help: 'Advanced calendar lockout',
    },
    {
      type: 'Disable booking from package',
      value: true,
      help: 'Disable booking from package',
    },
    {
      type: 'Disable filtering by service',
      value: true,
      help: 'Disable booking by service',
    },
    {
      type: 'Auto-complete',
      value: true,
      help: 'Auto-complete',
    },
    {
      type: 'Ordering the employees by location',
      value: true,
      help: 'Ordering the employees by location',
    },
    {
      type: 'Hide client name on appointment arrival notification',
      value: true,
      help: 'Hide client name on appointment arrival notification',
    },
    {
      type: "Allow service without contract's price",
      value: true,
      help: "Allow service without contract's price",
    },
    {
      type: 'Hide/Show accounts',
      value: true,
      help: 'Hide/Show accounts',
    },
    {
      type: 'Group user columns by location',
      value: true,
      help: 'Group user columns by location',
    },
    {
      type: 'Revert to original room view',
      value: true,
      help: 'Revert to original room view',
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
        {advancedControls.map((advanced, index) => {
          return (
            <div key={index}>
              <Checkbox key={index} defaultChecked={advanced.value}>
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
