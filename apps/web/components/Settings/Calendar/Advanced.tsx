import React from 'react'
import styles from './calendar.module.less'
import { Typography } from 'antd'

const { Title } = Typography

const Advanced = () => (
  <div className={styles.calendarSettingsAdvanced}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Advanced</Title>
      <span className={styles.description}>configure any further settings.</span>
    </div>
    <div className={styles.appearancesControls}>{}</div>
  </div>
)

export default Advanced
