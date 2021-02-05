import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

interface P {
  title?: string
}

export const MedicalFormHeader: FC<P> = ({ title }) => {
  return (
    <div className={styles.formItem}>
      <div className={`${styles.formCaption} ${styles.formCommon}`}>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default MedicalFormHeader
