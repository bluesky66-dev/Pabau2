import React, { FC } from 'react'
import styles from './Setting.module.less'

const SettingMedicalForm: FC = (props) => {
  return <div className={styles.mainBody}>{props.children}</div>
}

export default SettingMedicalForm
