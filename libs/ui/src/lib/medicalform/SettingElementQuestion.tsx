import { Input } from 'antd'
import React, { FC } from 'react'

interface P {
  title?: string
  desc?: string
  value?: string
  onChangeQuestion?: (value: string) => void
}

const SettingElementQuestion: FC<P> = ({
  title,
  desc,
  value,
  onChangeQuestion,
}) => {
  const onTextChange = (e) => {
    onChangeQuestion?.(e.target.value)
  }
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <Input placeholder={desc} onChange={onTextChange} value={value} />
    </>
  )
}

export default SettingElementQuestion
