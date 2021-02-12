import { Checkbox } from 'antd'
import React, { FC } from 'react'
import styles from './InnerMedicalForm.module.less'

interface OPTION_TYPE {
  id: number
  name: string
}

interface P {
  title?: string
  options?: OPTION_TYPE[]
}

const InnerCheckbox: FC<P> = ({ title, options }) => {
  return (
    <>
      <h3>{title}</h3>
      {options?.map(({ id, name }) => (
        <Checkbox key={id} value={id} className={styles.checkbox}>
          {name}
        </Checkbox>
      ))}
    </>
  )
}

export default InnerCheckbox
