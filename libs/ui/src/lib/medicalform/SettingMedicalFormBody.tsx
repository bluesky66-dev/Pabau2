import React, { FC } from 'react'
import styles from './Setting.module.less'

export const SettingMedicalFormBody: FC = (props) => {
  return (
    <div className={styles.formItem}>
      <div className={`${styles.formQuestion} ${styles.formCommon}`}>
        {props.children}
      </div>
    </div>
  )
}

export default SettingMedicalFormBody
