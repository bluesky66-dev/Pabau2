import { FileTextTwoTone, LeftOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  formName?: string
}

const MedicalFormInfo: FC<P> = ({ formName }) => {
  return (
    <div className={styles.medicalFormInfoPanel}>
      <LeftOutlined />
      <FileTextTwoTone />
      <span>{formName}</span>
    </div>
  )
}

export default MedicalFormInfo
