import { Input } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  label: string
  desc: string
  name: string
  changeFormName: (formName: string) => void
}

const MedicalFormName: FC<P> = ({ label, desc, name, changeFormName }) => {
  const [formName, setFormName] = useState(name)
  useEffect(() => {
    changeFormName(formName)
  }, [formName])
  return (
    <div className={styles.medicalFormName}>
      <div className={styles.label}>{label}</div>
      <Input
        placeholder={desc}
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
      />
    </div>
  )
}

export default MedicalFormName
