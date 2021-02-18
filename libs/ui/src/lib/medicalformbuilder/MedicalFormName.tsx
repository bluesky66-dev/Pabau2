import { Input } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  label: string
  desc: string
}

const MedicalFormName: FC<P> = ({ label, desc }) => {
  return (
    <div className={styles.medicalFormName}>
      <div className={styles.label}>{label}</div>
      <Input placeholder={desc} />
    </div>
  )
}

export default MedicalFormName
