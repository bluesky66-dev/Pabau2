import { Input } from 'antd'
import React, { FC } from 'react'

interface P {
  title?: string
  desc?: string
  value?: string
  onChange: (value: string) => void
}

const ElementQuestion: FC<P> = ({ title, desc, value, onChange }) => {
  const onTextChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <Input placeholder={desc} onChange={onTextChange} value={value} />
    </>
  )
}

export default ElementQuestion
