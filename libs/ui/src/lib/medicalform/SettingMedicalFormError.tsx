import React, { FC } from 'react'
import styles from './Setting.module.less'

interface P {
  errMsg?: string
}

const SettingMedicalFormError: FC<P> = ({ errMsg }) => {
  return <div className={styles.errMsg}>{errMsg}</div>
}

export default SettingMedicalFormError
