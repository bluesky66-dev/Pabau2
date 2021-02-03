import { Checkbox } from 'antd'
import React, { FC } from 'react'

interface P {
  title?: string
  options?: any
}
const InnerCheckbox: FC<P> = ({ title, options }) => {
  const checkboxStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
    marginLeft: '0px',
  }
  return (
    <>
      <h3>{title}</h3>
      {options.map((item, index) => (
        <Checkbox key={index} value={item.id} style={checkboxStyle}>
          {item.label}
        </Checkbox>
      ))}
    </>
  )
}

export default InnerCheckbox
