import { Input } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  label: string
  desc: string
  name: string
  changeFormName: (formName: string) => void
}

const MedicalFormName: FC<P> = ({ label, desc, name, changeFormName }) => {
  const [formName, setFormName] = useState(name)
  const onChangeFormName = (e) => {
    setFormName(e.target.value)
    changeFormName(e.target.value)
  }
  return (
    <div className={styles.medicalFormName}>
      <div className={styles.label}>{label}</div>
      <Input placeholder={desc} value={formName} onChange={onChangeFormName} />
    </div>
  )
}

export default MedicalFormName
