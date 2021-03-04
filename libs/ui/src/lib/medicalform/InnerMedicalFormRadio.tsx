import { OptionType } from '@pabau/ui'
import { Radio } from 'antd'
import React, { FC, useState } from 'react'
import styles from './Inner.module.less'

interface P {
  title: string
  options: OptionType[]
}

const InnerMedicalFormRadio: FC<P> = ({ title, options }) => {
  const [optionValue, setOptionValue] = useState(1)
  return (
    <>
      <h3>{title}</h3>
      <Radio.Group
        size="small"
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
      >
        {options?.map(({ id, name }) => (
          <Radio key={id} value={id} className={styles.radio}>
            {name}
          </Radio>
        ))}
      </Radio.Group>
    </>
  )
}

export default InnerMedicalFormRadio
