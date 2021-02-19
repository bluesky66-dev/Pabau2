import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  title: string
}
const MedicalFormLeftSidebarDivider: FC<P> = ({ title }) => {
  return <div className={styles.medicalFormLeftSidebarDivider}>{title}</div>
}

export default MedicalFormLeftSidebarDivider
