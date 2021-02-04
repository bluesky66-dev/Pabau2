import { Radio } from 'antd'
import React, { FC, useState } from 'react'
import styles from './InnerMedicalForm.module.less'

interface OPTION_TYPE {
  id: number
  label: string
}

interface P {
  title?: string
  options?: OPTION_TYPE[]
}

const InnerRadio: FC<P> = ({ title, options }) => {
  const [optionVal, setOptionVal] = useState(1)
  return (
    <>
      <h3>{title}</h3>
      <Radio.Group
        size="small"
        value={optionVal}
        onChange={(e) => setOptionVal(e.target.value)}
      >
        {options?.map(({ id, label }) => (
          <Radio key={id} value={id} className={styles.radio}>
            {label}
          </Radio>
        ))}
      </Radio.Group>
    </>
  )
}

export default InnerRadio
