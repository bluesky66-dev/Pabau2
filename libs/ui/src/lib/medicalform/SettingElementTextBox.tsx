import { Input } from 'antd'
import React, { FC } from 'react'

const { TextArea } = Input

interface P {
  title: string
  desc: string
  value: string
  onChangeText: (value: string) => void
}

const SettingElementTextBox: FC<P> = ({ title, desc, value, onChangeText }) => {
  const onTextChange = (e) => {
    onChangeText?.(e.target.value)
  }
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <TextArea
        placeholder={desc}
        rows={4}
        onChange={onTextChange}
        value={value}
      />
    </>
  )
}

export default SettingElementTextBox
