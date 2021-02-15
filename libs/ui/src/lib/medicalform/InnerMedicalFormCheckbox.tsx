import { OPTION_TYPE } from '@pabau/ui'
import { Checkbox } from 'antd'
import React, { FC } from 'react'
import styles from './Inner.module.less'

interface P {
  title?: string
  options?: OPTION_TYPE[]
}

const InnerMedicalFormCheckbox: FC<P> = ({ title, options }) => {
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

export default InnerMedicalFormCheckbox
