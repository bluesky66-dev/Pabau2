import React from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox, Select } from 'antd'
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
const options = [{ value: 'Small' }, { value: 'Medium' }, { value: 'Large' }]
const Appearance = () => (
  <div className={styles.calendarSettingsAppearance}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appearance</Title>
      <span className={styles.description}>
        Customize the look and feel of the appointment card such <br /> as changing the layout of
        both the tooltip and the <br /> appointment card itself.
      </span>
    </div>
    <div className={styles.generalControls}>
      <div className={styles.generalBlock}>
        <Title className={styles.blockText} level={4}>
          General
        </Title>
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
    <div className={styles.fontControls}>
      <div className={styles.fontBlock}>
        <Title className={styles.blockText} level={4}>
          Font size
        </Title>
        <Select
          className={styles.fontSizeSelect}
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['Small']}
          options={options}
        />
      </div>
    </div>
  </div>
)

export default Appearance
