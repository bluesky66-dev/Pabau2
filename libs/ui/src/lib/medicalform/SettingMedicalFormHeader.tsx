import React, { FC } from 'react'
import styles from './Setting.module.less'

interface P {
  title?: string
}

export const SettingMedicalFormHeader: FC<P> = ({ title }) => {
  return (
    <div className={styles.formItem}>
      <div className={`${styles.formCaption} ${styles.formCommon}`}>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default SettingMedicalFormHeader
