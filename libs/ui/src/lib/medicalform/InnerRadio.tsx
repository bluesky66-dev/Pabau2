import { Radio } from 'antd'
import React, { FC, useState } from 'react'

interface P {
  title?: string
  options?: any[]
}
const InnerRadio: FC<P> = ({ title, options }) => {
  const [optionVal, setOptionVal] = useState(1)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
  }
  return (
    <>
      <h3>{title}</h3>
      <Radio.Group
        size="small"
        value={optionVal}
        onChange={(e) => setOptionVal(e.target.value)}
      >
        {options?.map((item, index) => (
          <Radio key={index} value={item.id} style={radioStyle}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    </>
  )
}

export default InnerRadio
