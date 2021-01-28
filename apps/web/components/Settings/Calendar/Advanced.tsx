import React, { FC } from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
interface AdvancedControlItems {
  type: string
  value: boolean
}

export const Advanced: FC = () => {
  const advancedControls: AdvancedControlItems[] = [
    {
      type: 'Raise invoice when appointment is completed',
      value: true,
    },
    {
      type: 'Advanced calendar lockout',
      value: false,
    },
    {
      type: 'Disable booking from package',
      value: true,
    },
    {
      type: 'Disable filtering by service',
      value: true,
    },
    {
      type: 'Auto-complete',
      value: true,
    },
    {
      type: 'Ordering the employees by location',
      value: true,
    },
    {
      type: 'Hide client name on appointment arrival notification',
      value: true,
    },
    {
      type: "Allow service without contract's price",
      value: true,
    },
    {
      type: 'Hide/Show accounts',
      value: true,
    },
    {
      type: 'Group user columns by location',
      value: true,
    },
    {
      type: 'Revert to original room view',
      value: true,
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
            <>
              <Checkbox defaultChecked={advanced.value}>
                <span className={styles.appointmentText}>{advanced.type}</span>
              </Checkbox>
              <QuestionCircleOutlined className={styles.advancedIcon} />
              <br />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Advanced
