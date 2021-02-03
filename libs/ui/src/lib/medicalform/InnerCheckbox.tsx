import { Checkbox } from 'antd'
import React, { FC } from 'react'
import styles from './InnerMedicalForm.module.less'

interface OPTION_TYPE {
  id: number
  label: string
}

interface P {
  title?: string
  options?: OPTION_TYPE[]
}

const InnerCheckbox: FC<P> = ({ title, options }) => {
  return (
    <>
      <h3>{title}</h3>
      {options?.map(({ id, label }) => (
        <Checkbox key={id} value={id} className={styles.checkbox}>
          {label}
        </Checkbox>
      ))}
    </>
  )
}

export default InnerCheckbox
