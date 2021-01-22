import React from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

interface AppearanceGeneralItems {
  type: string
  value: boolean
}
const AppearanceGeneralItems: AppearanceGeneralItems[] = [
  {
    type: 'Enable initials',
    value: true,
  },
  {
    type: 'Hide surnames',
    value: false,
  },
  {
    type: 'All day at top',
    value: true,
  },
  {
    type: 'Hide appointment times',
    value: true,
  },
]
const Appearance = () => (
  <div className={styles.calendarSettingsAppearance}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appearance</Title>
      <span className={styles.description}>
        Customize the look and feel of the appointment card such <br /> as changing the layout of
        both the tooltip and the <br /> appointment card itself.
      </span>
    </div>
    <div className={styles.appearancesControls}>
      <b>General</b>
      <span>Some description here.</span>
      {AppearanceGeneralItems.map((general, index) => {
        return (
          <>
            <Checkbox defaultChecked={general.value}>
              <span className={styles.appointmentText}>{general.type}</span>
            </Checkbox>
            <QuestionCircleOutlined className={styles.appointmentIcon} />
            <br />
          </>
        )
      })}
    </div>
  </div>
)

export default Appearance
