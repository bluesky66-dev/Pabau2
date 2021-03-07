import React from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox, Select } from 'antd'
import { HelpTooltip } from '@pabau/ui'

const { Title } = Typography

interface AppearanceGeneralItems {
  type: string
  value: boolean
  help: string
  key: number
}
const AppearanceGeneralItems: AppearanceGeneralItems[] = [
  {
    type: 'Enable staff initials',
    value: true,
    help: 'We will hide your users photos and show only the initials.',
    key: 1,
  },
  {
    type: 'Hide surnames',
    value: false,
    help: 'We will hide your clients surname entirely.',
    key: 2,
  },
  {
    type: 'Hide appointment times',
    value: true,
    help:
      'We will not show the appointment time on your appointment (allowing for more space).',
    key: 3,
  },
]
const options = [{ value: 'Small' }, { value: 'Medium' }, { value: 'Large' }]
const Appearance = () => (
  <div className={styles.calendarSettingsAppearance}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appearance</Title>
      <span className={styles.description}>
        Customize the look and feel of the appointment card such as changing the
        layout of both the tooltip and the appointment card itself.
      </span>
    </div>
    <div className={styles.generalControls}>
      <div className={styles.generalBlock}>
        <Title className={styles.blockText} level={4}>
          General
        </Title>
        {AppearanceGeneralItems.map((general) => {
          return (
            <div key={general.key}>
              <Checkbox key={general.key} defaultChecked={general.value}>
                <span className={styles.appointmentText}>{general.type}</span>
              </Checkbox>
              <HelpTooltip helpText={general.help} />
              <br />
            </div>
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
